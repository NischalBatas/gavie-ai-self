import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react'


const BlogImage = ({posts}) => {
  const dateString = posts.blogfield.uploadedDat
  const formattedDate = format(new Date(dateString), 'MMMM d, yyyy');
  return (
    <div className='inside_sidespace main_container2  relative '>
      <div className='hidden md:block w-full h-[320px] ' 
       style={{position: "absolute",
       top: "0%",
       left: "0%",
       transform: "translate(-0%, -0%)",
      zIndex:'1'}}
       ></div>
         <div  style={{zIndex:'2'}} className="relative    pt-4  w-full  rounded-md gap-6">
          <div>
            <div className=" main_container2   md:text-white flex items-center justify-between">

            </div>
            <Image
              width={1500}
              height={387}
              src={posts.featuredImage.node.link}
              alt="Blog Background"
              className='max-h-[387px] rounded-[8px]'
            />
            <p className="pt-[22px] text-[16px] leading-[24px]">
            {posts.blogfield.description}
            </p>
          </div>
        </div>  </div>
  )
}

export default BlogImage