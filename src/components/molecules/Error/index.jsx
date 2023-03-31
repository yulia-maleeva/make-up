import React from "react";

import { Alert, AlertTitle } from "@mui/material";
import styled from "styled-components";

const Error = () => (
  <ErrorContainer>
    <ErrorMessage severity="error">
      <AlertTitle>Error</AlertTitle>
      No avaible data!
    </ErrorMessage>
  </ErrorContainer>
);

export default Error;

const ErrorContainer = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ErrorMessage = styled(Alert)`
  width: 100%;
`;
