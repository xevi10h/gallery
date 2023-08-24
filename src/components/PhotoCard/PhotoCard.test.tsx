import { render } from "@testing-library/react";
import PhotoCard from "./PhotoCard";
import { PhotoContext } from "../../contexts/PhotoContext";
import { expect, jest } from "@jest/globals";

describe("Photo Card Tests", () => {
  const mockPhotoSelected = {
    id: "123456",
    imageSmall:
      "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    description: "Aerial Photography Of City",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg",
    name: "Aleksandar Pasaric",
  };
  it("Testing render", async () => {
    const { findByAltText, findByText } = render(
      <PhotoContext.Provider
        value={{
          photoSelected: null,
          setPhotoSelected: jest.fn(),
          photos: [mockPhotoSelected],
          setPhotos: jest.fn(),
          viewType: "grid",
          setViewType: jest.fn(),
          selectedCountry: "Spain",
          setSelectedCountry: jest.fn(),
        }}
      >
        <PhotoCard />
      </PhotoContext.Provider>
    );

    const image = await findByAltText("Aerial Photography Of City");
    expect(image).toBeInTheDocument();

    const authorLabel = await findByText("Author:");
    expect(authorLabel).toBeInTheDocument();

    const authorName = await findByText("Aleksandar Pasaric");
    expect(authorName).toBeInTheDocument();
  });
});