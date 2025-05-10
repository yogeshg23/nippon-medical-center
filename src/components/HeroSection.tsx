import React from 'react';
import { Button } from '@/components/ui/button';
export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-background.png)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-xl text-center max-w-md">
          <h1 className="text-2xl font-bold text-blue-800">Migration Health Assessment Center</h1>
          <p className="text-sm mt-2 text-gray-700">
            Also, book your medical appointments effortlessly with Nippon's online appointment system.
          </p>
          <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Book Examination</Button>
        </div>
      </div>
    </section>
  );
}