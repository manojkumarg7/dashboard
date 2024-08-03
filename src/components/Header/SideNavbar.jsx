import React from "react";
import OtherHousesSharpIcon from "@mui/icons-material/OtherHousesSharp";
// import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import { SideNavbarStyle } from "./SideNavbarStyle";
import Tooltip from "@mui/material/Tooltip";
// import SideNavbar from "./SideNavbarStyle";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
const SideNavbar = () => {
  const SiderbarData = [
    {
      title: "Dashboard",
      icon: <OtherHousesSharpIcon />,
    },
    {
      title: "Applications",
      icon: <InsertChartOutlinedTwoToneIcon />,
    },
    {
      title: "Task",
      icon: <TaskOutlinedIcon />,
    },
    {
      title: "Charts",
      icon: <DevicesOutlinedIcon />,
    },
    {
      title: "Forms",
      icon: <RateReviewOutlinedIcon />,
    },
  ];
  return (
    <SideNavbarStyle>
      <React.Fragment>
        <div className="sidebar-wrapper">
          <div className="sidebar-above-icons">
            {SiderbarData.map((value, index) => {
              return (
                <div key={index}>
                  <Tooltip title={value.title} placement="right-end">
                    <div className="sidebar-icons">{value.icon}</div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
          <Tooltip title="Logout" placement="right-end">
            <div className="sidebar-icons">
              <LogoutOutlinedIcon />
            </div>
          </Tooltip>
        </div>
      </React.Fragment>
    </SideNavbarStyle>
  );
};

export default SideNavbar;
