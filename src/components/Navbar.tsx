'use client';
import { PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <div>
          <div className="text-sm text-blue-900 font-semibold">निप्पोन मेडिकल सेंटर</div>
          <div className="text-xs text-blue-500">Nippon Medical Centre</div>
        </div>
      </div>
      <ul className="hidden md:flex gap-4 text-sm">
        <li><a href="#" className="hover:text-primary">Home</a></li>
        <li><a href="#" className="hover:text-primary">About</a></li>
        <li><a href="#" className="hover:text-primary">Services</a></li>
        <li><a href="#" className="hover:text-primary">Our Team</a></li>
        <li><a href="#" className="hover:text-primary">Blog</a></li>
        <li><a href="#" className="hover:text-primary">Gallery</a></li>
        <li><a href="#" className="hover:text-primary">Contact</a></li>
      </ul>
      <div className="flex gap-2 items-center text-sm">
        <PhoneIcon className="w-4 h-4 text-primary" />
        <span>(977) 9851065231 | Mon to Sat 07 am to 06 pm</span>
        <Button variant="default">Book Now</Button>
        <Button variant="outline">Log In</Button>
      </div>
    </nav>
  );
}