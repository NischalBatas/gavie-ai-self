"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import './navbar.css'
import { usePathname } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname=usePathname()
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = (event) => {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 60, // Adjust this value to account for the fixed navigation height
                  behavior: 'smooth'
              });
          }
      };

      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
          link.addEventListener('click', handleScroll);
      });

      return () => {
          links.forEach(link => {
              link.removeEventListener('click', handleScroll);
          });
      };
  }, []);

  return (
    <nav className="bg-black shadow-lg pt-[10px]">
    <div className="main_container mx-auto px-4 pt-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div>
            <Link href='/'>
                <Image priority={true} className="w-[128px] h-auto" width={128} height={31} src='/images/logo/logo.svg' alt="Navbar_logo"/>
            </Link>
          </div>
        </div>
        {pathname =='/' ? 
        <div className="hidden md:flex items-center space-x-1">
          <Link href="#whygavie" className="py-5 px-3 font-medium text-[16px] text-white">Why Gavie</Link>
          <Link href="#features" className="py-5 px-3 font-medium text-[16px] text-white">Features</Link>
          <Link href="#insights" className="py-5 px-3 font-medium text-[16px] text-white">Insights</Link>
          <Link href="#faqs" className="py-5 px-3 font-medium text-[16px] text-white">FAQ</Link>
        </div>
        :''}
        <div className="hidden md:flex items-center space-x-1">
        <Link href='/contact-us'>   <button  className="text-[16px] font-medium navbar_get_btn">Start Free Trial</button>
        </Link>
        </div>
        {pathname =='/' ? 
        <div className="md:hidden flex  gap-3 items-center">
        <div className="flex items-center space-x-1">
        {/* <Link href='/contact-us'>      <button  className="text-[14px] font-medium navbar_get_btn">Start Free Trial</button>
       </Link> */}
        </div>
          <button onClick={toggleMenu} className="mobile-menu-button">
          <FaBarsStaggered />
          </button>
        </div>
         :''}
         
      </div>
    </div>
    <div className={`mobile-menu md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <Link href="#whygavie" className="py-5 px-3 font-medium text-[16px] block text-white">Why Gavie</Link>
          <Link href="#features" className="py-3 px-3 font-medium text-[16px] block text-white">Features</Link>
          <Link href="#insights" className="py-3 px-3 font-medium text-[16px] block text-white">Insights</Link>
          <Link href="#faqs" className="py-3 px-3 font-medium text-[16px] block text-white">FAQ</Link>
    </div>
     
  </nav>
  )
}

export default NavbarMain