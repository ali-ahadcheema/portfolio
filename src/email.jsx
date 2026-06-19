import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(  "service_l7l47ft",  "template_g1isa6u",
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "LNQDMAqSisDfcOzEd"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Message not sent");
      });
  };

  return (
    <section id="email" className="min-h-screen bg-[#070d19] text-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-semibold">Get in touch</h1>

          <a href="https://linkedin.com" className="flex gap-4 items-center p-4 bg-[#0d1626] rounded-xl">
            <FaLinkedinIn />
            <div>
              <p>LinkedIn</p>
              <span className="text-sm text-gray-400">Profile</span>
            </div>
          </a>

          <a href="https://github.com" className="flex gap-4 items-center p-4 bg-[#0d1626] rounded-xl">
            <FaGithub />
            <div>
              <p>GitHub</p>
              <span className="text-sm text-gray-400">Profile</span>
            </div>
          </a>

          <a href="mailto:example@gmail.com" className="flex gap-4 items-center p-4 bg-[#0d1626] rounded-xl">
            <FiMail />
            <div>
              <p>Email</p>
              <span className="text-sm text-gray-400">Send mail</span>
            </div>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0d1626] p-6 rounded-xl">
          <h2 className="text-2xl mb-4">Send a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#0a101d]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#0a101d]"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#0a101d]"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}