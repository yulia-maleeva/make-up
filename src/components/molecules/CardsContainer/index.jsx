import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import ProductCard from "../../molecules/ProductCard";

const CardsContainer = ({ data }) => {
  return (
    <>
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.attributes.name}
              image={product.attributes["default-image-urls"][0]}
              price={product.attributes.price}
              shownPrice={product.attributes.price / 100}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

CardsContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        "default-image-urls": PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        shownPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }).isRequired,
    })
  ).isRequired,
};

export default CardsContainer;
