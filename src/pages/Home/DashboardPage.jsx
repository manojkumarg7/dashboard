import React from "react";
import Navbar from "../../components/Header/Navbar";
import SideNavbar from "../../components/Header/SideNavbar";
import { Box } from "@mui/material";
import { DashboardStyle } from "./DashboardStyle";
import SessionsComp from "../../components/Sessions/SessionsComp";
import NetProfit from "../../components/NetProfit/NetProfit";
const DashboardPage = () => {
  return (
    <DashboardStyle>
      <React.Fragment>
        <Box className="dashboard-wrapper">
          <Navbar />
          <Box className="content-sections">
            <SideNavbar />
            <Box className="sub-section">
              {/* <div className="left-section"> */}
              <SessionsComp />
              {/* </div> */}
              {/* <div className="right-section"> */}
              <NetProfit />
              {/* </div> */}
            </Box>
          </Box>
        </Box>{" "}
      </React.Fragment>
    </DashboardStyle>
  );
};

export default DashboardPage;
