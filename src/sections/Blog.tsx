"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const articles = [
    {
      id: 1,
      title: "Building Modern Web Apps with Next.js 14",
      excerpt: "Explore the latest features and best practices for building scalable web applications with Next.js 14.",
      image: "/api/placeholder/400/250",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "web"
    },
    {
      id: 2,
      title: "The Future of Frontend Development",
      excerpt: "Discover emerging trends and technologies that are shaping the future of frontend development.",
      image: "/api/placeholder/400/250",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "tech"
    },
    {
      id: 3,
      title: "TypeScript Tips for Better Code",
      excerpt: "Learn advanced TypeScript techniques to write more maintainable and type-safe code.",
      image: "/api/placeholder/400/250",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "web"
    },
    {
      id: 4,
      title: "Responsive Design Best Practices",
      excerpt: "Master the art of creating beautiful, responsive designs that work across all devices.",
      image: "/api/placeholder/400/250",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      category: "design"
    },
    {
      id: 5,
      title: "Performance Optimization in React",
      excerpt: "Boost your React application performance with these proven optimization techniques.",
      image: "/api/placeholder/400/250",
      date: "Nov 20, 2024",
      readTime: "8 min read",
      category: "tech"
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Understanding the differences and use cases for CSS Grid and Flexbox layout systems.",
      image: "/api/placeholder/400/250",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "web"
    }
  ];

  const filterItems = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "tech", label: "Tech" },
    { id: "design", label: "Design" },
  ];

  const filteredArticles = activeFilter === "all"
    ? articles
    : articles.filter(article => article.category === activeFilter);

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
  };

  // Animation variants (copied from Projects.tsx)
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
    <section className="py-16 relative overflow-hidden" id="blog">
      {/* Background grain */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
      </div>

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              Latest Insights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-6">
              Blog & Articles
            </h2>
            <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, design, and technology trends
            </p>
          </motion.div>

          {/* Category Filter (copied from Projects.tsx) */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
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
          </motion.div>

          {/* Articles Grid (copied animation pattern from Projects.tsx) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            <AnimatePresence mode="wait">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="bg-gray-800 rounded-xl overflow-hidden p-4 group"
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Article Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div>
                    {/* Category and date */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-emerald-300 bg-emerald-300/10 px-2 py-1 rounded capitalize">
                        {article.category}
                      </span>
                      <span className="text-xs text-white/60">{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-emerald-300 transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-white/70 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Read more and read time */}
                    <div className="flex items-center justify-between">
                      <motion.a
                        href={`/blog/${article.id}`}
                        className="text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Read More →
                      </motion.a>
                      <span className="text-xs text-white/50">{article.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Articles Button */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="/blog"
              className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Articles</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};