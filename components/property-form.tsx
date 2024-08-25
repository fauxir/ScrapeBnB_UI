import React, { FormEvent, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { cn } from "@/utils/cn";

interface PropertyFormProps {
  onSubmit: (propertyLink: string) => Promise<void>;
  onResetPropertyData: () => void; 
  status: "loading" | "Submit" | "Submitted";
}

export const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onResetPropertyData, status }) => {
  const [propertyLink, setPropertyLink] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const isEnabled = status === "Submit";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Regex to match the Airbnb URL pattern
    const urlPattern = /^https:\/\/www\.airbnb\.co\.uk\/rooms\/\d+$/;

    // Check if the link is empty or does not match the required pattern
    if (!propertyLink || !urlPattern.test(propertyLink)) {
      setError("Please enter a valid Airbnb link.");
      onResetPropertyData();
      setPropertyLink("")
      return;
    }

    setError(null);
    
    if (!isEnabled) return;
    
    await onSubmit(propertyLink);
    setPropertyLink("");
  };

  // Fade out error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="w-full lg:w-1/2 lg:max-w-xl">
      <div className="group flex h-fit w-full flex-col justify-between rounded-3xl p-4 md:p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg opacity-90">
        <form className="gap-4 h-36 md:h-28 -z-10 flex flex-col justify-between" onSubmit={handleSubmit}>
          <input
            type="text"
            name="airbnb_links"
            id="airbnb_links"
            placeholder="https://www.airbnb.co.uk/rooms/<property number>"
            value={propertyLink}
            onChange={(e) => setPropertyLink(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            type="submit"
            disabled={!isEnabled}
            className="group -z-10 relative h-10 w-full md:max-w-40 overflow-hidden rounded-md bg-orange-500 px-6 text-sm font-semibold text-black transition-colors duration-300 hover:bg-orange-700"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={status}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.075 }}
                className={cn("flex items-center justify-center gap-1")}
              >
                {status === "Submitted" && (
                  <motion.span
                    className="h-fit w-fit"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.075, type: "spring" }}
                  >
                    <CheckCircle2 className="h-4 w-4 fill-white stroke-[#a7adb2] group-hover:stroke-[#a7adb2]" />
                  </motion.span>
                )}
                {status === "loading" ? (
                  <CircleDashed className="h-4 w-4 animate-spin" />
                ) : (
                  status
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </form>
        <AnimatePresence>
          {error && (
            <motion.div
              className="fixed w-fit z-80 bottom-[67px] md:right-6 md:bottom-6  bg-red-500 text-black py-2 px-1 rounded-md shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
