import { useCallback } from 'react';

const Scroll = ({ children, targetId, duration = 800 }) => {
  // Smooth scroll function using requestAnimationFrame
  const handleScroll = useCallback(() => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Ease function for smooth scrolling
      const scrollAmount = startPosition + distance * easeInOutQuad(progress);

      window.scrollTo(0, scrollAmount);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }, [targetId, duration]);

  return (
    <div onClick={handleScroll} className="cursor-pointer">
      {children}
    </div>
  );
};

export default Scroll;
