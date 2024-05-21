import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex justify-center items-center">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">Have a question or want to work together? Feel free to drop me a message!</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" className="mt-1 p-3 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" className="mt-1 p-3 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" id="message" rows="4" className="mt-1 p-3 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"></textarea>
          </div>
          <div className="col-span-2">
            <button type="submit" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
