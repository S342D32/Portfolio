import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  const projects = [
    {
      title: "Spotify Clone",
      description: "A full-featured e-commerce platform built with React and Node.js. Includes Google authentication, product catalog, music player, and playlist creation.",
      image: "https://placehold.co/400x200/8B5CF6/FFFFFF?text=Spotify+Clone",
      tech: ["React", "Node.js", "MongoDB", "Express","Clerk","Shadcn UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with 3D effects and animations. Showcases projects, skills, and contact information in a visually appealing way.",
      image: "https://placehold.co/400x200/8B5CF6/FFFFFF?text=Portfolio+Website",
      tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Gen-AI app Quizee",
      description: "Built a dynamic quiz platform that generates custom MCQs based on topics and subtopics. Deployed on Render Cloud for real-time user access.",
      image: "https://placehold.co/400x200/8B5CF6/FFFFFF?text=Quizee+App",
      tech: ["React", "Node", "Tailwind CSS", "Express","Gemini API"],
      liveUrl: "https://mcqgeneratorapp232.onrender.com/",
      githubUrl: "https://github.com/S342D32/MCQGeneratorApp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-violet-800">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Check out some of my recent work. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectRef = useRef(null);
            const isProjectInView = useInView(projectRef, { once: true, amount: 0.2 });
            
            return (
              <motion.div
                key={project.title}
                ref={projectRef}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-violet-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-violet-50 rounded-full text-xs font-medium text-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm transition-all duration-300"
                      whileHover={{ y: -5, backgroundColor: "#6D28D9" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-violet-600 text-violet-600 rounded-lg text-sm transition-all duration-300"
                      whileHover={{ y: -5, backgroundColor: "#EDE9FE", borderColor: "#6D28D9" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
        >
          <motion.a 
            href="https://github.com/S342D32" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-violet-600 text-white hover:bg-indigo-700 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 