import Image from 'next/image'
import React from 'react'
import './style.css'
const FeatureItem = () => {
  return (
    <div>
        <div className='flex items-start flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 lg:gap-10 feature_main_item py-[50px] px-[32px] md:py-[96px] md:px-[72px] mt-12'>
            <div className='max-w-[486px] flex flex-col gap-[16px] md:mt-3'>
                <span className='text-[28px] md:text-[36px] font-semibold'>OmniChannel Support </span>
                <p className='text-[16px] md:text-[18px] text-[#ffffffb3]'>Integrations with multiple messaging channels allows for a unified dashboard for managing all of your customer interactions from one place with the added benefits of monitoring, automation and ease of use.</p>
            </div>
            <div>
                <Image width={442.8} height={314.3} src='/images/content/11.png' alt='feature effort'/>
            </div>
        </div>
    </div>
  )
}

export default FeatureItem