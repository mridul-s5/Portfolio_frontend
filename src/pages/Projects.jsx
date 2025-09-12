import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://yourportfolio.com",
    image: "https://via.placeholder.com/400x250?text=Portfolio+Website",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack e-commerce store using MERN stack with payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://yourecommerce.com",
    image: "https://via.placeholder.com/400x250?text=E-commerce+Store",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blogging platform with rich-text editor and user authentication.",
    tech: ["React", "Node.js", "Express", "JWT"],
    link: "https://yourblog.com",
    image: "https://via.placeholder.com/400x250?text=Blog+Platform",
  },
  {
    id: 4,
    title: "Chat App",
    description: "Real-time chat application with Socket.io and React.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://yourchatapp.com",
    image: "https://via.placeholder.com/400x250?text=Chat+App",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold text-purple-800 mb-12"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, tech, link, image }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
