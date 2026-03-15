import React, { useEffect, useState, useMemo } from 'react';

const StarsBackground = () => {
  const starCount = 200;
  
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 10,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, [starCount]);

  return (
    <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
      {/* Nebula Layers (Milk Galaxy Effect) */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)] blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] blur-[100px] animate-pulse delay-700"></div>
        
        {/* The "Milk" path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_80%)] rotate-[-35deg] blur-3xl"></div>
      </div>

      {/* Stars */}
      <div id="stars-container" className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              '--twinkle-duration': `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Deep Space Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
    </div>
  );
};

export default StarsBackground;
