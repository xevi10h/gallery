import { render, screen } from "@testing-library/react";
import UniquePhotoCard from "./UniquePhotoCard";
import { PhotoContext } from "../../contexts/PhotoContext";
import { expect, jest } from "@jest/globals";

describe("Unique Photo Card Tests", () => {
  const mockPhotoSelected = {
    id: "123456",
    imageSmall:
      "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    description: "Aerial Photography Of City",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg",
    name: "Aleksandar Pasaric",
  };
  it("Testing render", async () => {
    render(
      <PhotoContext.Provider
        value={{
          photoSelected: mockPhotoSelected,
          setPhotoSelected: jest.fn(),
          photos: [
            mockPhotoSelected,
            { ...mockPhotoSelected, description: "Description not to be" },
          ],
          setPhotos: jest.fn(),
          viewType: "grid",
          setViewType: jest.fn(),
          selectedCountry: "Spain",
          setSelectedCountry: jest.fn(),
        }}
      >
        <UniquePhotoCard />
      </PhotoContext.Provider>
    );

    const image = await screen.findByAltText("Aerial Photography Of City");
    expect(image).toBeInTheDocument();

    const imageNotToBe = screen.queryByAltText("Description not to be");
    expect(imageNotToBe).not.toBeInTheDocument();

    const authorLabel = await screen.findByText("Author:");
    expect(authorLabel).toBeInTheDocument();

    const authorName = await screen.findByText("Aleksandar Pasaric");
    expect(authorName).toBeInTheDocument();

    const descriptionLabel = await screen.findByText("Description:");
    expect(descriptionLabel).toBeInTheDocument();

    const descriptionText = await screen.findByText(
      "Aerial Photography Of City"
    );
    expect(descriptionText).toBeInTheDocument();

    const overviewLabel = await screen.findByText("Overview:");
    expect(overviewLabel).toBeInTheDocument();
  });
});
