import React from "react";
import AllCategoriesList from "./AllCategoriesList";
import Carasual from "./Carasual";
import Footer from "./Footer";
import ShowCards1 from "./ShowCards1";

const Home = () => {
  return (
    <div className="">
      <div>
        <AllCategoriesList />
        <Carasual />
        <ShowCards1 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
