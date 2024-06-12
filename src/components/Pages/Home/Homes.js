import React from 'react'
import './CSS/style.css'
import Introduction from './Introduction/Introduction'
import DashboardImg from './DashboardImg/DashboardImg'
import WhyGavie from './WhyGavie/WhyGavie'
import CustomerSupport from './CustomerSupport/CustomerSupport'
import Tips from './Tips/Tips'
import Join from './Join/Join'
import Footer from './Footer/Footer'
import Faq from './Faq/Faq'
const Homes = () => {
  return (
    <div className='mt-[120px]'>
        <Introduction/>
        <DashboardImg/>
        <WhyGavie/>
        <CustomerSupport/>
        <Tips/>
        <Faq/>
        <Join/>
        <Footer/>
    </div>
  )
}

export default Homes