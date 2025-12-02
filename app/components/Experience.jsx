"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Protech Advance",
    period: "2024 - Present",
    description: "Leading frontend development initiatives for cutting-edge technology solutions. Implementing modern web applications with React and Next.js while mentoring junior developers.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Frontend Developer",
    company: "GPON Technologies",
    period: "2023 - 2024",
    description: "Developed responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
    skills: ["React", "Next.js", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "Junior Web Developer",
    company: "Tech Innovations Ltd",
    period: "2022 - 2023",
    description: "Built and maintained client websites using HTML, CSS, JavaScript, and Laravel. Implemented responsive designs and improved site performance.",
    skills: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"]
  },
  {
    title: "Web Development Intern",
    company: "Digital Solutions Inc",
    period: "2021 - 2022",
    description: "Assisted in developing web applications and learned modern development practices. Gained experience in version control and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Bootstrap"]
  }
];

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section 
      ref={ref} 
      id="experience" 
      className="mb-28 scroll-mt-28"
    >
      <SectionHeading>My Experience</SectionHeading>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-4 md:ml-6"
          >
            <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full -left-2.5 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900 md:-left-3 md:w-6 md:h-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full md:w-3 md:h-3"></div>
            </span>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 md:p-6 dark:bg-gray-800 dark:border-gray-700"
            >
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.period}
              </time>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2 md:mb-3">
                {experience.company}
              </p>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;