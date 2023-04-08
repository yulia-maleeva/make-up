import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import ProductCard from "../../molecules/ProductCard";

const CardsContainer = ({ data }) => {
  return (
    <>
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid item xl={2.4} lg={3} md={3} sm={6} xs={12} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.attributes.name}
              image={product.attributes["default-image-urls"][0]}
              price={product.attributes.price}
              showenPrice={product.attributes.price / 100}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

CardsContainer.propTypes = {
  data: PropTypes.array,
};

export default CardsContainer;
