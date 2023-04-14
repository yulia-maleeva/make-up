import React from "react";

import Layout from "../Layout";

import Slider from "../../organisms/Slider";
import Services from "../../organisms/Services";
import Bestsellers from "../../organisms/Bestsellers";
import NewArrivals from "../../organisms/NewArrivals";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <NewArrivals />
      <Bestsellers />
      <Services />
    </Layout>
  );
};
export default Home;
