import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Import certificate images
import metaImg from '../images/meta.png';
import awsImg from '../images/aws.png';
import oracleImg from '../images/oracle.png';
import ibmImg from '../images/ibm.png';
import nptelImg from '../images/nptel.png';
import Deeplearn from '../images/Deeplearn.png'; // Add this image
import postgres from '../images/postgress.png';
import udemy from '../images/ai.jpg';
import reactNative from '../images/reactNative.png';




const Certificate = ({ title, issuer, date, image, index, category, skills }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all hover:shadow-2xl will-change-transform group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          category === 'AI/ML' 
            ? 'bg-blue-500 text-white' 
            : category === 'Cloud'
            ? 'bg-green-500 text-white'
            : 'bg-purple-500 text-white'
        }`}>
          {category}
        </span>
      </div>

      <div className="h-56 bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center p-6 overflow-hidden border-b border-gray-100 relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <div className="w-24 h-24 bg-violet-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-6 bg-gradient-to-b from-white to-violet-50/30 flex-grow">
        <h3 className="text-lg font-bold font-heading text-violet-800 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
          {title}
        </h3>
        <div className="space-y-2 mb-4">
          <p className="text-gray-700 flex items-center gap-2">
            <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium text-sm">{issuer}</span>
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8.5h.01M12 17h.01M16 17h.01M8 13h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2z" />
            </svg>
            <span className="text-sm">{date}</span>
          </p>
        </div>
        
        {/* Skills tags */}
        {skills && (
          <div className="flex flex-wrap gap-1 mt-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const titleRef = useRef(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  // Updated certificate data with accurate information from CV
  const certificates = [
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM (Coursera)",
      date: "May 2024",
      image: ibmImg,
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras", "Computer Vision"]
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      date: "August 2024",
      image: metaImg,
      category: "Development",
      skills: ["React.js", "JavaScript", "HTML/CSS", "UI/UX", "Responsive Design"]
    },
    {
      title: "AWS Cloud Technology Consultant",
      issuer: "AWS (Coursera)",
      date: "May 2024",
      image: awsImg,
      category: "Cloud",
      skills: ["AWS Services", "Cloud Architecture", "DevOps", "Scalability", "Security"]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Certificate",
      issuer: "DeepLearning.AI",
      date: "July 2024",
      image: Deeplearn,
      category: "AI/ML",
      skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP", "Time Series"]
    },
    {
      title: "Oracle Cloud AI Foundations Associate",
      issuer: "Oracle",
      date: "October 2024",
      image: oracleImg,
      category: "Cloud",
      skills: ["Oracle Cloud", "AI Services", "Machine Learning", "Data Analytics", "Cloud Security"]
    },
    {
      title: "Applied Accelerated Artificial Intelligence",
      issuer: "NPTEL (IIT Madras)",
      date: "October 2024",
      image: nptelImg,
      category: "AI/ML",
      skills: ["AI Algorithms", "Optimization", "Pattern Recognition", "Data Mining", "Research"]
    },
     {
      title: "Complete AI/ML Bootcamp",
      issuer: "Udemy",
      date: "April 2025",
      image: udemy,
      category: "AI/ML",
      skills: ["AI Algorithms", "Optimization", "Pattern Recognition", "Deep Learning", "Transformer","Statistics in AI"]
    },
     {
      title: "PostgreSQL For Everybody",
      issuer: "Coursera",
      date: "December 2024",
      image: postgres,
      category: "Development",
      skills: ["SQL", "PG Admin", "CRUD Operation", "Trigger Functions", "optimization"]
    },
     {
      title: "Meta React Native",
      issuer: "Coursera",
      date: "June 2025",
      image: reactNative,
      category: "Development",
      skills: ["React Native", "UI/UX", "Mobile Development", "Data Flow"]
    },
  ];

  const categories = ['All', 'AI/ML', 'Development', 'Cloud'];
  const filteredCertificates = filterCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === filterCategory);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-10 w-80 h-80 bg-violet-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom max-w-7xl relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title text-violet-800">Professional Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Industry-recognized certifications that validate my expertise in AI/ML, cloud technologies, and modern web development frameworks.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filterCategory === category
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <Certificate 
              key={`${certificate.title}-${index}`}
              index={index}
              {...certificate}
            />
          ))}
        </div>
        
        {/* Achievement summary */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Professional Certifications</div>
            <div className="text-sm text-gray-500 mt-1">Industry Recognized</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">Major Tech Domains</div>
            <div className="text-sm text-gray-500 mt-1">AI/ML, Cloud, Development</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">2025</div>
            <div className="text-gray-700 font-medium">Latest Certifications</div>
            <div className="text-sm text-gray-500 mt-1">Continuously Learning</div>
          </div>
        </motion.div>

        {/* Future learning section */}
        <motion.div 
          className="mt-12 p-8 border-2 border-dashed border-violet-200 rounded-2xl text-center bg-white/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-violet-800 mb-2">Continuous Learning Journey</h3>
          <p className="text-violet-600 font-medium">Currently pursuing advanced certifications in Kubernetes, MLOps, and Advanced React Patterns</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Kubernetes</span>
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">MLOps</span>
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Advanced React</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
