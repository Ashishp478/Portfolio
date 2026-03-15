import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.04),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"> <span className="text-primary">Experience</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 hover:border-primary/20 transition-all group">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform">
                <Briefcase size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Web Development Intern</h3>
                    <p className="text-primary font-mono text-sm font-bold">SkillCraft</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg h-fit">
                    Jul '25
                  </span>
                </div>
                <ul className="list-none text-gray-400 space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Executed comprehensive Web Development internship involving creation of adaptive digital ecosystems.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Incorporated structured design principles and responsive layouts.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Collaborated on high-quality standards projects with disciplined task execution.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React'].map(tech => (
                    <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
