
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const banners = [
  {
    id: 1,
    title: "Fresh Fruits & Vegetables",
    description: "Get fresh produce delivered in minutes!",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1470&auto=format&fit=crop",
    color: "from-green-500/80 to-green-700/80",
  },
  {
    id: 2,
    title: "Weekly Essentials",
    description: "Stock up your pantry with our best deals",
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=1374&auto=format&fit=crop",
    color: "from-blue-500/80 to-blue-700/80",
  },
  {
    id: 3,
    title: "Summer Refreshments",
    description: "Beat the heat with cold drinks & ice creams",
    image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=1374&auto=format&fit=crop",
    color: "from-yellow-500/80 to-yellow-700/80",
  },
];

const HeroSection = () => {
  return (
    <section className="pt-2 pb-8">
      <div className="container mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} flex flex-col justify-center p-8 text-white`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                    <p className="text-lg md:text-xl mb-6">{banner.description}</p>
                    <Button className="w-fit bg-white text-gray-800 hover:bg-gray-100">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
