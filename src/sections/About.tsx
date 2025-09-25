"use client";

import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const AboutSection = () => {
  const interests = [
    {
      icon: "🎮",
      title: "Gaming",
      description: "Mobile Legends, Roblox, Valorant",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400"
    },
    {
      icon: "🎌",
      title: "Anime",
      description: "Dr. Stone, Gintama",
      bgColor: "bg-pink-500/10",
      textColor: "text-pink-400"
    },
    {
      icon: "🏂",
      title: "Sports",
      description: "Badminton, Tennis, Volley, Jogging",
      bgColor: "bg-green-500/10",
      textColor: "text-green-400"
    },
    {
      icon: "📖",
      title: "Books",
      description: "Sapiens, Homo Deus",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden" id="about">
      {/* Background grain */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
      </div>

      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-6 mb-8">
              Get to Know Me Better
            </h2>
          </motion.div>

          {/* Introduction Text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a software developer who loves creating amazing digital experiences
              and exploring life beyond code.
            </p>
          </motion.div>

          {/* Personal Interests */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold mb-8 text-white/90">
              What I Love
            </h3>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  className={`group relative ${interest.bgColor} border border-white/10 rounded-full px-4 py-3 hover:border-white/30 transition-all cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.4 }
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{interest.icon}</span>
                    <span className={`text-sm font-medium ${interest.textColor}`}>
                      {interest.title}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/20">
                    {interest.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let&apos;sConnect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
