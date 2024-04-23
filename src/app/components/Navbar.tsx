"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu state
  };

  return (
    <header className="bg-blue-800 text-white">
      <div className=" mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with link to homepage */}
        <Link href="/" className="lg:text-4xl text-2xl font-bold logo-container">Work in Japan</Link>

        {/* Toggle button for small screens */}
        <div className={`md:hidden relative block ${showMenu ? 'mt-5' : ''} `}>
          <button className="block" onClick={toggleMenu}>
          <div className={` transform -translate-x-1/2 -translate-y-1 bg-white rounded-lg w-7 h-1 mb-1 transition-all ${showMenu ? 'hidden' : ''}`}></div>
            <div className={`transform -translate-x-1/2 -translate-y-1 bg-red-500 rounded-lg w-7 h-1 mb-1 transition-all ${showMenu ? 'rotate-45 w-10  translate-y-1' : ''}`}></div>
            <div className={`transform -translate-x-1/2 -translate-y-1 bg-white rounded-lg w-7 h-1 mb-1 transition-all ${showMenu ? '-rotate-45  w-10' : 'rotate-0'}`}></div>
          </button>
          {/* Overlay for menu on small screens */}
          {showMenu && (
           
              <nav className="text-white rounded-lg py-4 px-6 sm:text-lg text-sm font-bold">
                <ul className="flex flex-col items-center space-y-4">
                  <li><Link href="/home" className="hover:text-red-500">Home</Link></li>
                  <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
                  <li><Link href="/jobs" className="hover:text-red-500">Jobs</Link></li>
                  <li><Link href="/lifeinjapan" className="hover:text-red-500">Life in Japan</Link></li>
                  <li><Link href="/contact" className="hover:text-red-500">Contact Us</Link></li>
                </ul>
              </nav>
            
          )}
        </div>

        {/* Main navigation menu for larger screens */}
        <nav className="hidden md:flex ">
          <ul className="flex items-center space-x-6 text-center">
            <li><Link href="/home" className="hover:text-red-500 font-bold text-lg">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500 font-bold text-lg">About Us</Link></li>
            <li><Link href="/jobs" className="hover:text-red-500 font-bold text-lg">Jobs</Link></li>
            <li><Link href="/lifeinjapan" className="hover:text-red-500 font-bold text-lg">Life in Japan</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 font-bold text-lg">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
