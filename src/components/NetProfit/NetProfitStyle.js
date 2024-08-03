import { styled } from "@mui/material";
export const NetProfitStyle = styled("div")(({ theme }) => ({
  width: "auto",
  ".netprofit-container": {
    height: "150px",
    width: "450px",
    backgroundColor: "#1f2029",
    // display: "grid",
    // justifyContent: "space-between",

    P: {
      fontSize: "20px",
    },

    h1: {
      fontSize: "3.125rem",
    },
  },

  ".net-percent": {
    color: "green",
    fontSize: "40px",
    fontWeight: "bold",
  },

  ".net-container": {
    padding: "10px",
    display: "grid",
    gap: "10px",
  },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
    ".netprofit-container": {
      height: "150px",
      width: "100%",
    },
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    ".netprofit-container": {
      height: "150px",
      width: "100%",

      P: {
        fontSize: "18px",
      },

      h1: {
        fontSize: "1.625rem",
      },
    },
  },
}));
