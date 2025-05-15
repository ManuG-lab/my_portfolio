import React from "react";


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
        alt="Profile"
        className="w-60 h-60 object-cover rounded-full shadow-xl"
        />
      </div>

      {/* About Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          I'm a passionate full-stack developer with experience in building modern web
          applications using React, Node.js, Express, and MongoDB. I enjoy turning
          complex problems into elegant, user-friendly solutions.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Whether it's designing responsive UIs, building REST APIs, or deploying to the
          cloud, I'm always eager to take on new challenges and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
