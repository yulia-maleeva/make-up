import React from "react";
import PropTypes from "prop-types";

import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "styled-components";

const Accordion = ({ title, description, defaultExpanded }) => (
  <MuiAccordion defaultExpanded={defaultExpanded}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <AccordionTitle>{title}</AccordionTitle>
    </AccordionSummary>
    <AccordionDetails>
      <AccordionDescription dangerouslySetInnerHTML={{ __html: description }} />
    </AccordionDetails>
  </MuiAccordion>
);

Accordion.defaultProps = {
  defaultExpanded: false,
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool,
};

export default Accordion;

const AccordionTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;

const AccordionDescription = styled.div`
  line-height: 36px;
`;
