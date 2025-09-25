"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", priority: "high" },
    { name: "Projects", href: "#projects", priority: "high" },
    { name: "About", href: "#about", priority: "high" },
    { name: "Journey", href: "#journey", priority: "low" },
    { name: "Blog", href: "#blog", priority: "high" },
    { name: "Contact", href: "#contact", priority: "low" }
  ];

  // Mobile: tampilkan hanya menu prioritas tinggi
  const mobileNavItems = navItems.filter(item => item.priority === "high");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection

      // Default to first section if at top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Check if we're within the section bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Call initially to set correct active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        {/* Desktop: tampilkan semua menu */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`nav-item ${
                activeSection === item.href.substring(1)
                  ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile: tampilkan hanya menu utama */}
        <div className="flex gap-1 md:hidden">
          {mobileNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`nav-item text-xs ${
                activeSection === item.href.substring(1)
                  ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
