import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import ImageModal from './ImageModal';

const Certifications = () => {
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });

  const certs = [
    { title: "AWS Cloud Practitioner", issuer: "GeeksforGeeks", date: "Mar 26", img: "/aws.png" },
    { title: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "Oct '25", img: "/nptel.png" },
    { title: "OCI 2025 Certified Foundations Associate", issuer: "Oracle", date: "Sep '25", img: "/oracle.png" },
    { title: "OCI 2025 Certified DevOps Professional", issuer: "Oracle", date: "Sep '25", img: "/oracle2.png" }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(99,102,241,0.04),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">My <span className="text-primary">Certifications</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/20 transition-all cursor-pointer"
              onClick={() => setModalData({ isOpen: true, src: cert.img, alt: cert.title })}
            >
              <div className="aspect-video overflow-hidden">
                <img src={cert.img} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">{cert.title}</h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">{cert.issuer}</p>
                    <span className="text-gray-600 text-[10px]">{cert.date}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalData({ isOpen: true, src: cert.img, alt: cert.title });
                    }}
                    className="flex items-center gap-1.5 text-primary hover:text-white transition-colors text-[11px] font-bold group/btn"
                  >
                    View
                    <BadgeCheck size={14} className="group-hover/btn:rotate-12 transition-transform" />
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

export default Certifications;
