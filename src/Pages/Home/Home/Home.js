import React from "react";
import Advertised from "../Advertised/Advertised";
import Categories from "../Categories/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <div className="bg-secondary py-6">
        <div className="max-w-[1440px] mx-auto">
          <HomeBanner></HomeBanner>
          {/* One Extra section */}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Advertised></Advertised>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
