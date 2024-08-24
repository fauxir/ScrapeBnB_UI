export const ApiInstructions = () => (
  <div className="w-full flex justify-center align-middle mt-4">
    <div className="flex justify-center align-middle w-full md:w-[80%]">
      <div className="group flex h-fit w-full flex-col justify-between rounded-3xl p-4 md:p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 shadow-lg opacity-90">
        <p className="text-gray-500 text-sm md:text-base">
          Want to integrate this API with your app? Simply send a POST request
          to{" "}
          <a
            href="https://scrapebnb.michaeladrian.co.uk/api/scrapebnb"
            className="underline"
          >
            https://scrapebnb.michaeladrian.co.uk/api/scrapebnb
          </a>{" "}
          with the following body:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mt-2 overflow-x-auto">
          <code>
            {`{
  "url": "https://www.airbnb.co.uk/rooms/<property number>"
}`}
          </code>
        </pre>
      </div>
    </div>
  </div>
);
