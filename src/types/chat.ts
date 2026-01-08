export interface Room {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  created_by: string;
  last_message?: string;
  last_message_at?: string;
  participant_count?: number;
}

export interface Message {
  id: string;
  room_id: string;
  user_id: string;
  username: string;
  content: string;
  file_url?: string;
  file_name?: string;
  file_type?: string;
  created_at: string;
}

export interface ChatUser {
  id: string;
  username: string;
}

export interface TypingIndicator {
  user_id: string;
  username: string;
  room_id: string;
}

