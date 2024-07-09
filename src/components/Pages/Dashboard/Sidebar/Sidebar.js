"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import '../dashboard.css'
const menulist1=[
    {title:'Overview', pathname:'/dashboard', url:'/', image:'/images/dashboard/7.svg'},
    {title:'Agent', pathname:'/agent', url:'/', image:'/images/dashboard/1.svg'},
    {title:'Knowledge Base', pathname:'/knowledge-base', url:'/', image:'/images/dashboard/2.svg'},
    {title:'Journeys', pathname:'/journeys', url:'/', image:'/images/dashboard/3.svg'},
    {title:'Automations', pathname:'/automations', url:'/', image:'/images/dashboard/4.svg'},
    {title:'Integrations', pathname:'/integrations', url:'/', image:'/images/dashboard/5.svg'},
    {title:'Monitoring', pathname:'/monitoring', url:'/', image:'/images/dashboard/6.svg'},
]

const menulist2=[
    {title:'Sales',chat_inbox:120, pathname:'/sales', url:'/', image:'/images/chat/c1.jpg'},
    {title:'Marketing', chat_inbox:10, pathname:'/marketing', url:'/', image:'/images/chat/c2.jpg'},
    {title:'Call Center', chat_inbox:80, pathname:'/call-center', url:'/', image:'/images/chat/c3.jpg'},
    {title:'Error Handling', chat_inbox:50, pathname:'/error-handling', url:'/', image:'/images/chat/c4.jpg'}
]

export default function Sidebar(){
    const pathname=usePathname()
  return (
    <div className='w-[280px] min-h-screen px-2 py-4' style={{
        "background": "#1C1C24",
"box-shadow": "0px -1px 0px 0px #292932 inset"
    }}>
        <div className='inline-flex items-center w-full  gap-x-2.5 rounded-[15px] px-3 py-2 text-sm font-semibold bg-[#292932] shadow-sm ring-1 ring-inset ring-[#44444F]'>
            <Image width={36} height={36} src='/images/dashboard/dai.png' alt='user_profile'/>
            <div className='flex flex-col item'>
                <p className='text-[#fafafb] text-[14px] font-semibold'>Nimesh Kuinkel</p>
                <span className='text-[#92929D] text-[12px]'>@nimesh</span>
            </div>
        </div>

             {/* group 1 */}
             <div className='mt-5'>
                <ul className='flex flex-col gap-3 text-[#B5B5BE] text-[14px]'>
                    {menulist1.map((item,index)=>{
                        return(
                            <div key={index}>
                            <li><Link className={`flex gap-3 text-[14px] px-2 py-2 ${pathname ==`${item.pathname}` ? 'border-l-[3px]':''}`} href={item.url} title={item.title}><Image width={20} height={20} src={item.image} alt={item.title}/><span>{item.title}</span></Link></li>
                            </div>
                        )
                    })}

                </ul>
            </div>

            {/* group 2 */}
            <div className='mt-5'>
                <ul className='flex flex-col gap-3 text-[#B5B5BE] text-[14px]'>
                <li className='mb-1 text-[12px] text-[#92929D] font-semibold'>RECENT AGENT</li>
                    {menulist2.map((item,index)=>{
                        return(
                            <div key={index}>
                            <li><Link className='flex items-center justify-between gap-3 text-[14px] px-2 py-2' href={item.url} title={item.title}>
                            <div className='flex gap-3 items-center'>
                            <Image className='rounded-full' width={24} height={24} src={item.image} alt="item_img"/><span>{item.title}</span>
                            </div>
                            <div><span className='bg-[#FC5A5A] text-white rounded-full text-[12px] px-1 py-1 w-[32px] h-[32px]'>{item.chat_inbox}</span></div>
                            </Link></li>
                            </div>
                        )
                    })}

                </ul>
            </div>
    </div>
  )
}

