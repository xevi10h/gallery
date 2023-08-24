type countriesResponse = Array<{
  name: {
    common: string;
  };
}>;

export async function fetchCountries(): Promise<string[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: countriesResponse = await response.json();
    return data.map((country) => country.name.common);
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    return [];
  }
}
