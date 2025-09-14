import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom max-w-6xl relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title text-violet-800">Let's Build Something Amazing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Ready to collaborate on your next AI project or full-stack application? I'm available for freelance projects, 
            full-time opportunities, and exciting collaborations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={leftSectionRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isLeftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-600"></div>
            
            {/* Professional introduction */}
            {/* <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-violet-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Currently serving as Executive Developer at LANDFORCE, I'm passionate about creating 
                intelligent solutions that solve real-world problems. Let's discuss how we can work together!
              </p>
            </div> */}

            {/* Contact information */}
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start gap-4 p-4 bg-violet-50 rounded-xl hover:bg-violet-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-violet-600 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a 
                    href="mailto:sourajitnayak3471@gmail.com" 
                    className="text-violet-700 hover:text-indigo-600 transition-colors font-medium break-all"
                  >
                    sourajitnayak3471@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Best way to reach me for professional inquiries</p>
                </div>
              </motion.div>
              
              {/* <motion.div 
                className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-green-600 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a 
                    href="tel:+918618195268" 
                    className="text-green-700 hover:text-green-600 transition-colors font-medium"
                  >
                    +91 8618195268
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Available for calls (9 AM - 7 PM IST)</p>
                </div>
              </motion.div> */}
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-blue-600 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-blue-700 font-medium">Bhubaneswar, Odisha, India</p>
                  <p className="text-sm text-gray-500 mt-1">Open to remote work and relocation</p>
                </div>
              </motion.div>
            </div>
            
            {/* Professional availability */}
            <div className="p-6 bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 rounded-xl mb-8 border border-violet-200">
              <h4 className="font-semibold text-violet-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Currently Available For:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">AI/ML Consulting & Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Enterprise Software Solutions</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Full-time Opportunities</span>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-violet-800 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/sourajit-nayak-b88bba281/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-[#0077B5] text-white rounded-xl transition-all hover:bg-[#005885] group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-medium text-sm">LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/S342D32" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gray-800 text-white rounded-xl transition-all hover:bg-gray-900 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-medium text-sm">GitHub</span>
                </motion.a>
              </div>
              
              {/* Resume download */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl transition-all hover:from-violet-700 hover:to-indigo-700 w-full"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold">Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Enhanced contact form */}
          <motion.form
            ref={rightSectionRef}
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isRightSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-600"></div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-violet-800 mb-2">Send a Message</h3>
              <p className="text-gray-600">I typically respond within 24 hours</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500 transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500 transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div 
                className="space-y-2"
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500 transition-all"
                >
                  <option value="">Select a topic...</option>
                  <option value="ai-ml-project">AI/ML Project</option>
                  <option value="fullstack-development">Full-Stack Development</option>
                  <option value="enterprise-solution">Enterprise Solution</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div 
                className="space-y-2"
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-vertical focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500 transition-all"
                  placeholder="Tell me about your project, requirements, or how I can help you..."
                ></textarea>
              </motion.div>
            </div>

            <motion.button
              type="submit"
              className={`w-full mt-8 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                formStatus === 'sending' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : formStatus === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700'
              }`}
              whileHover={formStatus === 'sending' ? {} : { scale: 1.02, y: -2 }}
              whileTap={formStatus === 'sending' ? {} : { scale: 0.98 }}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sending Message...
                </span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent Successfully!
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </span>
              )}
            </motion.button>
            
            {formStatus === 'success' && (
              <motion.div 
                className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Thank you for your message!</span>
                </div>
                <p className="text-sm mt-1 ml-7">I'll get back to you within 24 hours. Looking forward to our collaboration!</p>
              </motion.div>
            )}

            
          </motion.form>
        </div>

        {/* Additional CTA section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              Whether you need an AI-powered solution, a full-stack web application, or enterprise software development, 
              I'm here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:sourajitnayak3471@gmail.com"
                className="btn bg-white text-violet-600 hover:bg-violet-50 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me Directly
              </motion.a>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
