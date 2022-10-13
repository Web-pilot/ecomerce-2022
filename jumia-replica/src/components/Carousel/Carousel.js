import "./Carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import Slider from "react-slick";

const Carousel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXvP0PLQ-HldDYiy_QedCrkaqwaFmniDeg&usqp=CAU",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXvP0PLQ-HldDYiy_QedCrkaqwaFmniDeg&usqp=CAU",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXvP0PLQ-HldDYiy_QedCrkaqwaFmniDeg&usqp=CAU",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    autoplaySpeed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSlide = () => {};
  return (
    <div className="carousel_container">
      <span
        className="slide_btn left_slide_btn"
        onClick={() => handleSlide("left")}
      >
        <AiOutlineArrowLeft />
      </span>
      <span
        className="slide_btn right_slide_btn"
        onClick={() => handleSlide("right")}
      >
        <AiOutlineArrowRight />
      </span>
      <div className="slide">
      <Slider {...settings}>
        {data.map((item) => (
          <a href="@" key={item.id}>
            <img src={item.img} alt="" key={item.id} className="slide" />
          </a>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;
