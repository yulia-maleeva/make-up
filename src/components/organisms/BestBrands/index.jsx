import React, { useEffect } from "react";

import { getProducts } from "../../../api";

import Title from "../../atoms/Title";

const NewArrivals = () => {
  const getData = async () => {
    const data = await getProducts({
      size: 30,
      country: "SG",
      language: "en-SG",
      sort: "sales",
    });

    const updatedData = data.data;

    const test = updatedData.included.filter(
      (item) => item.type === "variants"
    );

    console.log(test);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Title title="New arrivals" />

      <Title title="Bestsellers" />
    </div>
  );
};

export default NewArrivals;
