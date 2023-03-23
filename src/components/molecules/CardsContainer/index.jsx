import React from "react";

import { Grid } from "@mui/material";
import ProductCard from "../../molecules/ProductCard";

const CardsContainer = ({ data }) => {
  return (
    <>
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid item xl={2.4} lg={2.4} md={3} sm={6} xs={12}>
            <ProductCard
              key={product.id}
              name={product.attributes.name}
              image={product.attributes["default-image-urls"][0]}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardsContainer;
