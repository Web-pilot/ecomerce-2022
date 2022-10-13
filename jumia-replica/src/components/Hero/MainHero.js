import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import "./MainHero.css";
import Right from "../../Right.js/Right";

const MainHero = ({categoryOpen}) => {
  return (
    <section className="container main_hero_container">
        <Categories />
        <Carousel />
        <Right />
       
    </section>
  )
}

export default MainHero