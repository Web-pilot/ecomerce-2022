import React, { useEffect, useReducer } from "react";
import MainHero from "./components/Hero/MainHero";
import TopSellingItem from "./components/TopSellingItem/TopSellingItem";
import { userReducer, INITIAL_STATE } from "./utils/accountReducer";

const Home = ({ categoryOPen }) => {
  return (
    <main>
      <MainHero categoryOPen={categoryOPen} />
      <TopSellingItem />
    </main>
  );
};

export default Home;
