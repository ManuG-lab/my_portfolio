import React from "react";


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* Left Text Block */}
      <div className="text-center md:text-left space-y-6 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-purple-600 dark:text-purple-400">Romeo</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Full-Stack Software Engineer
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          I build modern web applications with a passion for performance and clean design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 rounded-md bg-purple-700 text-white hover:bg-purple-800 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-purple-700 dark:border-purple-400 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image Block */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
        src="https://imageio.forbes.com/specials-images/imageserve/67efed5d3b35947cbacc0464/Kendrick-Lamar-performs-onstage-/960x0.jpg?format=jpg&width=1440"
        alt="Romeo Hero"
        className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
