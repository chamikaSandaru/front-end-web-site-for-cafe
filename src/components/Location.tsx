
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-amber-900 mb-8">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Coffee Street<br />Colombo, Sri lanka</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-600">
                    Phone: 0110876534876<br />
                    Email: chamikasandaru2021@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Café exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;