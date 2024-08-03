import { styled } from "@mui/material";
export const DashboardStyle = styled("div")(({ theme }) => ({
  " .dashboard-wrapper": {
    display: "flex",
    flexDirection: "column",

    ".content-sections": {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#141316",
      color: "white",
    },
  },
  ".sub-section": {
    width: "100%",
    height: "20vh",
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "30px",
    paddingInline: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    ".sub-section": {
      paddingTop: "30px",
      paddingLeft: "15px",
      // paddingInline: "5px 10px",
    },
  },
}));
