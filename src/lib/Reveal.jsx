"use client";

import React, { useEffect, useState } from "react";
import { useIsVisible } from "./useIsVisible"; // Adjust the import path as needed

export const Reveal = ({ children, width = "", duration = 500 }) => {
  const { ref, isIntersecting } = useIsVisible({ triggerOnce: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ 
        transitionDuration: `${duration}ms`, // Set the duration dynamically
        position: "relative",
        width,
        overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
};
