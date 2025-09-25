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

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/6281234567890"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-emerald-300/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-300/20 transition-colors">
                <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-white/60">Let's chat directly</p>
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