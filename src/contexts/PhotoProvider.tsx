import React, { useState } from "react";
import { Photo, PhotoContext, PhotoContextType } from "./PhotoContext";

interface PhotoProviderProps {
  children: React.ReactNode;
}

export default function PhotoProvider({ children }: PhotoProviderProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photoSelected, setPhotoSelected] = useState<Photo | null>(null);
  const [viewType, setViewType] = useState<
    "grid" | "carousel" | "list" | "card"
  >("grid");
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );

  const contextValue: PhotoContextType = {
    photos,
    setPhotos,
    photoSelected,
    setPhotoSelected,
    viewType,
    setViewType,
    selectedCountry,
    setSelectedCountry,
  };

  return (
    <PhotoContext.Provider value={contextValue}>
      {children}
    </PhotoContext.Provider>
  );
}
