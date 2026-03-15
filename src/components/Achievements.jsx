import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BadgeCheck } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "HackerRank Problem Solving",
      badge: "6 Stars",
      desc: "Recognized for advanced coding and algorithmic expertise on HackerRank platform.",
      icon: <Trophy size={28} />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      glowColor: "shadow-[0_0_20px_rgba(234,179,8,0.15)]"
    },
    {
      title: "LeetCode Algorithm Solving",
      badge: "18 Badges",
      desc: "Consistently solved complex algorithmic problems and earned recognition badges.",
      icon: <BadgeCheck size={28} />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(234,179,8,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Key <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/20 transition-all"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} mx-auto mb-6 group-hover:scale-110 transition-transform ${item.glowColor}`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <span
                className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-4 block`}
              >
                {item.badge}
              </span>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;