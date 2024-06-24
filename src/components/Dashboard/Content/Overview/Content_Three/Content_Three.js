import React from 'react'
import CusInfo from './CusInfo/CusInfo'
import CusGraph from './CusGraph/CusGraph'

const Content_Three = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-5 mt-6'>
        <CusInfo/>
        <CusGraph/>
    </div>
  )
}

export default Content_Three