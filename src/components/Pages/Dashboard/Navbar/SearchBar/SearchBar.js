import React from 'react'
import { IoSearch } from "react-icons/io5";
import '../../dashboard.css'
const SearchBar = () => {
  return (
    <div>
        <form className='bg-[#292932] text-[14px] flex justify-between align-middle rounded-[15px] px-3 h-[48px] md:w-[400px]'>
        <input className='w-full bg-[#292932] border-none outline-none focus:outline-none focus:border-none' type='search' placeholder='Search'/>
        <button className='text-[24px] max-w-[50px] text-[#92929D]'><IoSearch /></button>
        </form>
    </div>
  )
}

export default SearchBar