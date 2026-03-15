import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, FileText, Github, Linkedin, Code, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full Stack Developer", "Web Development Intern", "Tech Enthusiast"];

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start max-w-2xl order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Available for work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
              Hi, I'm <span className="text-white relative inline-block name-glow">
                Ashish Prasad
                <span className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-full"></span>
              </span>
            </h1>

            <div className="text-3xl md:text-5xl font-semibold mb-8 flex items-center gap-3 h-16">
              <span className="text-gray-400">I'm a </span>
              <span className="text-primary">{text}</span>
              <span className="w-1 h-8 md:h-12 bg-primary animate-pulse ml-1"></span>
            </div>

            <p className="max-w-xl text-gray-500 text-lg md:text-xl mb-12 selection:bg-primary/30">
              Building scalable <span className="text-white">Full Stack applications</span> with clean, modern UI and performance-first architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all"
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="/Ashish CV Placement.pdf"
                download
                whileHover={{ scale: 1.05, border: '1px solid #06b6d4' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all"
              >
                Download Resume
                <FileText size={18} />
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Ashishp478" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ashish-prasad34" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:prasadashish478@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - 3D Photo */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-secondary/10 blur-[80px] rounded-full animate-pulse delay-700"></div>

            {/* Floating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] border border-white/5 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] border border-primary/10 rounded-full"
            ></motion.div>

            {/* Image Container */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"
            >
              <img
                src="/prof.png"
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              style={{ transform: "translateZ(80px)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-primary text-black px-4 py-2 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-2"
            >
              <Code size={14} />
              Full Stack
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
