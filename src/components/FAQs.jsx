import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs() {
  return (
    <Box className="faq-section">
      <Typography variant="h6" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How is cost calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Cost reflects the total amount spent by the user in a single transaction.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What does the date represent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The date represents when the transaction occurred.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQs;
