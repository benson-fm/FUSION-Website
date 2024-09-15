import React from 'react';

const Scroll = ({ targetId, children }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleScroll} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default Scroll;
