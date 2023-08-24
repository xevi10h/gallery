import { createClient, Photo } from "pexels";

const pexelsClient = createClient(process.env.REACT_APP_PEXELS_API_KEY || "");

export const fetchPhotosByCountry = async (country: string) => {
  const response: any = await pexelsClient.photos.search({
    query: country,
    per_page: 20,
    page: 1,
  });

  if (Array.isArray(response.photos)) {
    return response.photos.map((photo: Photo) => ({
      id: photo.id.toString(),
      name: photo.photographer,
      description: photo.alt,
      image: photo.src.original,
      imageSmall: `${photo.src.original}?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400`,
    }));
  }
  return [];
};
