import React, { useContext } from "react";
import { Grid, Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoCard.css";

const PhotoCard: React.FC = () => {
  const { photos } = useContext(PhotoContext) as PhotoContextType;
  return (
    <Container>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="cardContainer">
              <img
                className="mediaContainer"
                src={photo.image}
                alt={photo.description}
                style={{ justifySelf: "center" }}
              />
              <div>{`Author: ${photo.name.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}`}</div>
              <div>{`Description: ${photo.description}`}</div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PhotoCard;
