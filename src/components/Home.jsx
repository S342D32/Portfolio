import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense, useState, useEffect } from 'react';

// More obvious sphere for debugging
const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 64, 64]} scale={[2.5, 2.5, 2.5]}>
      <meshStandardMaterial
        color="#8B5CF6"
        emissive="#4C1D95"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.7}
        metalness={0.8}
        roughness={0.2}
      />
      <Environment preset="city" />
    </Sphere>
  );
};

// Fallback when WebGL isn't available
const CanvasFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-violet-400/50 to-indigo-400/50 rounded-xl">
    <div className="text-center">
      <div className="w-32 h-32 mx-auto rounded-full bg-violet-500/30 animate-pulse"></div>
      <p className="mt-4 text-white text-opacity-70">WebGL not supported</p>
    </div>
  </div>
);

const ThreeScene = () => {
  const [isSupported, setIsSupported] = useState(true);
  const [renderError, setRenderError] = useState(null);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || 
                canvas.getContext('experimental-webgl') || 
                canvas.getContext('webgl2');
      
      if (!gl) {
        console.error("WebGL not supported");
        setIsSupported(false);
      }
    } catch (e) {
      console.error("WebGL error:", e);
      setIsSupported(false);
    }
  }, []);

  // If WebGL is not supported, show fallback
  if (!isSupported) {
    console.log("Showing fallback - WebGL not supported");
    return <CanvasFallback />;
  }

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 2]}
          onCreated={state => {
            console.log("Canvas created successfully");
          }}
          onError={error => {
            console.error("Canvas error:", error);
            setRenderError(error);
          }}
        >
          <color attach="background" args={['#13074b']} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
      {renderError && <CanvasFallback />}
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-indigo-700/50 to-purple-800/0 z-10 pointer-events-none" />
          <ThreeScene />
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