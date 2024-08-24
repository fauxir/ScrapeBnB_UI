"use client";

import React, { useState } from "react";
import getListingDetails from "@/lib/get-property";
import { Header } from "@/components/header";
import { Disclaimer } from "@/components/disclaimer";
import { PropertyForm } from "@/components/property-form";
import { PropertyDetails } from "@/components/property-details";
import { ApiInstructions } from "@/components/api-instructions";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [propertyData, setPropertyData] = useState<any>(null);
  const [status, setStatus] = useState<"loading" | "Submit" | "Submitted">(
    "Submit"
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (propertyLink: string) => {
    setPropertyData(null);
    setError("");
    setStatus("loading");

    await wait(1500);

    try {
      const result = await getListingDetails(propertyLink);
      if (result) {
        setPropertyData(result);
      } else {
        setError("Property not found :(");
      }
      setStatus("Submitted");
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("Submit");
    }

    await wait(1500);
    setStatus("Submit");
  };

  return (
    <main className="flex z-50 min-h-screen flex-col items-center justify-between p-4 md:p-24 overflow-y-auto">
      <Header />
      {!propertyData && <Disclaimer />}
      <div className="w-full flex justify-center align-middle">
        <div className="flex justify-center align-middle w-full md:w-[80%]">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center md:items-start gap-4 lg:gap-10">
            <PropertyForm onSubmit={handleSubmit} status={status} />
            <PropertyDetails
              propertyData={propertyData}
              status={status}
              error={error}
            />
          </div>
        </div>
      </div>
      {!propertyData && <ApiInstructions />}
    </main>
  );
}
