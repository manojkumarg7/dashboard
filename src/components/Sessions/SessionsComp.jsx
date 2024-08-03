import React from "react";
import { SessionStyle } from "./SessionStyle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const SessionsComp = () => {
  const sessionData = [
    {
      title: "Total Orders",
      img: "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <BusinessCenterIcon />,
      value: "75",
      percentage: "3%",
    },
    {
      title: "Total Deliveryies",
      img: "",
      icon: <BusinessCenterIcon />,
      value: "70",
      percentage: "3%",
    },
    {
      title: "Total Cancelled",
      img: "",
      icon: <BusinessCenterIcon />,
      value: "05",
      percentage: "3%",
    },
    {
      title: "Total Revenues",
      img: "",
      icon: <ShoppingBagIcon />,
      value: "$12k",
      percentage: "3%",
    },
  ];
  return (
    <SessionStyle>
      {/* <h2>Dashboard</h2> */}
      <div className="session-wrapper">
        {sessionData.map((sessionValue, index) => {
          return (
            <div className="session-container" key={index}>
              <div>{sessionValue.icon}</div>
              <p>{sessionValue.title}</p>
              <div className="session-footer">
                <h1>{sessionValue.value}</h1>
                <h5 sx={{ paddingLeft: "30px" }}>
                  {sessionValue.percentage}
                  {/* <ArrowDropDownIcon /> */}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </SessionStyle>
  );
};

export default SessionsComp;
