import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-white mb-8">Stay updated with our latest collections and exclusive offers</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;