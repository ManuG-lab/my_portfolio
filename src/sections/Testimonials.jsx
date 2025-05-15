import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-12">
        Testimonials
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {testimonials.map(({ quote, name, role }, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
          >
            <p className="text-gray-800 dark:text-gray-200 italic mb-6">“{quote}”</p>
            <p className="font-semibold text-purple-700 dark:text-purple-400">{name}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
