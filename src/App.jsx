import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Assuming you have a Home component
import AboutUs from './components/AboutUs';
import Projects from './components/ProjectCarousel'; // Assuming this is your projects component
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Skills from './components/Skills';
 

function App() {
  return (
    <Router>
       <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
       
        <section id="contact">
          <ContactForm />
        </section>
        
      </main>
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
