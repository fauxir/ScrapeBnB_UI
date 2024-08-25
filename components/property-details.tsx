import { motion } from "framer-motion";

interface PropertyDetailsProps {
  propertyData: any;
  status: string;
  error: string | null;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyData,
  status,
  error,
}) => (
  <div className="w-full lg:w-1/2 lg:max-w-xl ">
    <div className="group min-h-40 flex w-full flex-col justify-between rounded-3xl p-4 md:p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg opacity-90">
      {propertyData ? (
        <>
          <p className="text-gray-500 font-bold">
            Property name:{" "}
            <span className="font-normal">{propertyData?.title}</span>
          </p>
          <p className="text-gray-500 font-bold">
            Property type:{" "}
            <span className="font-normal">{propertyData?.room_type}</span>
          </p>
          <div className="text-gray-500">
            <p className="font-bold">No of bedrooms and bathrooms:</p>
            <ul className="list-disc list-inside">
              {propertyData?.sub_description?.items
                .filter(
                  (item: string) =>
                    item.toLowerCase().includes("bedroom") ||
                    item.toLowerCase().includes("bathroom")
                )
                .map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="text-gray-500">
            <p className="font-bold">List of amenities:</p>
            <ul className="list-disc list-inside">
              {propertyData?.amenities.map(
                (category: any, categoryIndex: number) => (
                  <li key={categoryIndex}>
                    {category.title}:{" "}
                    {category.values.map(
                      (amenity: any, amenityIndex: number) => (
                        <span key={amenityIndex}>
                          {amenity.title}
                          {amenityIndex < category.values.length - 1
                            ? ", "
                            : ""}
                        </span>
                      )
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      ) : status === "loading" ? (
        <motion.p
          className="text-gray-500 font-bold"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Fetching data...
        </motion.p>
      ) : error === "Property not found :(" ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : (
        <p className="text-gray-500 font-bold">
          Add the AirBnB property link and press submit
        </p>
      )}
    </div>
  </div>
);
