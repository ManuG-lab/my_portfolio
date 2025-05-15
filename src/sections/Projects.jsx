import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectData = [
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", // Replace later
    description: "Modern personal portfolio built with React and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Store",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", // Replace later
    description: "Full-stack online store using React, Node.js, and MongoDB.",
    link: "https://yourecommerce.com",
  },
  {
    title: "Music Streaming App",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", // Replace later
    description: "Spotify-style app with audio player and playlist support.",
    link: "https://yourmusicapp.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-12">
        My Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="max-w-4xl mx-auto"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-400 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
