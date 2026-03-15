import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-4xl text-white shadow-[0_0_50px_rgba(6,182,212,0.3)] relative z-10">
            AP
          </div>
          {/* Animated Glow Behind Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/30 blur-3xl -z-10 rounded-full"
          />
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center w-full space-y-4">
          <div className="flex justify-between w-full text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
            <span>Initialising</span>
            <span>{progress}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full h-px bg-white/5 relative overflow-hidden">
            {/* Background Track */}
            <div className="absolute inset-0 bg-white/5"></div>
            
            {/* Moving Progress Line */}
            <motion.div 
              style={{ width: `${progress}%` }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              transition={{ ease: "linear" }}
            />
            
            {/* Extra Glow on Line */}
            <motion.div 
              style={{ width: `${progress}%` }}
              className="absolute inset-y-0 left-0 bg-primary/20 blur-sm"
              transition={{ ease: "linear" }}
            />
          </div>
        </div>

        {/* Subtle Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]"
        >
          Portfolio Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
