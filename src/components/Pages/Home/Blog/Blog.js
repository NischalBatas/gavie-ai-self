import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Loading from "./Loading";
import "./blog.css";
import Image from "next/image";
import { format } from "date-fns";

async function getPosts() {
  const query = `query GetAllBlogPost {
    gavieblogs {
      nodes {
        slug
        title
        date
        featuredImage {
          node {
            altText
            link
          }
        }
        blogfield {
          blogcategory
          description
          readTime
          uploadedDat
        }
      }
    }
  }`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next:{revalidate: 50}
  });

  const { data } = await res.json();

  return data.gavieblogs.nodes;
}

const Blog = async () => {
  const posts = await getPosts();
  console.log("Blog Components - Post details", posts);
  return (
    <>
      {posts ? (
        <div className="third_background">
          <div className="h-[380px] pt-12 pb-12 text-center  flex flex-col justify-center items-center">
            <p className="text-[32px] md:text-[48px] font-bold">Blogs</p>
            <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
              We're prepared for the era of Generative AI and excited to
              collaborate. Let's evaluate your business and infrastructure to
              ensure you're ready for this significant technological
              advancement.
            </p>
          </div>

          <div className="">
            <div className="main_container grid sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
              {posts.map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={`/blog/${item.slug}`} className="">
                    <div className="tips_main_items p-[16px] md:p-[24px]">
        <div>
          <Image className="cursor-pointer transition ease-in-out hover:scale-110"
            width={490}
            height={490}
            src={item.featuredImage.node.link}
            alt="tips items"
          />
        </div>
        <div className="flex flex-col gap-2 md:max-w-[343.67px]">
          <div className="mt-8 mb-4 ">
            <span className="border text-[14px] rounded-[24px] px-5 py-2">
            { format(new Date(item.blogfield.uploadedDat), 'MMMM d, yyyy')}
       
            </span>
          </div>

          <div className="max-w-[343.67px] blogs_product_title">
            <span className="text-[24px] font-semibold">
            {item.title}
            </span>
          </div>
          <div className="">
            <p className="text-[#FFFFFFBF] text-[16px] blogs_product_description">
            {item.blogfield.description}
            </p>
          </div>
        </div>
      </div>
      
            
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Blog;


