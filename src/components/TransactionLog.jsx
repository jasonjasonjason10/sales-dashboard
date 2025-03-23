import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockTransactions } from "../assets/mockData";
import { Box, Typography } from "@mui/material";

const columns = [
  { field: "txId", headerName: "Transaction ID", width: 200 },
  { field: "user", headerName: "User", width: 180 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "cost", headerName: "Cost ($)", width: 130 },
];

function TransactionLog() {
  const rows = mockTransactions.map((item, index) => ({ id: index, ...item }));

  return (
    <Box mt={4} className="transaction-log">
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <div className="data-grid-container">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
        />
      </div>
    </Box>
  );
}

export default TransactionLog;
