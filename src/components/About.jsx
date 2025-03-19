import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React.js', level: 85 },
  { name: 'Django', level: 70 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Generative AI', level: 70 },
  { name: 'Git', level: 85 },
];

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
          transition={{ duration: 1, ease: 'easeOut', delay: delay }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const titleRef = useRef(null);
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isContentLeftInView = useInView(contentLeftRef, { once: true, amount: 0.3 });
  const isContentRightInView = useInView(contentRightRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="section-title text-violet-800">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentLeftRef}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isContentLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a results-driven full-stack developer specializing in React and Python, with a strong foundation in building scalable applications.
              I have hands-on experience in AI, ML, automation, and Generative AI, alongside expertise in cloud technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey began with a curiosity about technology, leading to mastering modern frameworks and tools to create impactful web solutions.
              I thrive on solving complex problems and delivering projects that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#contact"
                className="btn bg-violet-600 text-white hover:bg-indigo-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn border-2 border-violet-600 text-violet-600 hover:bg-violet-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            ref={contentRightRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isContentRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-heading font-bold text-violet-800 mb-6">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
