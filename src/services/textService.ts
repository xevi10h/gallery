export async function fetchRandomText(): Promise<string> {
  try {
    const response = await fetch(
      "https://api.generadordni.es/v2/text/paragraphs?results=2&sentences=1&language=es"
    );
    const data: string[] = await response.json();
    return data.join(" ");
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    return "";
  }
}
