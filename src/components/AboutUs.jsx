import React from 'react';

const AboutUs = () => {
  return (
    <section className="about flex flex-col items-center justify-center min-h-screen  bg-gray-200 p-4">
      <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white bg-opacity-80 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/2 p-4 md:p-8 order-2 md:order-1">
            <img
              src="/images/maindp.jpg"
              alt="Hemant Pandey"
              className="max-w-full rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 leading-loose p-4 md:p-8 text-center md:text-left order-1 md:order-2">
            <h1 className="text-5xl font-bold mb-4 text-purple-700">
              About Me
            </h1>
            <div className="text-gray-800 mb-6 text-lg leading-relaxed">
              <p className="mb-4">
                <span className="text-2xl">👋</span> Hello, I'm Hemant. A passionate web developer with a creative mindset.
              </p>
              <p className="mb-4">
                I specialize in crafting engaging and user-friendly web experiences using technologies like HTML, CSS, JavaScript, React.js, and more.
              </p>
              <p className="mb-4">
                My goal is to create digital solutions that not only meet but exceed client expectations, bringing their ideas to life with precision and creativity.
              </p>
              <p>
                Let's connect and work together to build something amazing!
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300">
           <a href="#contact">Contact Me</a>
              </button>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300">
               <a href="#home">Portfolio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
