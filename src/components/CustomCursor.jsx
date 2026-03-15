import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const interactiveElements = document.querySelectorAll('button, a, .cursor-pointer, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <>
      <style>
        {`
          * {
            cursor: none !important;
          }
          @media (max-width: 768px) {
            .custom-cursor {
              display: none !important;
            }
            * {
              cursor: auto !important;
            }
          }
        `}
      </style>
      
      {/* Outer Glow Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/30 z-[9999] pointer-events-none mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : (isClicking ? 0.8 : 1),
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.05)',
          borderColor: isHovering ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)',
          boxShadow: isHovering 
            ? '0 0 30px rgba(6, 182, 212, 0.4)' 
            : '0 0 15px rgba(6, 182, 212, 0.1)',
        }}
      />
      
      {/* Inner Dot with Trailing Pulse */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[10000] pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.5 : (isHovering ? 0 : 1),
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
        }}
      />
    </>
  );
};

export default CustomCursor;
