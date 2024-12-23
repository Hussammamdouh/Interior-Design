import React, { useEffect } from 'react';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-[#E5CBBE] text-[#181818]';
      case 'error':
        return 'bg-[#E74C3C] text-white';
      case 'info':
      default:
        return 'bg-[#3498DB] text-white';
    }
  };

  return (
    <div
      className={`px-4 py-2 rounded shadow-md ${getStyles()} flex items-center space-x-2`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-white hover:text-opacity-75 transition"
      >
        ✖
      </button>
    </div>
  );
};

export default Notification;
