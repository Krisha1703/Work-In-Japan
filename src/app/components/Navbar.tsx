// components/Navbar.js
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
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with link to homepage */}
        <Link href="/" className="text-4xl font-bold logo-container">Work in Japan</Link>

        {/* Toggle button for small screens */}
        <div className="md:hidden">
          <button className="block" onClick={toggleMenu}>
            <div className="bg-white rounded-lg w-7 h-1 mb-1"></div>
            <div className="bg-red-500 rounded-lg w-7 h-1 mb-1"></div>
            <div className="bg-white rounded-lg w-7 h-1 mb-1"></div>
          </button>
        </div>

        {/* Main navigation menu */}
        <nav className={`sm:flex flex-col sm:flex-row ${showMenu ? 'block' : 'hidden'}`} style={{ marginTop: '1rem' }}>
          <ul className="sm:flex sm:space-x-6 sm:text-nowrap">
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
