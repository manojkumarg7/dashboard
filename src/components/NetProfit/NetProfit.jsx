import React from "react";
import { NetProfitStyle } from "./NetProfitStyle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const NetProfit = () => {
  return (
    <NetProfitStyle>
      <React.Fragment className="net-wrapper">
        <div className="netprofit-container">
          <div className="net-container">
            <p>Net Profit</p>
            <h1>$6759.25</h1>
            <p className="net-percent">
              <ArrowDropUpIcon /> 3%
            </p>
          </div>
        </div>
      </React.Fragment>
    </NetProfitStyle>
  );
};

export default NetProfit;
