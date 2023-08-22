import { createContext } from "react";

type Photo = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type PhotoContextType = {
  photos: Photo[]; // Tipo de tus fotos. Puede ser un objeto, string, etc.
  setPhotos: (photos: Photo[]) => void;
  addPhotos: (photos: Photo[]) => void;
  page: number;
  setPage: (page: number) => void;
  viewType: "grid" | "carousel" | "list" | "card";
  setViewType: (viewType: "grid" | "carousel" | "list" | "card") => void;
  selectedCountry: string | undefined;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const PhotoContext = createContext<PhotoContextType | undefined>(
  undefined
);
