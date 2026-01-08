-- =================================================================
-- SUPABASE DATABASE SETUP FOR CHAT FEATURE
-- Run this SQL in your Supabase SQL Editor
-- =================================================================

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    created_by VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_message TEXT,
    last_message_at TIMESTAMP WITH TIME ZONE
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
    user_id VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    content TEXT,
    file_url TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_messages_room_id ON messages(room_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at);
CREATE INDEX IF NOT EXISTS idx_rooms_created_at ON rooms(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policies for rooms (anyone can read and create)
CREATE POLICY "Anyone can view rooms" ON rooms
    FOR SELECT USING (true);

CREATE POLICY "Anyone can create rooms" ON rooms
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update rooms" ON rooms
    FOR UPDATE USING (true);

-- Create policies for messages (anyone can read and create)
CREATE POLICY "Anyone can view messages" ON messages
    FOR SELECT USING (true);

CREATE POLICY "Anyone can send messages" ON messages
    FOR INSERT WITH CHECK (true);

-- Enable realtime for both tables
ALTER PUBLICATION supabase_realtime ADD TABLE rooms;
ALTER PUBLICATION supabase_realtime ADD TABLE messages;

-- =================================================================
-- STORAGE SETUP (Run this after creating the bucket in Supabase Dashboard)
-- =================================================================

-- Create storage bucket for chat files (do this in Supabase Dashboard first)
-- Go to Storage > Create Bucket > Name: "chat-files" > Make it public

-- Then run these policies:
-- (Note: You may need to run these separately in the Storage Policies section)

-- Allow anyone to upload files
-- INSERT policy for chat-files bucket
-- Policy name: "Allow public uploads"
-- Allowed operation: INSERT
-- Policy definition: (bucket_id = 'chat-files'::text)

-- Allow anyone to read files
-- SELECT policy for chat-files bucket
-- Policy name: "Allow public reads"
-- Allowed operation: SELECT
-- Policy definition: (bucket_id = 'chat-files'::text)

