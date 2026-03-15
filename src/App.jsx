import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-primary/30 relative">
      <CustomCursor />
      <StarsBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Training />
              <Certifications />
              <Achievements />
              <Education />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="relative pt-20 pb-10 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
                  {/* Brand */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm shadow-lg">
                        AP
                      </div>
                      <span className="text-xl font-bold tracking-tight">ASHISH.</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                      Full Stack Developer passionate about building scalable, user-centric web applications with modern technologies.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      {footerLinks.map(link => (
                        <li key={link.name}>
                          <a href={link.href} className="text-gray-500 hover:text-primary transition-colors text-sm">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Connect</h4>
                    <div className="flex gap-3 mb-6">
                      <a href="https://github.com/Ashishp478" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 hover:border-primary/30 transition-all">
                        <Github size={18} />
                      </a>
                      <a href="https://linkedin.com/in/ashish-prasad34" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 hover:border-primary/30 transition-all">
                        <Linkedin size={18} />
                      </a>
                      <a href="mailto:prasadashish478@gmail.com" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 hover:border-primary/30 transition-all">
                        <Mail size={18} />
                      </a>
                    </div>

                  </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.15em]">
                    &copy; {new Date().getFullYear()} Ashish Prasad. Crafted with passion.
                  </p>
                  <a href="#home" className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                    Back to Top
                    <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
