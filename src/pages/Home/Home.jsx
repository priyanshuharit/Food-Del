import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCatgory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCatgory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
