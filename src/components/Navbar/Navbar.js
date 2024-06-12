"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import './navbar.css'

const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="bg-black shadow-lg pt-[10px]">
    <div className="main_container mx-auto px-4 pt-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div>
            <Link href='/'>
                <Image width={128} height={31} src='/images/logo/logo.svg'/>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Link href="#" className="py-5 px-3 font-medium text-[16px] text-white">Why Gavie</Link>
          <Link href="#" className="py-5 px-3 font-medium text-[16px] text-white">Features</Link>
          <Link href="#" className="py-5 px-3 font-medium text-[16px] text-white">Insights</Link>
          <Link href="#" className="py-5 px-3 font-medium text-[16px] text-white">FAQ</Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
        <button  className="text-[16px] font-medium navbar_get_btn">Book A Free Demo</button>
        </div>
        
        <div className="md:hidden flex  gap-3 items-center">
        <div className="flex items-center space-x-1">
        <button  className="text-[14px] font-medium navbar_get_btn">Start Free Trial</button>
        </div>
          <button onClick={toggleMenu} className="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className={`mobile-menu md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <Link href="#" className="py-5 px-3 font-medium text-[16px] block text-white">Why Gavie</Link>
          <Link href="#" className="py-3 px-3 font-medium text-[16px] block text-white">Features</Link>
          <Link href="#" className="py-3 px-3 font-medium text-[16px] block text-white">Insights</Link>
          <Link href="#" className="py-3 px-3 font-medium text-[16px] block text-white">FAQ</Link>
    </div>
  </nav>
  )
}

export default NavbarMain