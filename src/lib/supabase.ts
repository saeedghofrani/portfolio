import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration
// You'll need to replace these with your actual Supabase credentials
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseUrl.startsWith('http') && supabaseAnonKey);

// Create Supabase client only if configured
export const supabase: SupabaseClient | null = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to generate anonymous user ID
export const getOrCreateUserId = (): string => {
  let userId = localStorage.getItem('chat_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('chat_user_id', userId);
  }
  return userId;
};

// Helper to get or set username
export const getOrCreateUsername = (): string => {
  let username = localStorage.getItem('chat_username');
  if (!username) {
    username = `Guest_${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    localStorage.setItem('chat_username', username);
  }
  return username;
};

export const setUsername = (name: string): void => {
  localStorage.setItem('chat_username', name);
};

// File upload helper with security checks
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'application/zip',
  'application/x-zip-compressed',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const validateFile = (file: File): { valid: boolean; error?: string } => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'File type not allowed. Allowed: images, PDF, Word, Excel, text, and ZIP files.' };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'File too large. Maximum size is 10MB.' };
  }
  return { valid: true };
};

export const uploadFile = async (file: File, roomId: string): Promise<{ url: string; path: string } | null> => {
  const validation = validateFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Demo mode - store file as base64 in localStorage (not recommended for production)
  if (!isSupabaseConfigured) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        const fileId = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        const path = `demo/${roomId}/${fileId}`;
        
        // Store in localStorage (with size limit considerations)
        try {
          localStorage.setItem(`file_${path}`, base64);
          resolve({ url: base64, path });
        } catch {
          reject(new Error('Storage full. Demo mode has limited file storage.'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = `${roomId}/${fileName}`;

  const { error } = await supabase!.storage
    .from('chat-files')
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data: { publicUrl } } = supabase!.storage
    .from('chat-files')
    .getPublicUrl(filePath);

  return { url: publicUrl, path: filePath };
};

export const isImageFile = (fileName: string): boolean => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
  return imageExtensions.includes(ext);
};
