import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

const BusList: React.FC = () => {
  // This would typically come from an API call
  const buses = [
    { id: 1, name: 'Express Bus', departure: '08:00', arrival: '12:00', price: 25 },
    { id: 2, name: 'Luxury Coach', departure: '10:00', arrival: '14:00', price: 35 },
    { id: 3, name: 'Night Bus', departure: '22:00', arrival: '06:00', price: 30 },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Available Buses</h2>
      <div className="space-y-4">
        {buses.map((bus) => (
          <div key={bus.id} className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{bus.name}</h3>
              <p className="text-gray-600 flex items-center mt-2">
                <Clock className="mr-2" size={16} />
                {bus.departure} - {bus.arrival}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600 flex items-center">
                <DollarSign className="mr-1" size={20} />
                {bus.price}
              </p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;