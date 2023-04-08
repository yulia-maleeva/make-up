import React from "react";
import PropTypes from "prop-types";

import { Alert, AlertTitle } from "@mui/material";
import styled from "styled-components";

const Error = ({ title, description }) => (
  <ErrorContainer>
    <ErrorMessage variant="outlined" severity="error">
      <ErrorTitle>{title}</ErrorTitle>
      {description}
    </ErrorMessage>
  </ErrorContainer>
);

Error.defaultProps = {
  title: "Sorry!",
  description: "Something went wrong!",
};

Error.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;

const ErrorContainer = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ErrorTitle = styled(AlertTitle)`
  text-transform: uppercase;
`;

const ErrorMessage = styled(Alert)`
  width: 100%;
`;
