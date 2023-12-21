import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import ExpensesByMonth from "../charts/ExpensesByMonth";
import RevenueVsExpenses from "../charts/RevenueVsExpenses";
import ProfitsByMonth from "../charts/ProfitsByMonth";
import RevenueByMonths from "../charts/RevenueByMonths";

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1200px)"
  );

  const gridTemplateLargeScreens = `
 "a b "
 "a b "
 "a b "
 "c d "
 "c d "
 "c d "
`;

  const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  `;

  return (
    <Box
      width='100%'
      height='100%'
      display='grid'
      gap='.8rem'
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns:
                "repeat(2, minmax(370px, 1fr))",
              gridTemplateRows:
                "repeat(6, minmax(95px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <RevenueVsExpenses />
      <ExpensesByMonth />
      <RevenueByMonths />
      <ProfitsByMonth />
    </Box>
  );
};

export default Dashboard;
