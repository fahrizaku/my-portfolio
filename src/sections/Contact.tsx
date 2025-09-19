"use client";

import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
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

  return (
    <section className="py-16 relative overflow-hidden" id="contact">
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
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-6 mb-8">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
              Ready to bring your ideas to life? I'm here to help you create amazing digital experiences.
              Let's discuss your project and make something great together.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <motion.a
              href="mailto:fahriza@example.com"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-emerald-300/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-300/20 transition-colors">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
              <p className="text-white/60">fahriza@example.com</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="#"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-emerald-300/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-300/20 transition-colors">
                <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Connect on LinkedIn</h3>
              <p className="text-white/60">Let's connect professionally</p>
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="mailto:fahriza@example.com"
              className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
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