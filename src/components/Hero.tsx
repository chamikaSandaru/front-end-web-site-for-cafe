import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Where Every Cup Tells a Story
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Experience artisanal coffee and delectable pastries in a cozy atmosphere.
            Join us for a perfect blend of taste and ambiance.
          </p>
          <div className="flex space-x-4">
            <a
              href="#menu"
              className="inline-flex items-center px-6 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors"
            >
              View Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#location"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;