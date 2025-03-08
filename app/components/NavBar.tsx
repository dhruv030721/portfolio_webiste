import React from 'react';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { FloatingDockDemo } from './FloatingDock';

const Navbar = () => {
  return (
    <div className=' w-full text-white z-50 flex bg-transparent'>
      <FloatingDockDemo />
    </div>
  );
}

export default Navbar;
