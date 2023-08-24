import { useContext } from "react";
import { Grid, Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoCard.css";

export default function PhotoCard() {
  const { photos, setPhotoSelected } = useContext(
    PhotoContext
  ) as PhotoContextType;
  return (
    <Container>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid
            onClick={() => {
              setPhotoSelected(photo);
            }}
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Card className="cardPhotoCard">
              <div className="cardPhotoContainer">
                <CardMedia
                  className="cardPhotoImage"
                  component="img"
                  alt={photo.description}
                  image={photo.imageSmall}
                  title={photo.name}
                />
              </div>
              <div>
                <div className="cardPhotoTextLine">
                  <span className="cardPhotoTextPrimary">Author:</span>{" "}
                  <span>
                    {`${photo.name.replace(/\b\w/g, (char) =>
                      char.toUpperCase()
                    )}`}
                  </span>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
