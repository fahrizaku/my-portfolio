"use client";

import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

export const JourneySection = () => {
  const timeline = [
    {
      year: "2022-Present",
      type: "work",
      title: "Frontend Developer",
      organization: "TechCorp",
      description: "Developing modern web applications using React and TypeScript"
    },
    {
      year: "2021-2022",
      type: "work",
      title: "Intern Developer",
      organization: "StartupXYZ",
      description: "Built responsive websites and gained hands-on experience"
    },
    {
      year: "2018-2022",
      type: "education",
      title: "Computer Science",
      organization: "Universitas Indonesia",
      description: "Bachelor's degree with focus on software engineering"
    },
    {
      year: "2020-2021",
      type: "work",
      title: "Web Developer",
      organization: "Freelance",
      description: "Created custom websites for local businesses"
    },
    {
      year: "2015-2018",
      type: "education",
      title: "Science",
      organization: "SMA Negeri 1 Jakarta",
      description: "High school with focus on mathematics and physics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getIcon = (type: string) => {
    if (type === "education") {
      return (
        <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
      </svg>
    );
  };

  const getAccentColor = (type: string) => {
    return type === "education" ? "bg-sky-400" : "bg-emerald-300";
  };

  return (
    <section className="py-16 relative overflow-hidden" id="journey">
      {/* Background grain */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
      </div>

      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              My Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mt-6">
              Education & Career Path
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-sky-400 to-emerald-300"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white z-10"></div>

                  {/* Content card */}
                  <motion.div
                    className={`bg-gray-800 p-6 rounded-xl ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Icon and year */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 ${getAccentColor(item.type)} rounded-full flex items-center justify-center`}>
                        {getIcon(item.type)}
                      </div>
                      <span className="text-sm font-medium text-white/60">{item.year}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white/90 mb-1">{item.title}</h3>
                    <p className={`text-sm mb-2 ${item.type === 'education' ? 'text-sky-400' : 'text-emerald-300'}`}>
                      {item.organization}
                    </p>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};