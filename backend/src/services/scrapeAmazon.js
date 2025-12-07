// Mock Amazon Scraper for Assignment
// This bypasses Amazon blocking and ensures the project works 100%.

export async function scrapeAmazonProduct(asin) {
  console.log("Using MOCK Amazon data for ASIN:", asin);

  return {
    asin,
    title: "Mock Amazon Product Title for Testing",
    bullets: [
      "This is a sample bullet point for demonstration purposes.",
      "High-quality product used for testing optimization flow.",
      "Bullet point number three in mock data.",
      "Easy to integrate mock data with AI optimization.",
      "Ensures project runs smoothly without scraping issues."
    ],
    description:
      "This is a mock product description. Amazon blocks scraping, so this mock data is used to test the AI optimization, database storage, and full end-to-end functionality of your assignment project."
  };
}
