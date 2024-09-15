// lib/Bounce.jsx
import React from 'react';
import './Bounce.css'; // Assuming you have a CSS file for the bounce animation

const BounceAnimation = ({ children, width = "fit-content" }) => {
  return <div className="bounce-animation">{children}</div>;
};

export default BounceAnimation;
