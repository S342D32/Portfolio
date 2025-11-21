import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Track if page has scrolled for background change
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detect active section
      const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 h-[70px] flex justify-between items-center px-4 sm:px-8 transition-all duration-300 z-50 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-violet-100' 
        : 'bg-transparent'
    }`}>
      {/* Logo/Brand */}
      <motion.a 
        href="#home" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
        }} 
        className={`text-2xl font-bold transition-all duration-300 ${
          scrolled ? 'text-violet-800' : 'text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Sourajit
        </span>
        {scrolled && <span className="text-violet-600">.</span>}
      </motion.a>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
        <NavLink href="#home" isActive={activeSection === 'home'} onClick={handleNavClick} scrolled={scrolled}>
          Home
        </NavLink>
        <NavLink href="#about" isActive={activeSection === 'about'} onClick={handleNavClick} scrolled={scrolled}>
          About
        </NavLink>
        <NavLink href="#projects" isActive={activeSection === 'projects'} onClick={handleNavClick} scrolled={scrolled}>
          Projects
        </NavLink>
        <NavLink href="#certifications" isActive={activeSection === 'certifications'} onClick={handleNavClick} scrolled={scrolled}>
          Certifications
        </NavLink>
        <NavLink href="#contact" isActive={activeSection === 'contact'} onClick={handleNavClick} scrolled={scrolled}>
          Contact
        </NavLink>
      </div>

      {/* CTA Button & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Resume Download - Desktop */}
        <motion.a
          href="/Sourajit_Nayak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-sm font-medium transition-all hover:from-violet-700 hover:to-indigo-700"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-all ${
            scrolled ? 'hover:bg-violet-100' : 'hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${scrolled ? 'text-violet-800' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[70px] left-4 right-4 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-violet-100 md:hidden overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <MobileNavLink href="#home" isActive={activeSection === 'home'} onClick={handleNavClick}>
                🏠 Home
              </MobileNavLink>
              <MobileNavLink href="#about" isActive={activeSection === 'about'} onClick={handleNavClick}>
                👨‍💻 About
              </MobileNavLink>
              <MobileNavLink href="#projects" isActive={activeSection === 'projects'} onClick={handleNavClick}>
                🚀 Projects
              </MobileNavLink>
              <MobileNavLink href="#certifications" isActive={activeSection === 'certifications'} onClick={handleNavClick}>
                🏆 Certifications
              </MobileNavLink>
              <MobileNavLink href="#contact" isActive={activeSection === 'contact'} onClick={handleNavClick}>
                📧 Contact
              </MobileNavLink>
              
              {/* Mobile Resume Download */}
              <motion.a
                href="/Sourajit_Nayak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children, isActive, onClick, scrolled }) => {
  return (
    <motion.a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
        isActive 
          ? scrolled 
            ? 'text-white bg-violet-600 shadow-lg' 
            : 'text-violet-200 bg-white/20 backdrop-blur-sm'
          : scrolled 
            ? 'text-gray-700 hover:text-violet-600 hover:bg-violet-50' 
            : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const MobileNavLink = ({ href, children, isActive, onClick }) => {
  return (
    <motion.a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
        isActive 
          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg' 
          : 'text-gray-700 hover:bg-violet-50 hover:text-violet-700'
      }`}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

export default Navbar;
