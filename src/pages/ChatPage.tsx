import React from 'react';
import { ChatProvider } from '../context/ChatContext';
import RoomsList from '../components/chat/RoomsList';
import ChatArea from '../components/chat/ChatArea';
import UserSettings from '../components/chat/UserSettings';
import '../styles/chat.css';

const ChatPage: React.FC = () => {
  return (
    <ChatProvider>
      <div className="chat-page">
        <div className="chat-layout">
          <div className="chat-sidebar">
            <UserSettings />
            <RoomsList />
          </div>
          <div className="chat-main">
            <ChatArea />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatPage;

