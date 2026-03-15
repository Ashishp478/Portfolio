
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 border-white/5 space-y-8">

              {/* EMAIL */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    Email Me
                  </p>
                  <p className="text-lg font-medium text-white break-all">
                    prasadashish478@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    Call Me
                  </p>
                  <p className="text-lg font-medium text-white">
                    +91 9198085924
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    Location
                  </p>
                  <p className="text-lg font-medium text-white">
                    Phagwara, Punjab, India
                  </p>
                </div>
              </div>

              {/* FEEDBACK */}
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <MessageSquare size={18} />
                  <span className="text-sm uppercase tracking-widest">
                    Feedback
                  </span>
                </div>

                <p className="text-gray-500 text-sm italic">
                  "I value clear communication and aim to respond within 24 hours."
                </p>
              </div>

            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:hover:-translate-y-2 transition-transform duration-500"
          >

            <div className="glass-card p-10 border-white/10 shadow-2xl relative bg-black/40">

              {/* FORM */}
              <form
                action="https://formspree.io/f/mwvrnadv"
                method="POST"
                className="space-y-6"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* FIRST NAME */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none"
                    />
                  </div>

                  {/* LAST NAME */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none"
                    />
                  </div>

                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane.doe@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none"
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Briefly describe your project or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white resize-none focus:border-primary outline-none"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 group shadow-[0_10px_40px_rgba(6,182,212,0.3)]"
                >
                  Send Message
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;

