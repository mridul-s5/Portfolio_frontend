import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
  "Full Stack MERN Developer",
  "2+ years of experience building web apps",
  "Strong understanding of REST APIs",
  "UI/UX enthusiast with a love for design",
  "Proficient in Git, GitHub, and deployment",
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div
            className="text-center md:text-left md:w-2/3"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
              About Me
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              I’m a creative and passionate Full Stack Developer focused on building responsive, performant, and accessible web applications using the MERN stack.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-aos="fade-up">
                  <span className="text-pink-600 text-xl">✨</span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center" data-aos="fade-left">
            <img
              src="Abhay Portfolio Photo.jpg" // Replace with your actual image path
              alt="Profile"
              className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
