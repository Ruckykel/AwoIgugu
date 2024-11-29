import React from 'react';

const AboutUs = () => {
  return (
    <section className="px-4 sm:px-20 py-16 bg-white relative">
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="/images/AboutLogo.svg" 
          alt="Brand Watermark" 
          className="w-full object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="max-w-3xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl leading-tight font-normal text-gray-900">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Founded in 2015, our brand began with a simple mission: to create clothing that empowers and inspires. What started in a small studio has grown into a global community of fashion enthusiasts who believe in style, comfort, and self-expression.
            </p>
            <p>
              Every piece we design is a reflection of our commitment to quality, sustainability, and inclusivity. We believe fashion should be accessible, comfortable, and a true expression of individual personality.
            </p>
          </div>
          <div className="flex justify-center space-x-4 pt-6">
            <div className="border-l-4 border-[#58005F] pl-4 text-center">
              <p className="text-lg font-semibold text-gray-800">8+</p>
              <p className="text-sm text-gray-600">Years of Innovation</p>
            </div>
            <div className="border-l-4 border-[#58005F] pl-4 text-center">
              <p className="text-lg font-semibold text-gray-800">50K+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;