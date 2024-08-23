"use client";
import { FormEvent, useEffect, useState } from "react";
import SwapTextCard from "@/components/ui/cards/swap-text-card";
import getListingDetails from "@/lib/get-property";

export default function Home() {
  const [propertyLink, setPropertyLink] = useState<string>("");
  const [propertyData, setPropertyData] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (isSubmitted && propertyLink) {
        try {
          const result = await getListingDetails(propertyLink);
          setPropertyData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setIsSubmitted(false);
      }
    };
    fetchPropertyData();
  }, [isSubmitted, propertyLink]);

  console.log(propertyData);

  return (
    <main className="flex z-50 h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <div className="z-50 w-screen flex justify-center align-middle">
        <SwapTextCard
          initialText="What if AirBnb had an unofficial free api?"
          finalText="It will probably look like this."
        />
      </div>

      <div className="w-screen flex justify-center align-middle">
        <div className="group flex h-fit w-full flex-col justify-between rounded-3xl p-6 md:w-[80%] bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg">
          <p className="text-gray-500">
            ⚠️ Disclaimer: This project is for educational and personal use
            only. Scraping websites may violate their terms of service. Always
            check and comply with Airbnb&apos;s robots.txt file and terms of
            service before using this scraper.
          </p>
        </div>
      </div>

      <form className="gap-10 z-50" onSubmit={handleSubmit}>
        <input
          type="text"
          name="airbnb_links"
          id="airbnb_links"
          value={propertyLink}
          onChange={(e) => setPropertyLink(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div>
        <p>Received data:</p>
        <p>Property name: {propertyData?.data?.title}</p>
        <p>Property type: {propertyData?.data?.room_type}</p>
        <p>No of bedrooms and bathrooms: {propertyData?.data?.sub_description?.items[2]}</p>
        <p>List of amenities: {propertyData?.data?.amenities[3].values[0].title}</p>
      </div>

      <div className="w-screen flex justify-center align-middle">
        <div className="group flex h-fit w-full flex-col justify-between rounded-3xl p-6 md:w-[80%] bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg">
          <p className="text-gray-500">
            Want to integrate this API with your app? Simply send a POST request
            to{" "}
            <a
              href="https://scrapebnb.michaeladrian.co.uk/api/scrapebnb"
              className="underline"
            >
              https://scrapebnb.michaeladrian.co.uk/api/scrapebnb
            </a>{" "}
            with the following body:
            <br />
            <br />
          </p>
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>
              {`{
  "url": "https://www.airbnb.co.uk/rooms/<property number>"
}`}
            </code>
          </pre>
        </div>
      </div>
    </main>
  );
}
