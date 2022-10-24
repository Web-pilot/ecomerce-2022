import "./Carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Carousel = () => {
  const products = useSelector((state) => state.products);

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
          {products.products.slice(0, 5).map((item) => (
            <Link to={`/${item.title}/${item._id}`} key={item._id}>
              <img src={item.img} alt="" className="slide" />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
