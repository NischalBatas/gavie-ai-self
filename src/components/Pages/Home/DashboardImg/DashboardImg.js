import Image from 'next/image'
import React from 'react'

const DashboardImg = () => {
  return (
    <div className='flex justify-center mt-[90px] px-10'>
        <Image className='max-h-[699px] border-[4px] border-[#33333a] rounded-[24px]' width={1220} height={699} src='/images/content/dashboard.png' alt='dashboard image'/>
    </div>
  )
}

export default DashboardImg