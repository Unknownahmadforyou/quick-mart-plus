
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, X, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LocationSelectorProps {
  onClose: () => void;
}

// Mock locations database
const popularLocations = [
  { id: 1, name: 'Downtown', city: 'New York', estimatedTime: '8 mins' },
  { id: 2, name: 'Silicon Valley', city: 'San Francisco', estimatedTime: '12 mins' },
  { id: 3, name: 'Lake View', city: 'Chicago', estimatedTime: '15 mins' },
  { id: 4, name: 'Westwood', city: 'Los Angeles', estimatedTime: '10 mins' },
];

const LocationSelector: React.FC<LocationSelectorProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Filter locations based on search term
  const filteredLocations = popularLocations.filter(
    location => location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle detect current location
  const handleDetectLocation = () => {
    setIsDetectingLocation(true);
    
    // Simulate geolocation API delay
    setTimeout(() => {
      setIsDetectingLocation(false);
      setSelectedLocation('Current Location');
      
      toast({
        title: "Location detected!",
        description: "Estimated delivery time: 9 mins",
      });
      
      setTimeout(() => {
        onClose();
      }, 1000);
    }, 1500);
  };
  
  // Handle location selection
  const handleSelectLocation = (location: { name: string; city: string; estimatedTime: string }) => {
    setSelectedLocation(`${location.name}, ${location.city}`);
    
    toast({
      title: `Location set to ${location.name}, ${location.city}`,
      description: `Estimated delivery time: ${location.estimatedTime}`,
    });
    
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium">Set delivery location</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for area, street name..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button 
            variant="outline"
            className="mt-4 w-full flex items-center justify-center"
            onClick={handleDetectLocation}
            disabled={isDetectingLocation}
          >
            {isDetectingLocation ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Detecting your location...
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4 mr-2 text-quickmart-green" />
                Detect current location
              </>
            )}
          </Button>
          
          {filteredLocations.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm text-gray-500 mb-2">POPULAR LOCATIONS</h3>
              <ul className="space-y-2">
                {filteredLocations.map((location) => (
                  <li 
                    key={location.id}
                    className="p-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                    onClick={() => handleSelectLocation(location)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-gray-500">{location.city}</p>
                      </div>
                      <div className="text-sm text-quickmart-green">
                        {location.estimatedTime}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {searchTerm && filteredLocations.length === 0 && (
            <div className="mt-6 text-center py-8">
              <p className="text-gray-500">No locations found for "{searchTerm}"</p>
              <p className="text-sm mt-2">Try searching for a different area or street name</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
