import { styled } from "@mui/material";
export const SessionStyle = styled("div")(({ theme }) => ({
  ".session-wrapper": {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    // paddingTop: "10px",
  },

  ".session-container": {
    width: "150px",
    height: "150px",
    backgroundColor: "#1f2029",
    borderRadius: "10px",
    display: "grid",
    justifyContent: "space-between",
    padding: "10px",

    p: {
      fontSize: "10px",
      fontWeight: "600",
    },
  },

  ".session-footer": {
    display: "flex",
    gap: "0px 30px",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    ".session-container": {
      width: "130px",
      height: "130px",
      backgroundColor: "#1f2029",
      borderRadius: "10px",
    },
  },

  "@media (max-width: 370px)": {
    ".session-container": {
      width: "110px",
      height: "120px",
      backgroundColor: "#1f2029",
      borderRadius: "10px",
    },
  },
}));
