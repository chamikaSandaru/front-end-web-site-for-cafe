import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Coffee brewing"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-amber-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Café Aroma has been serving premium coffee and homemade pastries
              to our beloved community. Our passion for quality and attention to detail has made
              us a favorite spot for coffee enthusiasts and casual visitors alike.
            </p>
            <p className="text-gray-700 mb-8">
              We source our beans directly from sustainable farms around the world and roast them
              in-house to ensure the perfect cup every time. Our skilled baristas are dedicated
              to crafting your beverages with precision and care.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-serif text-amber-800 mb-2">12+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-amber-800 mb-2">50+</h3>
                <p className="text-gray-600">Coffee Varieties</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-amber-800 mb-2">1000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;