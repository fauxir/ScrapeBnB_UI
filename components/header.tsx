import SwapTextCard from "@/components/ui/cards/swap-text-card";

export const Header = () => (
  <div className="w-full flex justify-center align-middle mb-4">
    <div className="flex justify-center align-middle w-full md:w-[80%]">
      <SwapTextCard
        initialText="What if AirBnb had an unofficial free api?"
        finalText="It will probably look like this."
      />
    </div>
  </div>
);
