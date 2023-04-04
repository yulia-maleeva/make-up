import React from "react";

import Layout from "../Layout";

import Swiper from "../../organisms/Swiper";
import Services from "../../organisms/Services";
import Bestsellers from "../../organisms/Bestsellers";
import NewArrivals from "../../organisms/NewArrivals";

const Home = () => {
  return (
    <Layout>
      <Swiper />
      <NewArrivals />
      <Bestsellers />
      <Services />
    </Layout>
  );
};
export default Home;
