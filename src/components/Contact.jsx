import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isLeftSectionInView = useInView(leftSectionRef, { once: true, amount: 0.3 });
  const isRightSectionInView = useInView(rightSectionRef, { once: true, amount: 0.3 });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-violet-50">
      <div className="container-custom max-w-5xl">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title text-violet-800">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            ref={leftSectionRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isLeftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-600"></div>
            <h3 className="text-2xl font-heading font-bold text-violet-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a href="mailto:yourname@example.com" className="text-lg text-violet-700 hover:text-indigo-600 transition-colors">
                    sourajitnayak3471@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg text-violet-700 hover:text-indigo-600 transition-colors">
                    +91 8618195268
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <p className="text-lg text-violet-700">Bhubaneswar, Odisha</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-violet-800 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/sourajit-nayak-b88bba281/" 
                  className="p-3 bg-violet-100 rounded-full text-violet-600 transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "#8B5CF6", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://github.com/S342D32" 
                  className="p-3 bg-violet-100 rounded-full text-violet-600 transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "#8B5CF6", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 bg-violet-100 rounded-full text-violet-600 transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "#8B5CF6", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm6.209 8.741c.218 4.878-3.419 10.309-9.865 10.309-1.96 0-3.784-.572-5.318-1.554 1.837.216 3.672-.262 5.126-1.374-1.511-.028-2.782-1.028-3.219-2.402.218.041.441.062.665.062.318 0 .626-.041.915-.125-1.575-.318-2.765-1.707-2.765-3.375v-.043c.464.259 1.003.416 1.564.436-.925-.62-1.537-1.666-1.537-2.862 0-.627.166-1.222.471-1.731 1.7 2.083 4.24 3.467 7.101 3.607-.056-.259-.095-.521-.095-.783 0-1.891 1.53-3.427 3.427-3.427.989 0 1.88.416 2.511 1.085.777-.153 1.523-.437 2.186-.828-.256.798-.798 1.466-1.492 1.891.691-.083 1.361-.267 1.975-.536-.461.694-1.046 1.3-1.715 1.785z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={rightSectionRef}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isRightSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-600"></div>
            <h3 className="text-2xl font-heading font-bold text-violet-800 mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-600">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-600">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="px-4 py-3 border border-gray-200 rounded-lg resize-vertical focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              className="btn bg-violet-600 text-white hover:bg-indigo-700 mt-6 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
            </motion.button>
            
            {formStatus === 'success' && (
              <motion.div 
                className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 