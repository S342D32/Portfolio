import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated decorative elements
const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Main sphere with gradient */}
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 opacity-90 z-10"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Enhanced glow effect */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-violet-500/30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* AI/ML themed particles */}
      <motion.div 
        className="absolute top-16 left-20 w-3 h-3 bg-blue-400 rounded-full shadow-lg"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute bottom-24 right-16 w-4 h-4 bg-green-400 rounded-full shadow-lg"
        animate={{ 
          y: [0, 25, 0],
          x: [0, -15, 0],
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Tech symbols */}
      <motion.div 
        className="absolute top-1/4 left-1/3 text-white text-opacity-40 font-mono text-xl font-bold"
        animate={{ 
          opacity: [0, 0.8, 0],
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      >
        AI
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 text-white text-opacity-30 font-mono text-lg"
        animate={{ 
          opacity: [0, 0.6, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        &lt;React/&gt;
      </motion.div>
    </div>
  );
};

// Typing animation component
const TypingAnimation = () => {
  const roles = ["AI Engineer", "Full-Stack Developer", "ML Enthusiast", "React Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let timeoutId;

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <span className="text-violet-300 border-r-2 border-violet-300 pr-1">
      {displayText}
    </span>
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[70px] relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="z-10 text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-violet-200 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-violet-300">Sourajit Nayak</span>
          </motion.h1>
          
          <motion.div 
            className="text-lg sm:text-xl md:text-2xl text-violet-100 mb-6 h-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <TypingAnimation />
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg text-indigo-100/80 mb-8 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            Architecting enterprise solutions with AI/ML and modern web technologies. 
            Currently building scalable applications at <span className="text-violet-300 font-semibold">LANDFORCE</span>.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          >
            <motion.a
              href="#about"
              className="btn bg-white text-purple-700 hover:bg-violet-100 text-center font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "#F3E8FF" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn border-2 border-white text-white hover:bg-white/10 text-center font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
          
          {/* Quick stats */}
          <motion.div
            className="flex gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-violet-200 text-sm">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="text-violet-200 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-violet-200 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedBackground />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
