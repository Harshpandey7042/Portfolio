import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, image: '/Skills/html5.png' },
    { name: 'CSS', level: 85, image: '/Skills/css.png' },
    { name: 'Tailwind CSS', level: 55, image: '/Skills/tailwind.webp' },
    { name: 'JavaScript', level: 80, image: '/Skills/js.png' },
    { name: 'jQuery', level: 60, image: '/Skills/jquery.png' },
    { name: 'React', level: 50, image: '/Skills/react-logo.png' },
    { name: 'Node.js', level: 77, image: '/Skills/Nodejs.png' },
    { name: 'Express.js', level: 70, image: '/Skills/express-js.png' },
    { name: 'MongoDB', level: 80, image: '/Skills/mngodb.webp' },
    { name: 'Figma', level: 50, image: '/Skills/figma.png' },
    { name: 'Python', level: 60, image: '/Skills/python.jpg' },
    { name: 'GitHub', level: 80, image: '/Skills/GitHub.png' }
  ];

  return (
    <section className="skills py-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" id="Skills">
      <div className="max-w-6xl mx-auto px-4 py-4 rounded-lg bg-gray-200 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <img src={skill.image} alt={skill.name} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-4">{skill.name}</h3>
              <div className="w-full h-4 bg-gray-300 rounded-full mb-4">
                <div className="bg-purple-700 h-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-sm text-gray-600">Skill Level: {skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
