import React from "react";
import Navbar from "../../components/Header/Navbar";
import SideNavbar from "../../components/Header/SideNavbar";
import { Box } from "@mui/material";
import { DashboardStyle } from "./DashboardStyle";
import SessionsComp from "../../components/Sessions/SessionsComp";
const DashboardPage = () => {
  return (
    <DashboardStyle>
      <Box className="dashboard-wrapper">
        <Navbar />
        <Box className="content-sections">
          <SideNavbar />
          <Box className="sub-section">{/* <SessionsComp /> */}</Box>
        </Box>
      </Box>{" "}
    </DashboardStyle>
  );
};

export default DashboardPage;
