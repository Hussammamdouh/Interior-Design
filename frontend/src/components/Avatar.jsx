import React from 'react';

const Avatar = ({ src, alt, name, size = 50 }) => {
  const getInitials = () => {
    if (!name) return '';
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('');
    return initials.toUpperCase();
  };

  return (
    <div
      className="rounded-full flex items-center justify-center text-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: src ? 'transparent' : '#E5CBBE',
        overflow: 'hidden',
        fontSize: `${size / 2.5}px`,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        <span>{getInitials()}</span>
      )}
    </div>
  );
};

export default Avatar;
