import React from 'react';

const Loader = ({ size = 50 }) => {
  return (
    <div
      className="animate-spin rounded-full border-t-4 border-[#E5CBBE] border-opacity-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRightColor: 'transparent',
      }}
    ></div>
  );
};

export default Loader;
