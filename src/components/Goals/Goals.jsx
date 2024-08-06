import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Goals = () => {
  const goalsData = [
    {
      id: 1,
      mainIcon: <AccessTimeFilledIcon />,
      goalName: "Forms",
      nextIcon: <NavigateNextIcon />,
      bkgcolor: "#613138",
      iconColor: "#994631",
    },
    {
      id: 2,
      mainIcon: <DirectionsCarIcon />,
      goalName: "Popular Dishes",
      nextIcon: <NavigateNextIcon />,
      bkgcolor: "#293268",
      iconColor: "#6f80d4",
    },
    {
      id: 3,
      mainIcon: <EuroSymbolIcon />,
      goalName: "Menus",
      nextIcon: <NavigateNextIcon />,
      bkgcolor: "#214b61",
      iconColor: "#3791be",
    },
  ];

  return (
    <div>
      <Card sx={{ maxWidth: 445, backgroundColor: "#1f2029", color: "white" }}>
        <CardContent>
          {goalsData.map((value, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Box
                    sx={{
                      backgroundColor: value.bkgcolor,
                      width: "60px",
                      height: "60px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50px",
                      color: value.iconColor,
                    }}
                  >
                    {value.mainIcon}
                  </Box>
                  <Typography gutterBottom variant="h6" component="div">
                    {value.goalName}
                  </Typography>
                </Box>
                {value.nextIcon}
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Goals;
