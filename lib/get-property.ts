"use server";

const airbnbScraper = require("scrapebnb");

export default async function getListingDetails(propertyUrl: string) {
  try {
    const details = await airbnbScraper.getFromRoomUrl(
      propertyUrl,
      "GBP",
      "2024-11-02",
      "2024-11-10"
    );
    console.log("Property details found!");
    return details;
  } catch (error) {
    console.error("Error fetching listing details:", error);
  }
}
