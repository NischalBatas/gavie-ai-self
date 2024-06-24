import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden sm:inline-block relative  text-left" ref={dropdownRef}>
      <div className='flex gap-1 items-center text-[#92929D] text-[14px]'>
        Show:
        <button
          type="button"
          className="inline-flex items-center gap-2 justify-center w-full rounded-md   shadow-sm px-1 py-2  text-sm font-medium text-[#B5B5BE] focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          All Projects
          <IoMdArrowDropdown className='text-[24px]'/>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Latest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Popular
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Order list
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Active
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
