import SwapText from "@/components/ui/text-animation/swap-text"
import Link from "next/link";

interface FlipTextCardProps {
  initialText: string;
  finalText: string;
}

export default function SwapTextCard({ initialText, finalText }: FlipTextCardProps) {
  return (
    <div className="group flex min-h-48 w-full flex-col justify-between rounded-3xl p-6 md:w-[80%] bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg">
      <h5 className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">Powered by <Link href="https://www.npmjs.com/package/scrapebnb" target="_blank" rel="noopener noreferrer"><span className="text-orange-500">ScrapeBnB</span></Link></h5>
      <div className="flex flex-col justify-between md:min-w-72">
        <div className="md:hidden">
          <div className="text-lg font-semibold text-gray-500">{initialText}</div>
          <div className="text-sm font-medium text-gray-500">{finalText}</div>
        </div>
        <SwapText
          initialText={initialText}
          finalText={finalText}
          disableClick
          // Set min height so that all the text content fits
          // use -mb-7 to hide the extra space when not active
          className="-mb-7 hidden min-h-20 w-3/4 transition-all duration-200 group-hover:mb-0 md:flex md:flex-col"
          initialTextClassName="text-lg group-hover:opacity-0 h-full duration-200 font-semibold text-gray-500"
          finalTextClassName="text-sm h-full duration-200 font-medium text-gray-500"
        />
      </div>
    </div>
  );
}
