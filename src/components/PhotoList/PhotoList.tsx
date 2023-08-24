import { useContext, useEffect, useState } from "react";
import { Container, Card, CardMedia } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoList.css";
import { fetchRandomText } from "../../services/textService";

export default function PhotoList() {
  const { photos, setPhotoSelected } = useContext(
    PhotoContext
  ) as PhotoContextType;
  const [text, setText] = useState<string | undefined>("");
  useEffect(() => {
    const fetchData = async () => {
      const randomText = await fetchRandomText();
      setText(randomText);
    };
    fetchData();
  }, []);
  return (
    <Container>
      {photos.map((photo, index) => (
        <Card
          key={index}
          onClick={() => {
            setPhotoSelected(photo);
          }}
          className="listPhotoCard"
        >
          <div className="listPhotoContainer">
            <CardMedia
              className="listPhotoImage"
              component="img"
              alt={photo.description}
              image={photo.imageSmall}
              title={photo.name}
            />
          </div>
          <div className="listPhotoTextContainer">
            <div className="listPhotoTextLine">
              <span className="listPhotoTextPrimary">Author:</span>{" "}
              <span>
                {`${photo.name.replace(/\b\w/g, (char) => char.toUpperCase())}`}
              </span>
            </div>
            <div className="listPhotoTextLine">
              <span className="listPhotoTextPrimary">Description:</span>{" "}
              <span>{`${photo.description}`}</span>
            </div>
            <div className="listPhotoTextLine">
              <span className="listPhotoTextPrimary">Overview:</span>{" "}
              <span>{text}</span>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}
