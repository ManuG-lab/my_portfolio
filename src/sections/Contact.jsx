import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_254",   
        "template_6uqz4b3", 
        "wsk8GOtBaBos-Ptf0"    
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-12">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded transition-colors"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center mt-4 text-green-600 dark:text-green-400">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
