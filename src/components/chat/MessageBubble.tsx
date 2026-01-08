import React from 'react';
import { FaDownload, FaFile, FaFilePdf, FaFileWord, FaFileExcel, FaFileArchive, FaFileAlt } from 'react-icons/fa';
import { isImageFile } from '../../lib/supabase';
import type { Message } from '../../types/chat';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwn }) => {
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.toLowerCase().split('.').pop();
    switch (ext) {
      case 'pdf':
        return <FaFilePdf className="file-icon pdf" />;
      case 'doc':
      case 'docx':
        return <FaFileWord className="file-icon word" />;
      case 'xls':
      case 'xlsx':
        return <FaFileExcel className="file-icon excel" />;
      case 'zip':
      case 'rar':
      case '7z':
        return <FaFileArchive className="file-icon archive" />;
      case 'txt':
        return <FaFileAlt className="file-icon text" />;
      default:
        return <FaFile className="file-icon" />;
    }
  };

  const renderFileContent = () => {
    if (!message.file_url || !message.file_name) return null;

    if (isImageFile(message.file_name)) {
      return (
        <div className="message-image-container">
          <img
            src={message.file_url}
            alt={message.file_name}
            className="message-image"
            loading="lazy"
            onClick={() => window.open(message.file_url, '_blank')}
          />
        </div>
      );
    }

    return (
      <a
        href={message.file_url}
        target="_blank"
        rel="noopener noreferrer"
        className="message-file"
      >
        {getFileIcon(message.file_name)}
        <span className="file-name">{message.file_name}</span>
        <FaDownload className="download-icon" />
      </a>
    );
  };

  return (
    <div className={`message-wrapper ${isOwn ? 'own' : 'other'}`}>
      <div className={`message-bubble ${isOwn ? 'own' : 'other'}`}>
        {!isOwn && (
          <span className="message-username">{message.username}</span>
        )}
        {message.content && (
          <p className="message-content">{message.content}</p>
        )}
        {renderFileContent()}
        <span className="message-time">{formatTime(message.created_at)}</span>
      </div>
    </div>
  );
};

export default MessageBubble;

