
import React from 'react';
import { Clock, Truck } from 'lucide-react';

const FastDeliveryBanner = () => {
  return (
    <section className="bg-quickmart-green/10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex items-center">
            <div className="bg-quickmart-green rounded-full p-3 mr-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Lightning Fast Delivery</h3>
              <p className="text-gray-600">Get your order in minutes, not hours</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-quickmart-yellow rounded-full p-3 mr-3">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Live Order Tracking</h3>
              <p className="text-gray-600">Know exactly where your order is</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastDeliveryBanner;
