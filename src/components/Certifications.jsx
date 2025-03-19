import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import certificate images
import metaImg from '../images/meta.png';
import awsImg from '../images/aws.png';
import oracleImg from '../images/oracle.png';
import postgressImg from '../images/postgress.png';
import ibmImg from '../images/ibm.png';
import nptelImg from '../images/nptel.png';

const Certificate = ({ title, issuer, date, image, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all hover:shadow-xl will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <div className="h-52 bg-white flex items-center justify-center p-4 overflow-hidden border-b border-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="max-h-full max-w-full object-contain" 
          />
        ) : (
          <div className="w-24 h-24 bg-violet-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-5 bg-gradient-to-b from-white to-violet-50 flex-grow">
        <h3 className="text-xl font-bold font-heading text-violet-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Issuer:</span> {issuer}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Date:</span> {date}
        </p>
      </div>
    </motion.div>
  );
};


const Certifications = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  // Certificate data with proper image imports
  const certificates = [
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "August 2024",
      image: metaImg
    },
    {
      title: "AWS Cloud Technology Consultant",
      issuer: "Coursera",
      date: "May 2024",
      image: awsImg
    },
    {
      title: "Oracle Certified Foundation Associate",
      issuer: "Oracle",
      date: "October 2024",
      image: oracleImg
    },
    {
      title: "PostgreSQL for Everybody",
      issuer: "Coursera",
      date: "December 2024",
      image: postgressImg
    },
    {
      title: "IBM AI Engineering",
      issuer: "Coursera",
      date: "May 2024",
      image: ibmImg
    },
    {
      title: "Applied Accelerated Artificial Intelligence",
      issuer: "NPTEL",
      date: "October 2024",
      image: nptelImg
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-10 w-80 h-80 bg-violet-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom max-w-6xl relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title text-violet-800">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Professional certifications and achievements that highlight my expertise and continuous learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Certificate 
              key={index}
              index={index}
              {...certificate}
            />
          ))}
        </div>
        
        {/* Space for additional certificates */}
        <motion.div 
          className="mt-16 p-8 border-2 border-dashed border-violet-200 rounded-xl text-center bg-white/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-violet-600 font-medium">More achievements coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 