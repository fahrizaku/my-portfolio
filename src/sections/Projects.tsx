"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    id: 1,
    title: "Dark Saas Landing Page",
    category: "web",
    image: darkSaasLandingPage,
    link: "https://youtu.be/4k7IdSLxh6w",
  },
  {
    id: 2,
    title: "Light Saas Landing Page",
    category: "mobile",
    image: lightSaasLandingPage,
    link: "https://youtu.be/7hi5zwO75yc",
  },
  {
    id: 3,
    title: "AI Startup Landing Page",
    category: "design",
    image: aiStartupLandingPage,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterItems = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects = activeFilter === "all"
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-16" id="projects">
      <div className="container">
        <div className="text-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            My Portfolio
          </p>
          <h2 className="font-serif text-3xl mt-6">Recent Projects</h2>
        </div>

        <div className="flex justify-center mt-8 mb-12">
          <div className="flex flex-wrap gap-4">
            {filterItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleFilterClick(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === item.id
                    ? "bg-emerald-300 text-gray-900"
                    : "bg-gray-800 text-white/60 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="bg-gray-800 rounded-xl overflow-hidden p-4"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Demo</span>
                    <ArrowUpRightIcon className="size-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
