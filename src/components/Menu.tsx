import React from 'react';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '4.75', description: 'Espresso with lots of steamed milk and light foam' },
    { name: 'Pour Over', price: '4.00', description: 'Hand-crafted filtered coffee' },
  ],
  pastries: [
    { name: 'Pastries', price: '3.75', description: 'Buttery, flaky French pastry' },
    { name: 'Rolls', price: '3.50', description: 'Fresh-baked daily with real berries' },
    { name: 'Hot dog', price: '4.25', description: 'Warm and gooey with cream cheese frosting' },
    { name: 'Burger', price: '4.00', description: 'Flaky pastry with fresh apple filling' },
  ],
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-amber-900 text-center mb-12">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Coffee Menu */}
          <div>
            <h3 className="text-2xl font-serif text-amber-800 mb-6">Coffee</h3>
            <div className="space-y-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-amber-900 font-medium">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries Menu */}
          <div>
            <h3 className="text-2xl font-serif text-amber-800 mb-6">Pastries</h3>
            <div className="space-y-6">
              {menuItems.pastries.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-amber-900 font-medium">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;