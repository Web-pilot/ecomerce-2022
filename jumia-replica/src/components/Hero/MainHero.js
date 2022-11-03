import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import "./MainHero.css";
import Right from "../Right/Right";
import { useSelector } from "react-redux";

const MainHero = ({ categoryOpen }) => {
  const searchTerm = useSelector((state) => state.products.searchTerm);

  return (
    <section className={searchTerm ? "" : "container main_hero_container"}>
      {!searchTerm && <Categories />}
      {!searchTerm && <Carousel />}
      {!searchTerm && <Right />}
    </section>
  );
};

export default MainHero;
