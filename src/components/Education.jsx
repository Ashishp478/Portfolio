
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "2023 - 2027",
      location: "Phagwara, Punjab",
      grade: "6.55 CGPA",
      description: "Specializing in Full Stack Development.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      degree: "Intermediate (PCMB)",
      institution: "J P K I College Of Competence",
      period: "2021 - 2023",
      location: "Giridih, Jharkhand",
      grade: "82%",
      description: "Focused on Physics, Chemistry, Maths, and Biology.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      degree: "Matriculation",
      institution: "St. Xavier’s Public School",
      period: "2020 - 2021",
      location: "Giridih, Jharkhand",
      description: "Completed secondary education with distinction.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Academic <span className="text-primary">Journey</span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">

          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none"
            >

              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-black text-primary shadow-[0_0_15px_rgba(6,182,212,0.2)] absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
                <GraduationCap size={20} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 shadow-xl ml-auto md:ml-0">

                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                    {edu.period}
                  </span>

                  <div className="flex items-center text-gray-400 text-sm gap-1">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <span className="font-semibold text-gray-300">
                    {edu.institution}
                  </span>
                </div>

                <p className="text-gray-500 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Score show only if grade exists */}
                {edu.grade && (
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-primary font-mono font-bold">
                      <span className="text-xs text-gray-500 uppercase tracking-widest">
                        Score:
                      </span>
                      {edu.grade}
                    </div>

                    <div className="text-gray-600 group-hover:text-primary/50 transition-colors">
                      <Calendar size={18} />
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
