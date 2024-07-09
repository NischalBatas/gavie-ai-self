import Content_One from '@/components/Pages/Dashboard/Content/Overview/Content_One/Content_One'
import Content_Three from '@/components/Pages/Dashboard/Content/Overview/Content_Three/Content_Three'
import Content_Two from '@/components/Pages/Dashboard/Content/Overview/Content_Two/Content_Two'
import Overview from '@/components/Pages/Dashboard/Content/Overview/Overview'
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


export async function generateMetadata(){
  const imageUrl =  "https://gavie-ai2.vercel.app/images/gavieai.jpg";

  return {
    title: "Dashboard",
    description: "Net sales, found on the income statement are used to calculate this ration returns and refunds must be backed out of total sales to measure the truly measure the firm’s assets abillity to generate sales.",
    // image: imageUrl,
    openGraph: {
      title: "Dashboard",
      description: "Net sales, found on the income statement are used to calculate this ration returns and refunds must be backed out of total sales to measure the truly measure the firm’s assets abillity to generate sales.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Dashboard",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_GAVIEAI_URL}/dashboard`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dashboard",
      description: "Net sales, found on the income statement are used to calculate this ration returns and refunds must be backed out of total sales to measure the truly measure the firm’s assets abillity to generate sales.",
      creator: "Dashboard",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Dashboard",
        },
      ],
    },
  };
}