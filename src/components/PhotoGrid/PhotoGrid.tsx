import { useContext } from "react";
import { Grid, Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoGrid.css";

export default function PhotoGrid() {
  const { photos, setPhotoSelected } = useContext(
    PhotoContext
  ) as PhotoContextType;
  return (
    <Container>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <div
                className="gridPhotoContainer"
                onClick={() => {
                  setPhotoSelected(photo);
                }}
              >
                <CardMedia
                  onClick={() => setPhotoSelected(photo)}
                  className="gridPhotoImage"
                  component="img"
                  alt={photo.description}
                  image={photo.imageSmall}
                  title={photo.name}
                />
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
