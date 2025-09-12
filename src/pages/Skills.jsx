import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGitAlt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";

// Skill list with icon, level, and color
const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress className="text-black" />, level: "Intermediate" },
  { name: "React.js", icon: <FaReact className="text-blue-500" />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-700" />, level: "Intermediate" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Intermediate" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: "Intermediate" },
  { name: "REST API", icon: <SiPostman className="text-orange-400" />, level: "Intermediate" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-10" data-aos="fade-down">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-3 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
