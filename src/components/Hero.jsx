import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-blue-500 text-white py-20 text-center flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg mb-6">We build amazing web experiences.</p>
      <button className="bg-white text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
