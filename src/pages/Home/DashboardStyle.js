import { styled } from "@mui/material";
export const DashboardStyle = styled("div")(({ theme }) => ({
  " .dashboard-wrapper": {
    display: "flex",
    flexDirection: "column",

    ".content-sections": {
      display: "flex",
      flexGrow: 1,
      backgroundColor: "#141316",
      color: "white",

      ".sub-section": {
        paddingTop: "30px",
        // paddingInline: "30px",
      },
    },
  },
}));
