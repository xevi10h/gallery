import React, { useContext } from "react";
import { Grid, Button, Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";

const PhotoGrid: React.FC = () => {
  const { photos } = useContext(PhotoContext) as PhotoContextType;
  return (
    <Container>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={photo.description}
                height="140"
                image={photo.image}
                title={photo.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PhotoGrid;
