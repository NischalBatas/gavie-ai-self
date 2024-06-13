import React from "react";

import Introduction from "./Content/Introduction";
import BlogImage from "./Content/BlogImage";

import './Content/blog_detail.css'
import Head from "next/head";
import Footer from "../../Footer/Footer";
import Join from "../../Join/Join";
export async function getSinglePost(slug) {
  const query = `
  query GetBlogBySlug {
    gavieblogBy(slug: "${slug}") {
      content(format: RENDERED)
      slug
      title
      date
      blogfield{
        blogcategory
        description
        readTime
        uploadedDat     
      }
      featuredImage {
        node {
          altText
          link
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
    next:{revalidate:50}
  });

  const { data } = await res.json();

  return data.gavieblogBy;
}


const BlogDetails = async({props}) => {
  let slugs = props.params.slug;
  const posts = await getSinglePost(slugs);
  console.log("Method", posts,slugs);

  return (
    <div>
            <div className="blog_background"></div>

            {posts ? (
        <>
        <Introduction posts={posts}/>
        <BlogImage  posts={posts}/>
        {/* <div className="bg-white navbar-main"> */}
        <div className="main_container2 inside_sidespace wordpress-container py-10" dangerouslySetInnerHTML={{__html:posts.content}}></div>
        {/* </div> */}
        {/* <div className="w-full h-[1px] bg-[#e6e6e6]"></div> */}
        <Join/>
            <Footer/>
        </>) : 'No data'}
    </div>
  );
};

export default BlogDetails;


