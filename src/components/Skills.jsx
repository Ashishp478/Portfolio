import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Languages');

  const filters = ['Languages', 'Frameworks', 'Tools/Platforms', 'Soft Skills'];

  const skills = [
    { name: 'Java', level: 'Advanced', category: 'Languages', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', level: 'Advanced', category: 'Languages', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C', level: 'Intermediate', category: 'Languages', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Python', level: 'Intermediate', category: 'Languages', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', level: 'Advanced', category: 'Languages', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },

    { name: 'React.js', level: 'Advanced', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', level: 'Intermediate', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', level: 'Intermediate', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Angular', level: 'Intermediate', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Django', level: 'Intermediate', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', level: 'Advanced', category: 'Frameworks', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },

    { name: 'Git', level: 'Advanced', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', level: 'Advanced', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', level: 'Intermediate', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Postman', level: 'Intermediate', category: 'Tools/Platforms', img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Docker', level: 'Intermediate', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', level: 'Intermediate', category: 'Tools/Platforms', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },

    { name: 'DSA', level: 'Advanced', category: 'Soft Skills', icon: '🧠' },
    { name: 'OOP', level: 'Advanced', category: 'Soft Skills', icon: '📐' },
    { name: 'Problem Solving', level: 'Advanced', category: 'Soft Skills', icon: '💡' },
    { name: 'Team Player', level: 'Advanced', category: 'Soft Skills', icon: '🤝' },
    { name: 'Communication', level: 'Advanced', category: 'Soft Skills', icon: '🗣️' },
  ];

  const filteredSkills = skills.filter(s => s.category === activeFilter);

  const getLevelColor = (level) => {
    return level === 'Advanced'
      ? 'bg-primary/20 text-primary border-primary/30'
      : 'bg-secondary/20 text-secondary border-secondary/30';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.04),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Skills <span className="text-primary"></span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Building high-performance web applications with modern technologies.</p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300 ${activeFilter === filter
                  ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary/30 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-card p-5 flex flex-col items-center text-center group hover:border-primary/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                  {skill.img ? (
                    <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" style={{ filter: skill.name === 'GitHub' || skill.name === 'Express.js' || skill.name === 'Django' ? 'invert(1)' : 'none' }} />
                  ) : (
                    <span className="text-4xl">{skill.icon}</span>
                  )}
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
