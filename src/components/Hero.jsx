import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/HeroPicture.png)' }}>
      <div className="absolute inset-0 bg-[#210024] opacity-50"></div>
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold">Welcome to Anjoreen World Couture</h1>
        <p className="mt-4 text-lg">Your one-stop shop for luxurious fashion</p>
        <a href="/Collection">
         <button className="mt-6 px-8 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition">Shop Now</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;


