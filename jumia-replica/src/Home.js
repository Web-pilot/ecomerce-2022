import MainHero from "./components/Hero/MainHero";
import TopSellingItem from "./components/TopSellingItem/TopSellingItem";
import AdsBar from "./components/AdsBar/AdsBar";
import SubTopBar from "./components/SubTopBar/SubTopBar";
import AppBar from "./components/AppBar/AppBar";
import { useSelector } from "react-redux";

const Home = ({ categoryOPen }) => {
  return (
    <>
      <AdsBar />
      <SubTopBar />
      <AppBar />
      <main>
        <MainHero categoryOPen={categoryOPen} />
        <TopSellingItem />
      </main>
    </>
  );
};

export default Home;
