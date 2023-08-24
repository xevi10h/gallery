import { createContext } from "react";

export type Photo = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageSmall: string;
};

export type PhotoContextType = {
  photos: Photo[]; // Tipo de tus fotos. Puede ser un objeto, string, etc.
  setPhotos: (photos: Photo[]) => void;
  photoSelected: Photo | null;
  setPhotoSelected: (photo: Photo | null) => void;
  viewType: "grid" | "carousel" | "list" | "card";
  setViewType: (viewType: "grid" | "carousel" | "list" | "card") => void;
  selectedCountry: string | undefined;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const PhotoContext = createContext<PhotoContextType | undefined>(
  undefined
);
