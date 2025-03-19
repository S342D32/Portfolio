import { motion } from 'framer-motion';

// Animated decorative elements
const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Main sphere */}
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
      
      {/* Glow effect */}
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
      
      {/* Orbit rings */}
      <motion.div 
        className="absolute w-[350px] h-[350px] border-[4px] border-indigo-300/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[450px] h-[450px] border-[2px] border-violet-300/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-10 left-16 w-8 h-8 bg-indigo-400/30 rounded-full blur-sm"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 15, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-24 w-10 h-10 bg-purple-500/30 rounded-full blur-sm"
        animate={{ 
          y: [0, -20, 0],
          x: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      
      <motion.div 
        className="absolute top-32 right-16 w-6 h-6 bg-violet-300/40 rounded-full blur-sm"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -15, 0],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
      />
      
      {/* Code symbols */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-white text-opacity-30 font-mono text-lg"
        animate={{ 
          opacity: [0, 0.7, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 text-white text-opacity-20 font-mono text-xl"
        animate={{ 
          opacity: [0, 0.5, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
      >
        { }
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/3 text-white text-opacity-20 font-mono text-lg"
        animate={{ 
          opacity: [0, 0.6, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 3 }}
      >
        ( )
      </motion.div>
    </div>
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
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-violet-300">Sourajit Nayak</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-violet-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            Web Developer & AI/ML 
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg text-indigo-100/80 mb-8 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            Creating beautiful and functional web experiences with modern technologies.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          >
            <motion.a
              href="#about"
              className="btn bg-white text-purple-700 hover:bg-violet-100 text-center"
              whileHover={{ scale: 1.05, backgroundColor: "#F3E8FF" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn border-2 border-white text-white hover:bg-white/10 text-center"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-indigo-700/30 to-purple-800/0 z-10 pointer-events-none" />
          <AnimatedBackground />
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }} 
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home; 