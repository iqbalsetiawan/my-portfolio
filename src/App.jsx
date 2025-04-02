import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionTitle } from "./components/Section";
import Card from "./components/Card";
import Button from "./components/Button";
import { useTheme } from "./hooks/useTheme";
import { useScrollSection } from "./hooks/useScrollSection";
import {
  experiences,
  projects,
  socialLinks,
  fileUrls,
  techStack,
} from "./data/portfolioData";
import {
  navigationItems,
  personalInfo,
  sectionTitles,
  animationVariants,
} from "./data/portfolioConfig";
import ProjectModal from "./components/ProjectModal";

const PersonalPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectImagesLoading, setProjectImagesLoading] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const { darkMode, toggleDarkMode, theme } = useTheme();
  const activeSection = useScrollSection(isLoading);

  useEffect(() => {
    if (
      window.location.hash &&
      window.performance.getEntriesByType("navigation")[0].type === "reload"
    ) {
      window.history.replaceState(null, null, " ");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectImageLoad = (projectIndex) => {
    setProjectImagesLoading((prev) => ({
      ...prev,
      [projectIndex]: false,
    }));
  };

  const handleDownload = (fileType) => {
    try {
      window.open(fileUrls[fileType], "_blank", "noreferrer noopener");
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleNavigationClick = (e, section, isMobile = false) => {
    e.preventDefault();

    const scrollToSection = () => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, null, `#${section.toLowerCase()}`);
      }
    };

    if (isMobile) {
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="min-h-screen font-sans antialiased transition-colors duration-500"
    >
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: darkMode ? "#0F172A" : "#F8FAFC" }}
          >
            <motion.div
              variants={animationVariants.loader}
              animate="animate"
              className="w-16 h-16 border-4 border-t-transparent rounded-full"
              style={{ borderColor: theme.primary }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute mt-36 text-lg font-medium"
              style={{ color: theme.text }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Navigation */}
            <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="fixed top-0 left-0 right-0 z-50 bg-opacity-95 backdrop-blur-md shadow-md"
              style={{ backgroundColor: theme.card }}
            >
              <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a
                  href="#home"
                  className="text-2xl font-extrabold flex items-center"
                  style={{ color: theme.primary }}
                >
                  💼 {personalInfo.name}
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden p-2 focus:outline-none"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {menuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>

                {/* Desktop Navigation */}
                <div
                  className="hidden md:flex items-center space-x-8"
                  role="navigation"
                  aria-label="Main navigation"
                >
                  {navigationItems.map((section) => (
                    <a
                      key={section}
                      href={`#${section.toLowerCase()}`}
                      onClick={(e) => handleNavigationClick(e, section)}
                      className="relative font-medium text-sm tracking-wide hover:opacity-100 transition-all duration-300"
                      style={{
                        color:
                          activeSection === section.toLowerCase()
                            ? theme.primary
                            : theme.subtext,
                      }}
                    >
                      {section}
                      {activeSection === section.toLowerCase() && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                          style={{ backgroundColor: theme.primary }}
                        />
                      )}
                    </a>
                  ))}
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-opacity-10 transition-all cursor-pointer"
                    style={{ color: theme.subtext }}
                  >
                    {darkMode ? "☀️" : "🌙"}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    id="mobile-menu"
                    role="navigation"
                    aria-label="Mobile navigation"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden"
                    style={{ backgroundColor: theme.card }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="px-6 py-4 space-y-4"
                    >
                      {navigationItems.map((section) => (
                        <motion.a
                          key={section}
                          href={`#${section.toLowerCase()}`}
                          onClick={(e) => {
                            handleNavigationClick(e, section, true);
                            setMenuOpen(false);
                          }}
                          className="block py-2 px-4 rounded-md font-medium"
                          style={{
                            backgroundColor:
                              activeSection === section.toLowerCase()
                                ? theme.accent
                                : "transparent",
                            color:
                              activeSection === section.toLowerCase()
                                ? darkMode
                                  ? "#FFFFFF"
                                  : theme.primary
                                : theme.text,
                          }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {section}
                        </motion.a>
                      ))}
                      <motion.button
                        onClick={toggleDarkMode}
                        className="w-full py-2 px-4 rounded-md text-left font-medium cursor-pointer"
                        style={{ color: theme.text }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.nav>

            {/* Home Section */}
            <section
              id="home"
              className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("${personalInfo.backgroundImage}")`,
                backgroundAttachment: "fixed",
              }}
            >
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold text-white mb-4"
                  >
                    {personalInfo.name}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-xl md:text-2xl text-gray-200 mb-8"
                  >
                    {personalInfo.title}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Button
                      onClick={() =>
                        document
                          .getElementById("projects")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      style={{ backgroundColor: theme.primary }}
                    >
                      See My Work
                    </Button>
                    <Button
                      onClick={() => handleDownload("cv")}
                      style={{
                        backgroundColor: darkMode ? "#10B981" : "#059669",
                      }}
                    >
                      Download CV
                    </Button>
                    <Button
                      onClick={() => handleDownload("portfolio")}
                      style={{
                        backgroundColor: darkMode ? "#8B5CF6" : "#7C3AED",
                        color: "white",
                      }}
                    >
                      Download Portfolio
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="absolute bottom-10 left-0 right-0"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <a
                      href="#experience"
                      className="text-white opacity-70 hover:opacity-100"
                    >
                      <svg
                        className="h-8 w-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Experience Section */}
            <Section
              id="experience"
              style={{
                backgroundColor: darkMode ? theme.background : theme.card,
              }}
            >
              <SectionTitle
                title={sectionTitles.experience.title}
                subtitle={sectionTitles.experience.subtitle}
                theme={theme}
              />
              <motion.div
                variants={animationVariants.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
              >
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    variants={{
                      ...animationVariants.item,
                      ...animationVariants.hover,
                    }}
                    whileHover="hover"
                    style={{ backgroundColor: theme.card }}
                  >
                    <div className="p-6">
                      <div className="flex gap-4 mb-4">
                        <span className="text-3xl flex-shrink-0">
                          {exp.icon}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p
                            className="text-sm"
                            style={{ color: theme.subtext }}
                          >
                            {exp.company} • {exp.duration}
                          </p>
                        </div>
                      </div>
                      <p className="mb-4" style={{ color: theme.text }}>
                        {exp.description}
                      </p>
                      <ul
                        className="list-disc list-inside space-y-2"
                        style={{ color: theme.subtext }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </Section>

            {/* Tech Stack Section */}
            <Section
              id="tech-stack"
              style={{ backgroundColor: theme.background }}
            >
              <SectionTitle
                title={sectionTitles.techStack.title}
                subtitle={sectionTitles.techStack.subtitle}
                theme={theme}
              />
              <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="p-5 rounded-xl shadow-md"
                    style={{ backgroundColor: theme.card }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {typeof tech.icon === "string" ? (
                          tech.icon
                        ) : (
                          <tech.icon className="w-6 h-6" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{tech.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Projects Section */}
            <Section
              id="projects"
              style={{
                backgroundColor: darkMode ? theme.background : theme.card,
              }}
            >
              <SectionTitle
                title={sectionTitles.projects.title}
                subtitle={sectionTitles.projects.subtitle}
                theme={theme}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    variants={{
                      ...animationVariants.item,
                      ...animationVariants.hover,
                    }}
                    whileInView="visible"
                    whileHover="hover"
                    initial="hidden"
                    viewport={{ once: true }}
                    style={{ backgroundColor: theme.card }}
                    className="flex flex-col h-full"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      {projectImagesLoading[index] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                          <div
                            className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
                            style={{ borderColor: theme.primary }}
                          />
                        </div>
                      )}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                          projectImagesLoading[index] !== false ? "opacity-0" : "opacity-100"
                        }`}
                        loading="lazy"
                        onLoad={() => handleProjectImageLoad(index)}
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p
                        className="mb-4 text-xs sm:text-sm"
                        style={{ color: theme.subtext }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: theme.accent,
                              color: darkMode ? "#0F172A" : theme.primary,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <button
                          onClick={() => {
                            setSelectedProject({...project, id: index});
                            setIsProjectDialogOpen(true);
                          }}
                          className="text-xs sm:text-sm font-medium hover:underline"
                          style={{ color: theme.primary }}
                        >
                          View Project →
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" style={{ backgroundColor: theme.background }}>
              <SectionTitle
                title={sectionTitles.contact.title}
                subtitle={sectionTitles.contact.subtitle}
                theme={theme}
              />
              <div className="text-center">
                <p className="text-lg mb-6" style={{ color: theme.subtext }}>
                  Connect with me here:
                </p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <svg fill="white" className="h-5 w-5" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Section>

            {/* Footer */}
            <footer
              className="py-8 text-center"
              style={{
                backgroundColor: darkMode ? "#1E293B" : "#F1F5F9",
                color: theme.subtext,
              }}
            >
              <p className="text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
                <span style={{ color: theme.primary }}>passion</span> and{" "}
                <span style={{ color: theme.primary }}>code</span>.
              </p>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="inline-block mt-4 text-sm font-medium"
                style={{ color: theme.primary }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Back to Top ↑
              </motion.a>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal
        isOpen={isProjectDialogOpen}
        onClose={() => setIsProjectDialogOpen(false)}
        project={selectedProject}
        handleProjectImageLoad={handleProjectImageLoad}
      />
    </div>
  );
};

export default PersonalPortfolio;
