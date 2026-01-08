import React, { useState, useRef, useCallback } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { validateFile, isImageFile } from '../../lib/supabase';
import { FaPaperPlane, FaPaperclip, FaTimes, FaImage, FaFile } from 'react-icons/fa';

const MessageInput: React.FC = () => {
  const { sendMessage, setTyping, isSending, currentRoom } = useChatContext();
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      setFileError(validation.error || 'Invalid file');
      return;
    }

    setFileError(null);
    setSelectedFile(file);

    if (isImageFile(file.name)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!message.trim() && !selectedFile) || !currentRoom) return;

    await sendMessage(message, selectedFile || undefined);
    setMessage('');
    clearFile();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    // Typing indicator with debounce
    setTyping(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      className={`message-input-container ${dragActive ? 'drag-active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {dragActive && (
        <div className="drag-overlay">
          <FaImage className="drag-icon" />
          <span>Drop file here</span>
        </div>
      )}

      {fileError && (
        <div className="file-error">
          <span>{fileError}</span>
          <button onClick={() => setFileError(null)} className="error-close">
            <FaTimes />
          </button>
        </div>
      )}

      {selectedFile && (
        <div className="file-preview">
          {filePreview ? (
            <img src={filePreview} alt="Preview" className="preview-image" />
          ) : (
            <div className="file-info">
              <FaFile className="file-preview-icon" />
              <span className="file-name">{selectedFile.name}</span>
            </div>
          )}
          <button onClick={clearFile} className="remove-file" title="Remove file">
            <FaTimes />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="file-input"
          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
        />
        
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="attach-btn"
          title="Attach file"
        >
          <FaPaperclip />
        </button>

        <textarea
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="message-textarea"
          rows={1}
          disabled={isSending}
        />

        <button
          type="submit"
          className="send-btn"
          disabled={(!message.trim() && !selectedFile) || isSending}
          title="Send message"
        >
          {isSending ? (
            <div className="send-spinner" />
          ) : (
            <FaPaperPlane />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

