import React, { useState } from "react";
import { PhotoContext, PhotoContextType } from "./PhotoContext";

interface PhotoProviderProps {
  children: React.ReactNode;
}

export const PhotoProvider: React.FC<PhotoProviderProps> = ({ children }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [viewType, setViewType] = useState<
    "grid" | "carousel" | "list" | "card"
  >("grid");
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );

  const addPhotos = (newPhotos: any[]) => {
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const contextValue: PhotoContextType = {
    photos,
    setPhotos,
    addPhotos,
    page,
    setPage,
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
