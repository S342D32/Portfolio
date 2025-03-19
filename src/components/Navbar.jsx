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
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <a 
        href="#home" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
        }} 
        className={`text-2xl font-bold transition-colors ${
          scrolled ? 'text-violet-800' : 'text-white'
        }`}
      >
        Portfolio
      </a>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <NavLink href="#home" isActive={activeSection === 'home'} onClick={handleNavClick} scrolled={scrolled}>Home</NavLink>
        <NavLink href="#about" isActive={activeSection === 'about'} onClick={handleNavClick} scrolled={scrolled}>About</NavLink>
        <NavLink href="#projects" isActive={activeSection === 'projects'} onClick={handleNavClick} scrolled={scrolled}>Projects</NavLink>
        <NavLink href="#certifications" isActive={activeSection === 'certifications'} onClick={handleNavClick} scrolled={scrolled}>Certifications</NavLink>
        <NavLink href="#contact" isActive={activeSection === 'contact'} onClick={handleNavClick} scrolled={scrolled}>Contact</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className={`md:hidden p-2 rounded-lg ${
          scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
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
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <MobileNavLink href="#home" isActive={activeSection === 'home'} onClick={handleNavClick}>Home</MobileNavLink>
              <MobileNavLink href="#about" isActive={activeSection === 'about'} onClick={handleNavClick}>About</MobileNavLink>
              <MobileNavLink href="#projects" isActive={activeSection === 'projects'} onClick={handleNavClick}>Projects</MobileNavLink>
              <MobileNavLink href="#certifications" isActive={activeSection === 'certifications'} onClick={handleNavClick}>Certifications</MobileNavLink>
              <MobileNavLink href="#contact" isActive={activeSection === 'contact'} onClick={handleNavClick}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children, isActive, onClick, scrolled }) => {
  return (
    <a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className="relative font-medium group"
    >
      <motion.span
        className={`inline-block ${
          isActive 
            ? scrolled ? 'text-violet-600' : 'text-violet-300' 
            : scrolled ? 'text-gray-800' : 'text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
      <span 
        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
          isActive 
            ? 'w-full bg-violet-600' 
            : 'w-0 group-hover:w-full bg-violet-500'
        }`} 
      />
    </a>
  );
};

const MobileNavLink = ({ href, children, isActive, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className={`block px-4 py-2 rounded-lg text-gray-800 font-medium ${
        isActive ? 'bg-violet-50 text-violet-700' : 'hover:bg-gray-50'
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar; 