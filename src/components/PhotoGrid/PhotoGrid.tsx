import React, { useContext } from "react";
import { Grid, Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoGrid.css";

const PhotoGrid: React.FC = () => {
  const { photos } = useContext(PhotoContext) as PhotoContextType;
  return (
    <Container>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <div className="aspectRatioBox">
                <CardMedia
                  className="mediaInside"
                  component="img"
                  alt={photo.description}
                  image={photo.image}
                  title={photo.name}
                />
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PhotoGrid;
