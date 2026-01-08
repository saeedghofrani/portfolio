import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { supabase, isSupabaseConfigured, getOrCreateUserId, getOrCreateUsername, setUsername as saveUsername, uploadFile } from '../lib/supabase';
import type { Room, Message, TypingIndicator } from '../types/chat';

// Demo mode storage keys
const DEMO_ROOMS_KEY = 'demo_chat_rooms';
const DEMO_MESSAGES_KEY = 'demo_chat_messages';

interface ChatContextType {
  // User
  userId: string;
  username: string;
  updateUsername: (name: string) => void;
  
  // Rooms
  rooms: Room[];
  currentRoom: Room | null;
  setCurrentRoom: (room: Room | null) => void;
  createRoom: (name: string, description?: string) => Promise<Room | null>;
  loadRooms: () => Promise<void>;
  
  // Messages
  messages: Message[];
  sendMessage: (content: string, file?: File) => Promise<void>;
  loadMessages: (roomId: string) => Promise<void>;
  
  // Typing
  typingUsers: TypingIndicator[];
  setTyping: (isTyping: boolean) => void;
  
  // Loading states
  isLoading: boolean;
  isSending: boolean;
  error: string | null;
  
  // Demo mode indicator
  isDemoMode: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

// Demo mode helper functions
const getDemoRooms = (): Room[] => {
  try {
    const data = localStorage.getItem(DEMO_ROOMS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveDemoRooms = (rooms: Room[]) => {
  localStorage.setItem(DEMO_ROOMS_KEY, JSON.stringify(rooms));
};

const getDemoMessages = (roomId: string): Message[] => {
  try {
    const data = localStorage.getItem(`${DEMO_MESSAGES_KEY}_${roomId}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveDemoMessages = (roomId: string, messages: Message[]) => {
  localStorage.setItem(`${DEMO_MESSAGES_KEY}_${roomId}`, JSON.stringify(messages));
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId] = useState(() => getOrCreateUserId());
  const [username, setUsernameState] = useState(() => getOrCreateUsername());
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<TypingIndicator[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messageChannelRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roomChannelRef = useRef<any>(null);

  const isDemoMode = !isSupabaseConfigured;

  const updateUsername = useCallback((name: string) => {
    saveUsername(name);
    setUsernameState(name);
  }, []);

  // Load all rooms
  const loadRooms = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (isDemoMode) {
        // Demo mode - load from localStorage
        const demoRooms = getDemoRooms();
        setRooms(demoRooms);
      } else {
        // Supabase mode
        const { data, error: fetchError } = await supabase!
          .from('rooms')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (fetchError) throw fetchError;
        setRooms(data || []);
      }
    } catch (err) {
      console.error('Error loading rooms:', err);
      setError('Failed to load rooms');
    } finally {
      setIsLoading(false);
    }
  }, [isDemoMode]);

  // Create a new room
  const createRoom = useCallback(async (name: string, description?: string): Promise<Room | null> => {
    setError(null);
    try {
      const newRoom: Room = {
        id: `room_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: name.trim(),
        description: description?.trim() || undefined,
        created_by: userId,
        created_at: new Date().toISOString(),
      };

      if (isDemoMode) {
        // Demo mode - save to localStorage
        const demoRooms = getDemoRooms();
        demoRooms.unshift(newRoom);
        saveDemoRooms(demoRooms);
        setRooms(demoRooms);
        return newRoom;
      } else {
        // Supabase mode
        const { data, error: insertError } = await supabase!
          .from('rooms')
          .insert([{
            name: name.trim(),
            description: description?.trim() || null,
            created_by: userId,
            created_at: new Date().toISOString(),
          }])
          .select()
          .single();

        if (insertError) throw insertError;
        
        setRooms(prev => [data, ...prev]);
        return data;
      }
    } catch (err) {
      console.error('Error creating room:', err);
      setError('Failed to create room');
      return null;
    }
  }, [userId, isDemoMode]);

  // Load messages for a room
  const loadMessages = useCallback(async (roomId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (isDemoMode) {
        // Demo mode - load from localStorage
        const demoMessages = getDemoMessages(roomId);
        setMessages(demoMessages);
      } else {
        // Supabase mode
        const { data, error: fetchError } = await supabase!
          .from('messages')
          .select('*')
          .eq('room_id', roomId)
          .order('created_at', { ascending: true })
          .limit(100);

        if (fetchError) throw fetchError;
        setMessages(data || []);
      }
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  }, [isDemoMode]);

  // Send a message
  const sendMessage = useCallback(async (content: string, file?: File) => {
    if (!currentRoom) return;
    
    setIsSending(true);
    setError(null);
    
    try {
      let fileUrl: string | undefined;
      let fileName: string | undefined;
      let fileType: string | undefined;

      if (file) {
        const uploadResult = await uploadFile(file, currentRoom.id);
        if (uploadResult) {
          fileUrl = uploadResult.url;
          fileName = file.name;
          fileType = file.type;
        }
      }

      const newMessage: Message = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        room_id: currentRoom.id,
        user_id: userId,
        username,
        content: content.trim(),
        file_url: fileUrl,
        file_name: fileName,
        file_type: fileType,
        created_at: new Date().toISOString(),
      };

      if (isDemoMode) {
        // Demo mode - save to localStorage
        const demoMessages = getDemoMessages(currentRoom.id);
        demoMessages.push(newMessage);
        saveDemoMessages(currentRoom.id, demoMessages);
        setMessages(demoMessages);

        // Update room's last message
        const demoRooms = getDemoRooms();
        const roomIndex = demoRooms.findIndex(r => r.id === currentRoom.id);
        if (roomIndex !== -1) {
          demoRooms[roomIndex].last_message = content.trim() || fileName || 'File shared';
          demoRooms[roomIndex].last_message_at = new Date().toISOString();
          saveDemoRooms(demoRooms);
          setRooms(demoRooms);
        }
      } else {
        // Supabase mode
        const { error: insertError } = await supabase!
          .from('messages')
          .insert([{
            room_id: currentRoom.id,
            user_id: userId,
            username,
            content: content.trim(),
            file_url: fileUrl || null,
            file_name: fileName || null,
            file_type: fileType || null,
            created_at: new Date().toISOString(),
          }]);

        if (insertError) throw insertError;

        // Update room's last message
        await supabase!
          .from('rooms')
          .update({
            last_message: content.trim() || fileName || 'File shared',
            last_message_at: new Date().toISOString(),
          })
          .eq('id', currentRoom.id);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message');
    } finally {
      setIsSending(false);
    }
  }, [currentRoom, userId, username, isDemoMode]);

  // Set typing indicator
  const setTyping = useCallback((isTyping: boolean) => {
    if (!currentRoom || !messageChannelRef.current || isDemoMode) return;

    if (isTyping) {
      messageChannelRef.current.send({
        type: 'broadcast',
        event: 'typing',
        payload: { user_id: userId, username, room_id: currentRoom.id },
      });
    }
  }, [currentRoom, userId, username, isDemoMode]);

  // Subscribe to real-time messages for current room (Supabase mode only)
  useEffect(() => {
    if (!currentRoom) {
      setMessages([]);
      return;
    }

    loadMessages(currentRoom.id);

    // Skip real-time subscription in demo mode
    if (isDemoMode || !supabase) return;

    // Clean up previous subscription
    if (messageChannelRef.current) {
      supabase.removeChannel(messageChannelRef.current);
    }

    // Subscribe to new messages
    const channel = supabase
      .channel(`room-${currentRoom.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `room_id=eq.${currentRoom.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => {
            // Avoid duplicates
            if (prev.some(m => m.id === newMessage.id)) return prev;
            return [...prev, newMessage];
          });
        }
      )
      .on('broadcast', { event: 'typing' }, ({ payload }) => {
        if (payload.user_id !== userId) {
          setTypingUsers(prev => {
            const existing = prev.find(t => t.user_id === payload.user_id);
            if (existing) return prev;
            return [...prev, payload];
          });

          // Clear typing indicator after 3 seconds
          if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
          }
          typingTimeoutRef.current = setTimeout(() => {
            setTypingUsers(prev => prev.filter(t => t.user_id !== payload.user_id));
          }, 3000);
        }
      })
      .subscribe();

    messageChannelRef.current = channel;

    return () => {
      if (messageChannelRef.current && supabase) {
        supabase.removeChannel(messageChannelRef.current);
      }
    };
  }, [currentRoom, loadMessages, userId, isDemoMode]);

  // Subscribe to room changes (Supabase mode only)
  useEffect(() => {
    loadRooms();

    // Skip real-time subscription in demo mode
    if (isDemoMode || !supabase) return;

    const channel = supabase
      .channel('rooms-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'rooms' },
        () => {
          loadRooms();
        }
      )
      .subscribe();

    roomChannelRef.current = channel;

    return () => {
      if (roomChannelRef.current && supabase) {
        supabase.removeChannel(roomChannelRef.current);
      }
    };
  }, [loadRooms, isDemoMode]);

  const value: ChatContextType = {
    userId,
    username,
    updateUsername,
    rooms,
    currentRoom,
    setCurrentRoom,
    createRoom,
    loadRooms,
    messages,
    sendMessage,
    loadMessages,
    typingUsers,
    setTyping,
    isLoading,
    isSending,
    error,
    isDemoMode,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
