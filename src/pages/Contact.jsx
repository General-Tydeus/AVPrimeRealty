import React from "react";

export default function Contact() {
  return (
    <div className="bg-clean min-h-screen py-16 px-4 text-primary">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Information */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mt-20 mb-4 text-center md:text-left">
            Contact Us
          </h1>
          <p className="text-lg text-center md:text-left mb-10">
            We’d love to hear from you! Whether you have a question or want to
            get started on your property journey, reach out to us today.
          </p>

          <div className="text-center md:text-left">
            <p className="text-lg mb-4">Or reach us directly:</p>
            <p className="text-lg">📍 Address: Iloilo City</p>
            <p className="text-lg">📞 Phone: (123) 456-7890</p>
            <p className="text-lg">✉️ Email: info@avprimerealty.com</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white/10 p-8 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Get in Touch
          </h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
