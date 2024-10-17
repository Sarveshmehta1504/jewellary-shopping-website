import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Timeless Elegance</h1>
        <p className="text-xl text-white mb-8">Exquisite jewelry for every occasion</p>
        <a href="#" className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 inline-block w-max">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;