import { useContext, useEffect, useState } from "react";
import { Card, CardMedia, IconButton } from "@mui/material";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./UniquePhotoCard.css";
import { ArrowBack } from "@mui/icons-material";
import { fetchRandomText } from "../../services/textService";

export default function UniquePhotoCard() {
  const { photoSelected, setPhotoSelected } = useContext(
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
    photoSelected && (
      <Card className="uniqueCardPhotoCard">
        <div className="uniqueCardPhotoContainer">
          <CardMedia
            component="img"
            className="uniqueCardPhotoImage"
            alt={photoSelected.description}
            image={`${photoSelected.image}`}
            title={photoSelected.name}
          />
          <IconButton
            onClick={() => setPhotoSelected(null)}
            className="returnButton"
          >
            <ArrowBack />
          </IconButton>
        </div>
        <div className="uniqueCardPhotoTextContainer">
          <div className="uniqueCardPhotoTextLine">
            <span className="uniqueCardPhotoTextPrimary">Author:</span>{" "}
            <span>
              {`${photoSelected.name.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}`}
            </span>
          </div>
          <div className="uniqueCardPhotoTextLine">
            <span className="uniqueCardPhotoTextPrimary">Description:</span>{" "}
            <span>{`${photoSelected.description}`}</span>
          </div>
          <div className="listPhotoTextLine">
            <span className="listPhotoTextPrimary">Overview:</span>{" "}
            <span>{text}</span>
          </div>
        </div>
      </Card>
    )
  );
}
