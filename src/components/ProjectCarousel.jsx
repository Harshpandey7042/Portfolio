import React from 'react';

const ProjectCarousel = () => {
  const projects = [
    {
      image: 'projects/online food.jpg',
      title: 'Online Food Website',
      description: 'You can order our food online. The website has been developed using HTML, CSS, JavaScript, Bootstrap, Chart.js, Express, MongoDB, and Node.js',
      techStack: 'Tech Stack: Node.js | MongoDB | JavaScript | HTML | CSS',
      link: '#'
    },
    {
      image: 'projects/netflix.png',
      title: 'Netflix Clone',
      description: 'Experience the magic of cinema from the comfort of your screen with my HTML/CSS Netflix clone! using html, css',
      techStack: 'Tech Stack: HTML | CSS | JavaScript',
      link: 'https://harshpandey7042.github.io/Netflix-clone/'
    },
    {
      image: 'projects/computer.png',
      title: 'Generator Random Password',
      description: 'Dive into the realm of security with our cutting-edge Password Generator! Craft strong and unique passwords effortlessly with just a click.  ',
      techStack: 'Tech Stack: HTML | JavaScript',
      link: 'https://genratepasswords.netlify.app/'
    },
    {
      image: 'projects/cal.png',
      title: 'Calculator',
      description: 'A simple yet powerful calculator application.',
      techStack: 'Tech Stack: HTML | JavaScript',
      link: 'https://calculator-hemant.netlify.app//'
    }
  ];

  return (
    <section className="bg-gray-100 py-12" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-64 object-cover object-center" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-700 mb-4">{project.techStack}</p>
                <a href={project.link} target="_blank" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded transition duration-300">See</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
