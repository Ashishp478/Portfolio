import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ExternalLink, Award } from 'lucide-react';
import ImageModal from './ImageModal';

const Training = () => {
  const trainings = [
    {
      title: "C++ Programming: OOPs and DSA",
      provider: "CSE Pathshala",
      period: "Jun '25 - Jul '25",
      hours: "35+ Hours",
      description: "Completed a comprehensive C++ program encompassing object-oriented architectures, algorithmic frameworks, and foundational data-structure operations.",
      skills: ['C++', 'DSA', 'OOP'],
      color: "from-indigo-500 to-purple-500",
      image: "/ctr.png"
    }
  ];

  const [modalData, setModalData] = React.useState({ isOpen: false, src: '', alt: '' });

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.04),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional <span className="text-primary">Training</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center max-w-2xl mx-auto">
          {trainings.map((training, idx) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card overflow-hidden hover:border-primary/20 transition-all group max-w-xl mx-auto"
            >
              <div
                className="relative h-48 overflow-hidden cursor-zoom-in"
                onClick={() => setModalData({ isOpen: true, src: training.image, alt: training.title })}
              >
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 transition-transform">
                    <BookOpen size={24} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${training.color} text-white shadow-lg`}>
                    {training.hours}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{training.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-secondary">{training.provider}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 font-mono">{training.period}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">{training.description}</p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map(skill => (
                      <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">{skill}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setModalData({ isOpen: true, src: training.image, alt: training.title })}
                    className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-bold group/btn"
                  >
                    View Certificate
                    <Award size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
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

export default Training;
