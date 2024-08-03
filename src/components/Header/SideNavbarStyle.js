import { BorderRight, Height } from "@mui/icons-material";
import { styled } from "@mui/material";
export const SideNavbarStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  ".sidebar-wrapper": {
    width: "60px",
    height: "100vh",
    backgroundColor: "#1f2029",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#F0EAD6",

    ".sidebar-above-icons": {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "40px 0px",
    },
  },
  ".sidebar-icons": {
    "&:hover": {
      borderLeft: "3px solid #7095ff",
      color: "#7095ff",
      cursor: "pointer",
    },
  },
}));
