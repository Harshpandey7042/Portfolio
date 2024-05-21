import React from "react";
import ScrollToTopButton from "./ScrollToTop";
import resume from '/public/resume.pdf'

const Home = () => {
  return (
    <>
      <ScrollToTopButton />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
        <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white bg-opacity-80 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="w-full md:w-1/2 leading-loose p-4 md:p-8 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                Hello, I am <br />
                <span className="text-purple-700">Hemant Pandey</span>
              </h1>
              <h3 className="text-2xl mb-4">I am a Web Developer</h3>

              <p className="mb-8 text-lg leading-relaxed">
                High level skilled experience in Web Design and UX/UI design
                knowledge and producing best quality work. Customer satisfaction
                is our first priority. We design and produce best quality work.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300">
           <a href="#contact">Contact me</a>
                </button>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300">
                <a href={resume} download className="text-white text-lg">Resume</a>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <img
                src="/images/maindp.jpg"
                alt="Hemant Pandey"
                className="max-w-full rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
