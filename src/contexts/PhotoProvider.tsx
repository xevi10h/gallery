import React, { useState } from "react";
import { PhotoContext, PhotoContextType } from "./PhotoContext";

interface PhotoProviderProps {
  children: React.ReactNode;
}

export const PhotoProvider: React.FC<PhotoProviderProps> = ({ children }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [viewType, setViewType] = useState<
    "grid" | "carousel" | "list" | "card"
  >("grid");
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );

  const contextValue: PhotoContextType = {
    photos,
    setPhotos,
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
};
