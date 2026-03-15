import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import ImageModal from './ImageModal';

const Projects = () => {
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });

  const projects = [
    {
      title: "Realtime Communication Platform",
      description: "Architected a real-time communication system enabling event-driven data propagation, synchronized message streams, and persistent client-state coherence.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "Tailwind CSS"],
      github: "https://github.com/Ashishp478/real-time-communication-app",
      image: "/image copy.png",
    },
    {
      title: "NGO Charity & Donation Platform",
      description: "Constructed a fully responsive NGO donation platform with multi-tier content orchestration and dynamic interface modulations.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "Tailwind CSS"],
      live: "https://www.choeducationandtrust.org/",
      image: "/image.png",
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(6,182,212,0.04),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card overflow-hidden group border border-gray-800 hover:border-primary/50 transition-all duration-500"
            >
              <div
                className="relative h-64 overflow-hidden cursor-zoom-in"
                onClick={() => setModalData({ isOpen: true, src: project.image, alt: project.title })}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest bg-primary px-2 py-1 rounded text-black shadow-[0_0_15px_#06b6d4]">
                    <Layers size={10} />
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded hover:text-white transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        imageSrc={modalData.src}
        imageAlt={modalData.alt}
      />
    </section>
  );
};

export default Projects;
