import { styled } from "@mui/material";
export const SessionStyle = styled("div")(({ theme }) => ({
  ".session-wrapper": {
    display: "flex",
    width: "100%",
    ".conatiner": {
      display: "flex",
      //   gap: "0px 30px",
      //   flexGrow: 2,

      ".box": {
        flex: 1,
        // width: "100px",
        // height: "100px",
        backgroundColor: "red",
        display: "grid",
      },
    },
  },
}));
