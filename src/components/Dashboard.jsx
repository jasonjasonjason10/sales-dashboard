import React from "react";
import { Box, Typography } from "@mui/material";
import TransactionLog from "./TransactionLog";
import FAQs from "./FAQs";

function Dashboard() {
  return (
    <Box className="dashboard">
      <Typography variant="h3" className="dashboard-title">
        Sales Dashboard
      </Typography>
      <TransactionLog />
      <Box mt={4}>
        <FAQs />
      </Box>
    </Box>
  );
}

export default Dashboard;