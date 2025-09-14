import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const titleRef = useRef(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  const projects = [
    {
      id: 4, // Add unique IDs for better key management
      title: "AI Powered MCQ Generator - Quizee",
      description: "Intelligent quiz generation platform creating 10,000+ custom multiple choice questions using Gemini API. Built responsive interface with real-time question generation achieving 92% relevance accuracy and supporting 500+ concurrent users daily.",
      image: "https://placehold.co/400x250/8B5CF6/FFFFFF?text=AI+MCQ+Generator",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Gemini API", "Cloud Deployment"],
      category: "AI/ML",
      liveUrl: "https://mcqgeneratorapp232.onrender.com/",
      githubUrl: "https://github.com/S342D32/MCQGeneratorApp",
      metrics: { users: "500+", accuracy: "92%", questions: "10K+" }
    },
    {
  id: 2,
  title: "MINI Perplexity",
  description: "Built and deployed a modern AI-powered search and summarization assistant inspired by Perplexity. Features real-time web search via Tavily API, clean chat interface with collapsible sidebar, NextAuth authentication, and Supabase integration. Delivers live web results with AI-generated summaries in a fast, privacy-first application.",
  image: "https://placehold.co/400x250/10B941/FFFFFF?text=AI+Search+Assistant",
  tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "NextAuth", "Supabase", "Tavily API", "Docker"],
  category: "Full-Stack",
  liveUrl: "https://mini-perplexity-delta.vercel.app/",
  githubUrl: "https://github.com/S342D32/Mini-Perplexity",
  metrics: { features: "Real-time Search", deployment: "Vercel", integration: "Multi-API" }
}
,
    {
      id: 6,
      title: "Machine Learning Species Classifier",
      description: "Built and deployed penguin species classification model achieving 95+ percent prediction accuracy. Implemented comprehensive data preprocessing pipeline with feature engineering and created interactive web interface using Streamlit.",
      image: "https://placehold.co/400x250/10B981/FFFFFF?text=ML+Species+Classifier",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Data Visualization"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      metrics: { accuracy: "95%", interactions: "1K+", models: "Multiple" }
    },
    {
      id: 3,
      title: "PostgreSQL Intelligent Agent",
      description: "Engineered intelligent PostgreSQL agent for ERP and data-centric applications using Python, Langflow, Docker, and Google Cloud. Integrated LLM-powered natural language descriptions for query results, enabling non-technical users to understand complex datasets effortlessly.",
      image: "https://placehold.co/400x250/3B82F6/FFFFFF?text=PostgreSQL+Agent",
      tech: ["Python", "Langflow", "Docker", "Google Cloud", "Ollama", "PostgreSQL"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      metrics: { queries: "Complex", deployment: "Cloud", security: "Enterprise" }
    },
    {
      id: 1,
      title: "Enterprise ERP System - LANDFORCE",
      description: "Architected and developed enterprise ERP software using React.js, PostgreSQL, and Node.js serving 500+ active users. Built modular component library with 40+ reusable components reducing development time by 60 percent and optimized database queries resulting in 45 percent improvement in application response times.",
      image: "https://placehold.co/400x250/7C3AED/FFFFFF?text=ERP+System",
      tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "Bootstrap", "Enterprise Architecture"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#",
      metrics: { users: "500+", components: "40+", performance: "+45%" }
    },
    {
      id: 5,
      title: "Bus Reservation System - EY GDS",
      description: "Designed and developed comprehensive bus reservation system handling 1000+ concurrent user sessions. Built responsive React.js frontend with 95% mobile compatibility and developed secure REST APIs using Django with JWT authentication. Implemented cloud deployment on AWS achieving 99.8% uptime.",
      image: "https://placehold.co/400x250/F59E0B/FFFFFF?text=Bus+Reservation",
      tech: ["React.js", "Django", "REST APIs", "JWT", "AWS", "Mobile-First Design"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#",
      metrics: { sessions: "1K+", uptime: "99.8%", mobile: "95%" }
    },
   
  ];

  const categories = ['All', 'AI/ML', 'Full-Stack'];
  
  // Fix the filtering logic with proper state management
  const filteredProjects = filterCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  // Add handler function for better debugging
  const handleFilterChange = (category) => {
    console.log(`Filtering to: ${category}`); // Debug line - remove in production
    setFilterCategory(category);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-violet-800">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Explore my portfolio of enterprise-grade applications, AI-powered solutions, and innovative web platforms that deliver real business value.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-2 p-2 bg-white rounded-xl shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filterCategory === category
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {/* Show count for each category */}
                <span className="ml-2 text-xs opacity-70">
                  ({category === 'All' 
                    ? projects.length 
                    : projects.filter(p => p.category === category).length})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid with AnimatePresence for smooth filtering */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.id}-${filterCategory}`} // Use unique key that changes with filter
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Show message when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </motion.div>
        )}
        
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
            className="btn bg-violet-600 text-white hover:bg-indigo-700 inline-block font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Explore More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Separate ProjectCard component for better performance
const ProjectCard = ({ project, index }) => {
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={projectRef}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -20 }} // Add exit animation
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      layout // Enable layout animations
    >
      <div className="relative h-48 bg-gradient-to-br from-violet-500 to-indigo-600 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.category === 'AI/ML' 
              ? 'bg-blue-500 text-white' 
              : 'bg-green-500 text-white'
          }`}>
            {project.category}
          </span>
        </div>

        {/* Metrics overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2 text-white text-xs flex-wrap">
            {Object.entries(project.metrics).map(([key, value]) => (
              <span key={key} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-violet-800 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-violet-50 rounded-full text-xs font-medium text-violet-700"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.liveUrl !== '#' && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm text-center transition-all duration-300 font-medium"
              whileHover={{ y: -2, backgroundColor: "#6D28D9" }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-violet-600 text-violet-600 rounded-lg text-sm text-center transition-all duration-300 font-medium"
            whileHover={{ y: -2, backgroundColor: "#EDE9FE", borderColor: "#6D28D9" }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
