import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from './About';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 leading-tight">
            Hi, I'm <span className="text-pink-600">MERN Developer</span> <br />
            I Build Modern Web Apps
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Passionate Full Stack Developer with experience building fast,
            scalable, and responsive applications using MongoDB, Express, React,
            and Node.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
            >
              Contact Me
            </Link>
            <a
              href="/Resume Abhay.pdf" // Replace with actual path
              download
              className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-100 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-boy-working-on-laptop-at-desk-in-cozy-home-office-environment-png-image_16028534.png" // Replace with your own
            alt="Developer"
            className="w-80 md:w-96 drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
   
  );
  

};

export default Home;
