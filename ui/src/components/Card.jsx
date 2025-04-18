import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CustomCard = ({ imgSource, bodyText }) => {
  const cardHeight = imgSource ? undefined : "180px";
  const cardWidth = 345;

  const cardImageHandler = () => {
    if (imgSource) {
      return (
        <CardMedia
          component="img"
          height="140"
          image={imgSource}
          alt="green iguana"
        />
      );
    }
  };
  return (
    <Card sx={{ width: cardWidth, height: cardHeight, marginX: "auto" }}>
      <CardActionArea>
        {cardImageHandler()}
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {bodyText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
