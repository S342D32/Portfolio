import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = {
  "AI/ML": [
    { name: "Python", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Scikit-learn", level: 80 },
    { name: "Machine Learning", level: 85 },
    { name: "Generative AI", level: 75 },
    { name: "Data Science", level: 80 },
  ],
  "Full-Stack": [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 75 },
  ],
  "Database & Cloud": [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Supabase", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Git", level: 90 },
  ],
  "UI/UX": [
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "CSS3", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "Responsive Design", level: 90 },
    { name: "Framer Motion", level: 75 },
  ],
};

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-violet-600">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: delay }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState("AI/ML");
  const titleRef = useRef(null);
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isContentLeftInView = useInView(contentLeftRef, {
    once: true,
    amount: 0.3,
  });
  const isContentRightInView = useInView(contentRightRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title text-violet-800">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Passionate about creating intelligent solutions that bridge AI
            innovation with practical business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={contentLeftRef}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={
              isContentLeftInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-800 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Currently serving as an{" "}
                <span className="font-semibold text-violet-700">
                  Executive Developer at LANDFORCE
                </span>
                , I architect enterprise ERP solutions serving 500+ active
                users. My expertise spans from building intelligent AI agents to
                crafting scalable full-stack applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong foundation in{" "}
                <span className="font-semibold">
                  Computer Applications (MCA)
                </span>{" "}
                and hands-on experience at{" "}
                <span className="font-semibold">EY GDS</span> and{" "}
                <span className="font-semibold">IBM</span>, I specialize in
                translating complex technical challenges into elegant,
                user-centric solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I thrive on continuous learning and have earned multiple
                industry certifications in AI, cloud technologies, and modern
                web development frameworks.
              </p>
            </div>

            {/* Achievement highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-violet-100 p-4 rounded-lg text-center shadow-sm">
                <div className="text-2xl font-bold text-violet-600">94%</div>
                <div className="text-sm text-gray-600">ML Model Accuracy</div>
              </div>
              <div className="bg-white border border-violet-100 p-4 rounded-lg text-center shadow-sm">
                <div className="text-2xl font-bold text-violet-600">60%</div>
                <div className="text-sm text-gray-600">
                  Development Time Reduced
                </div>
              </div>
              <div className="bg-white border border-violet-100 p-4 rounded-lg text-center shadow-sm">
                <div className="text-2xl font-bold text-violet-600">99.9%</div>
                <div className="text-sm text-gray-600">System Reliability</div>
              </div>
              <div className="bg-white border border-violet-100 p-4 rounded-lg text-center shadow-sm">
                <div className="text-2xl font-bold text-violet-600">45%</div>
                <div className="text-sm text-gray-600">
                  Performance Improvement
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#contact"
                className="btn bg-violet-600 text-white hover:bg-indigo-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
              <motion.a
                href="#projects"
                className="btn border-2 border-violet-600 text-violet-600 hover:bg-violet-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
             <motion.button
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/images/Sourajit Nayak.pdf';
    link.download = 'Sourajit_Nayak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="btn border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Download Resume
</motion.button>

            </div>
          </motion.div>

          <motion.div
            ref={contentRightRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={
              isContentRightInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-heading font-bold text-violet-800 mb-6">
              Technical Expertise
            </h3>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-violet-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-violet-100 hover:text-violet-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills display */}
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skillCategories[activeCategory].map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </motion.div>

            {/* Education highlight */}
            <div className="mt-8 p-4 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-lg border-l-4 border-violet-500">
              <h4 className="font-semibold text-violet-800 mb-2">
                Education & Growth
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  🎓 <span className="font-medium">MCA</span> - NIIS Institute
                  (CGPA: 8.57)
                </div>
                <div>
                  📊 <span className="font-medium">B.Sc Mathematics</span> -
                  Utkal University (CGPA: 7.43)
                </div>
                <div>
                  🚀 <span className="font-medium">Continuous Learning</span> -
                  6+ Industry Certifications
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
