import SwapTextCard from "@/components/ui/cards/swap-text-card";

export const Header = () => (
  <div className="w-full flex justify-center align-middle mb-4">
    <div className="flex justify-center align-middle w-full md:w-[80%] opacity-90">
      <SwapTextCard
        initialText="What if AirBnb had an unofficial free api?"
        finalText="ScrapeBnB is an open-source NPM package that collects AirBnB property data. On this site, you can trial the package and for the full data set review, you can use the API."
      />
    </div>
  </div>
);
