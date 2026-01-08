import React, { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { FaPlus, FaUsers, FaClock, FaHashtag } from 'react-icons/fa';
import type { Room } from '../../types/chat';

const RoomsList: React.FC = () => {
  const { rooms, currentRoom, setCurrentRoom, createRoom, isLoading } = useChatContext();
  const [isCreating, setIsCreating] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDescription, setNewRoomDescription] = useState('');

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    const room = await createRoom(newRoomName, newRoomDescription);
    if (room) {
      setNewRoomName('');
      setNewRoomDescription('');
      setIsCreating(false);
      setCurrentRoom(room);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="rooms-sidebar">
      <div className="rooms-header">
        <h2 className="rooms-title">
          <FaUsers className="rooms-title-icon" />
          Chat Rooms
        </h2>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="create-room-btn"
          title="Create new room"
        >
          <FaPlus />
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleCreateRoom} className="create-room-form">
          <input
            type="text"
            placeholder="Room name..."
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            className="room-input"
            maxLength={50}
            autoFocus
          />
          <input
            type="text"
            placeholder="Description (optional)..."
            value={newRoomDescription}
            onChange={(e) => setNewRoomDescription(e.target.value)}
            className="room-input"
            maxLength={100}
          />
          <div className="form-buttons">
            <button type="submit" className="submit-btn" disabled={!newRoomName.trim()}>
              Create
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setIsCreating(false);
                setNewRoomName('');
                setNewRoomDescription('');
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="rooms-list">
        {isLoading && rooms.length === 0 ? (
          <div className="rooms-loading">
            <div className="loading-spinner" />
            <span>Loading rooms...</span>
          </div>
        ) : rooms.length === 0 ? (
          <div className="rooms-empty">
            <FaHashtag className="empty-icon" />
            <p>No rooms yet</p>
            <p className="empty-hint">Create the first room!</p>
          </div>
        ) : (
          rooms.map((room: Room) => (
            <button
              key={room.id}
              onClick={() => setCurrentRoom(room)}
              className={`room-item ${currentRoom?.id === room.id ? 'active' : ''}`}
            >
              <div className="room-item-header">
                <span className="room-name">
                  <FaHashtag className="room-hash" />
                  {room.name}
                </span>
              </div>
              {room.description && (
                <p className="room-description">{room.description}</p>
              )}
              {room.last_message && (
                <div className="room-last-message">
                  <p className="last-message-text">{room.last_message}</p>
                  {room.last_message_at && (
                    <span className="last-message-time">
                      <FaClock className="time-icon" />
                      {formatTime(room.last_message_at)}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomsList;

