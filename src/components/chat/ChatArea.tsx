import React, { useEffect, useRef } from 'react';
import { useChatContext } from '../../context/ChatContext';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { FaComments, FaHashtag, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const ChatArea: React.FC = () => {
  const { currentRoom, messages, typingUsers, userId, isLoading, isDemoMode } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!currentRoom) {
    return (
      <div className="chat-area-empty">
        <div className="empty-state">
          <FaComments className="empty-icon" />
          <h3>Welcome to Chat</h3>
          <p>Select a room from the sidebar or create a new one to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-area">
      {isDemoMode && (
        <div className="demo-banner">
          <FaExclamationTriangle className="demo-icon" />
          <span>Demo Mode - Messages are stored locally. Configure Supabase for real-time chat.</span>
        </div>
      )}
      <div className="chat-header">
        <div className="chat-header-info">
          <h2 className="chat-room-name">
            <FaHashtag className="hash-icon" />
            {currentRoom.name}
          </h2>
          {currentRoom.description && (
            <p className="chat-room-description">
              <FaInfoCircle className="info-icon" />
              {currentRoom.description}
            </p>
          )}
        </div>
      </div>

      <div className="messages-container" ref={messagesContainerRef}>
        {isLoading ? (
          <div className="messages-loading">
            <div className="loading-spinner" />
            <span>Loading messages...</span>
          </div>
        ) : messages.length === 0 ? (
          <div className="messages-empty">
            <FaComments className="empty-messages-icon" />
            <p>No messages yet</p>
            <p className="empty-hint">Be the first to say hello!</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isOwn={message.user_id === userId}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
        
        {typingUsers.length > 0 && (
          <div className="typing-indicator">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="typing-text">
              {typingUsers.map(t => t.username).join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </span>
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatArea;

