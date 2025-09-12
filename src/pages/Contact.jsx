import React, { useState, useEffect } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch(error) {
      setSuccess("Something went wrong. Try again.",error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12" data-aos="fade-down">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-pink-600" />
              <p className="text-gray-700 text-lg">shukla.mridul0202@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-green-600" />
              <p className="text-gray-700 text-lg">+91 9026179742</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <p className="text-gray-700 text-lg">Lucknow, India</p>
            </div>
            <p className="text-gray-600 mt-6">
              Feel free to reach out via email or use the contact form. I’ll get back to you as soon as possible!
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6" data-aos="fade-left">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300">
              Send Message
            </button>
            {success && <p className="text-green-600 font-medium">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
