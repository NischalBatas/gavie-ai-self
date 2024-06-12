import Image from 'next/image'
import React from 'react'

const ItemContent = () => {
  return (
    <div className='inside_sidespace main_container grid sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-[72px]'>
        <div>
            <Image width={391.67} height={463.61} src='/images/content/7.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/3.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Custom Conversation Journeys</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Create conversation journey for an interactive customer support experience</p>
            </div>
            </div>
        </div>

        <div>
            <Image width={391.67} height={463.61} src='/images/content/5.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/2.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Zero Downtime</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Powred By Gen-AI, The agents have near zero downtime, exceptional efficiency and scalability</p>
            </div>
            </div>
        </div>

        <div>
            <Image width={391.67} height={463.61} src='/images/content/6.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/1.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Automate Tasks</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Automate the boring and repetitive tasks such as asking for personal details, creating tickets and responding to basic quaries</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ItemContent