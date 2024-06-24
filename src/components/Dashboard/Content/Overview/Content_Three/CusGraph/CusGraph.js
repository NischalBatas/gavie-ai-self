import Image from 'next/image'
import React from 'react'

const CusGraph = () => {
  return (
    <div className='rounded-[20px] bg-[#1C1C24] p-2'>
        <Image width={625} height={625} src='/Image/dashboard/report2.png' alt='graph'/>
    </div>
  )
}

export default CusGraph