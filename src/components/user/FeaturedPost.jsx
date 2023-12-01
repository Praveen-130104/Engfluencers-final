import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import "../../App.css"


import { FeaturedPostCard } from '../blogComps/index';
import { getFeaturedPosts } from '../graphServices/index';


const FeaturedPosts = () => {


  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const isMedium = useMediaQuery({ minWidth: "768px", maxWidth: "900px" });
  const isSmall = useMediaQuery({ maxWidth: "767px" });
  const isLarge = useMediaQuery({ maxWidth : "1023px"});
  const isXLarge = useMediaQuery({ minWidth: "1024px" });

  let slidesToslide;
  if (isSmall) {
    slidesToslide = 1;
  }
  else if (isMedium) {
    slidesToslide = 2;
  }
  else if (isLarge) {
    slidesToslide = 3;
  }
  else if (isXLarge) {
    slidesToslide = 4;
  }
  else {
    slidesToslide = 4;
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToslide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    // arrows: true,
    
  };


  return (
    <div className="">
    {dataLoaded && (
      <Slider {...settings} itemClass="px-4">
        {featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Slider>
    )}
  </div>
  );
};

export default FeaturedPosts;