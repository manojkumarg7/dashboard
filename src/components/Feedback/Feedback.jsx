import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { StarBorder } from "@mui/icons-material";
const Feedback = () => {
  const customerData = [
    {
      id: 1,
      name: "John",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/012/535/040/non_2x/casual-business-man-working-on-desktop-computer-in-modern-open-plan-startup-office-interior-selective-focus-free-photo.jpg",
      stars: "4",
      feedback:
        " unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      name: "Robert",
      avatar:
        "https://images.unsplash.com/photo-1573496547376-81418527a728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
      stars: "5",
      feedback:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    },
    {
      id: 3,
      name: "willamson",
      avatar:
        "https://images.unsplash.com/photo-1573496774379-b930dba17d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
      stars: "4",
      feedback:
        "a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed t",
    },
  ];
  return (
    <Card sx={{ maxWidth: 445, backgroundColor: "#1f2029", color: "white" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Customer Feedback
        </Typography>

        {customerData.map((feedData, i) => {
          return (
            <Box key={feedData.id}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Avatar alt="Cindy Baker" src={feedData.avatar} />
                <Typography>Manojkumar G</Typography>
              </Box>
              <Box sx={{ color: "yellow" }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorder />
              </Box>
              <Typography variant="body2" color="gray">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <hr style={{ marginBlock: "10px" }} />
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Feedback;
