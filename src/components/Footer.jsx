import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2 ">Phone: +7011677112</p>
            <p className="text-gray-400 mb-2">Email: <a href="mailto:hemantpandey900@gmail.com" className="text-gray-400 hover:text-white transition duration-300">Hemantpandey900@gmail.com</a></p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <ul className="list-none flex space-x-4">
              <li>
                <a href="https://github.com/Harshpandey7042" className="text-gray-400 hover:text-white transition duration-300">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hemant-pandey-868182265/" className="text-gray-400 hover:text-white transition duration-300">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hemantpandey092/" className="text-gray-400 hover:text-white transition duration-300">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="mailto:hemantpandey900@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                  <FaEnvelope size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Projects</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/projects/project1" className="text-gray-400 hover:text-white transition duration-300">Online Food Website</a>
              </li>
              <li className="mb-2">
                <a href="/projects/project2" className="text-gray-400 hover:text-white transition duration-300">Netflix Clone</a>
              </li>
              <li className="mb-2">
                <a href="/projects/project3" className="text-gray-400 hover:text-white transition duration-300">Calculator</a>
              </li>
              <li className="mb-2">
                <a href="/projects/project4" className="text-gray-400 hover:text-white transition duration-300">Generator Random Password</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
