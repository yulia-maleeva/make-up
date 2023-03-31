import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "styled-components";

const ProductAccordion = ({ title, description }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <AccordionTitle>{title}</AccordionTitle>
    </AccordionSummary>
    <AccordionDetails>
      <AccordionDescription dangerouslySetInnerHTML={{ __html: description }} />
    </AccordionDetails>
  </Accordion>
);

export default ProductAccordion;

const AccordionTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;

const AccordionDescription = styled.div`
  line-height: 36px;
`;
