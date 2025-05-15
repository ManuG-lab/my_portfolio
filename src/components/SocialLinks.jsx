import { footer } from "framer-motion/client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/ManuG-lab",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/emmanuel-gitau",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/____justromeo____/",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:gmannu2055@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-purple-700">
    <div className="flex justify-center space-x-6 mt-10 mb-10">
      {socials.map(({ icon, url, label }, idx) => (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 text-2xl transition"
        >
          {icon}
        </a>
      ))}
    </div>
    </footer>
  );
};

export default SocialLinks;
