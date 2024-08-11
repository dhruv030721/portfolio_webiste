import React from 'react';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';

const Navbar = () => {
  return (
    <div className=' w-full text-white h-20 z-50 flex items-center bg-transparent'>
      <ul className={`flex justify-center gap-x-20 text-lg w-full ${GeistSans.className}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/tech_stack">Tech Stack</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact me</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
