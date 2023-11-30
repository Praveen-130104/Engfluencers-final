import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { getRecentPosts } from "../graphServices";

const PostWidget = () => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getRecentPosts();
        //give the code to store the fetchedPosts to relatedPosts state variable
        setRelatedPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

   

  return (
    <div className=" bg-white mt-6 border border-r-2 border-b-2 border-black rounded-lg shadow-lg p-8 mb-8" style={{ fontFamily: "Archivo Narrow" }}>
      <h2 className="text-xl font-semibold mb-8  pb-2 ">
        <span className="border-blue-800 pb-1 border-b-2 tracking-widest font-extrabold " >Recent Posts</span>
      </h2>
      {relatedPosts.map((post) => (
        <div className="flex  mx-auto space-y-2 text-center md:w-5/6 items-center mb-4 border-0 pb-2 border-b-2 border-orange-100"
        key={post.title}
        >
          <div className="w-1/3 ">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height={"60px"}
              width={"60px"}
              className="object-cover align-middle rounded-full"
            />
          </div>

          <div className="flex-grow ">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <p className="text-md">{post.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
