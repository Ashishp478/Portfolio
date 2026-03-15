import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About <span className="text-primary">Me</span></h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Ashish Prasad</span>, a passionate <span className="text-primary">Full Stack Developer</span> and Computer Science Engineering student at <span className="text-white">Lovely Professional University, Punjab</span>. I enjoy building scalable and responsive web applications using technologies like <span className="text-primary italic">React, Node.js, Express.js, and MongoDB</span>.
              </p>
              <p>
                I have hands-on experience developing full-stack projects such as a <span className="text-white">Real-Time Communication Platform</span> and an <span className="text-white">NGO Charity & Donation Web Platform</span>. I also completed a <span className="text-primary">Web Development Internship at SkillCraft Technology</span>, where I worked on responsive web solutions using modern web technologies.
              </p>
              <p>
                Along with development, I actively practice <span className="text-white font-medium">Data Structures and Algorithms</span> on platforms like <span className="text-primary">LeetCode and HackerRank</span> to improve my problem-solving skills. I am always eager to learn new technologies and contribute to innovative software solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              {[
                { label: 'Projects', val: '4+', color: 'text-cyan-400' },
                { label: 'CGPA', val: '6.55', color: 'text-indigo-400' },
                { label: 'Badges', val: '18+', color: 'text-rose-400' }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center border-white/5 hover:border-primary/20 transition-all group">
                  <div className={`text-3xl font-black mb-1 group-hover:scale-110 transition-transform ${stat.color}`}>{stat.val}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element / Placeholder for an Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative h-full w-full glass-card border-white/10 flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <span className="text-5xl animate-bounce-slow">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Tech Stack Internals</h3>
                  <p className="text-gray-500 text-sm">Passionate about optimizing performance and ensuring atomic state consistency in modern web apps.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
