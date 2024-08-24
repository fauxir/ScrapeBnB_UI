import SwapTextCard from "@/components/ui/cards/swap-text-card";

export const Header = () => (
  <div className="w-full flex justify-center align-middle mb-4">
    <SwapTextCard
      initialText="What if AirBnb had an unofficial free api?"
      finalText="It will probably look like this."
    />
  </div>
);