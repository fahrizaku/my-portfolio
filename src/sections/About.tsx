"use client";

import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const AboutSection = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Node.js", "Python", "Tailwind CSS", "Framer Motion",
    "Git", "MongoDB", "PostgreSQL", "Docker"
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
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
              I'm a passionate software developer with expertise in creating modern,
              user-friendly applications. I love turning complex problems into simple,
              beautiful designs and bringing ideas to life through code.
            </p>
            <p className="text-white/60 max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee
              while reading about the latest in tech.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white/90">
              Technologies & Tools
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  className="bg-gray-800 px-4 py-3 rounded-lg text-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium text-white/80">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-emerald-300 text-emerald-300 px-6 py-3 rounded-lg font-medium hover:bg-emerald-300 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
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
