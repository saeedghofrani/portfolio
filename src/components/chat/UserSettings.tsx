import React, { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { FaUser, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const UserSettings: React.FC = () => {
  const { username, updateUsername } = useChatContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);

  const handleSave = () => {
    if (newUsername.trim() && newUsername.trim() !== username) {
      updateUsername(newUsername.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewUsername(username);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="user-settings">
      <div className="user-avatar">
        <FaUser />
      </div>
      
      {isEditing ? (
        <div className="username-edit">
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            className="username-input"
            maxLength={20}
            autoFocus
          />
          <button onClick={handleSave} className="save-btn" title="Save">
            <FaCheck />
          </button>
          <button onClick={handleCancel} className="cancel-btn" title="Cancel">
            <FaTimes />
          </button>
        </div>
      ) : (
        <div className="username-display">
          <span className="username-text">{username}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="edit-btn"
            title="Edit username"
          >
            <FaEdit />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSettings;

