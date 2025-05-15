import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourhandle",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:youremail@example.com",
      label: "Email",
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-10">
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
  );
};

export default SocialLinks;
