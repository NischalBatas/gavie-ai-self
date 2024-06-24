import Content_One from '@/components/Pages/Dashboard/Content/Overview/Content_One/Content_One'
import Content_Three from '@/components/Pages/Dashboard/Content/Overview/Content_Three/Content_Three'
import Content_Two from '@/components/Pages/Dashboard/Content/Overview/Content_Two/Content_Two'
import Overview from '@/components/Pages/Dashboard/Content/Overview/Overview'
import Dashboard from '@/components/Pages/Dashboard/Dashboard'
import React from 'react'

const page = () => {
  return (
    <div className=''>
       <Overview/>
       <Content_One/>
       <Content_Two/>
       <Content_Three/>
    </div>
  )
}

export default page