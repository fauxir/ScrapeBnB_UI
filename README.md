# 🏠 ScrapeBnB UI

ScrapeBnB UI is a Next.js-based web interface for the [ScrapeBnB](https://www.npmjs.com/package/scrapebnb) NPM package. This project provides a user-friendly way to interact with and test the ScrapeBnB package, which scrapes AirBnB property data.

## ✨ Features

- 🧪 Trial the ScrapeBnB package directly from the web interface
- 🔬 Test the full data set using the provided API
- 🏆 Perfect Lighthouse score for optimal performance and accessibility

## 🖼️ Screenshot

Here's a preview of the ScrapeBnB desktop UI:

![ScrapeBnB UI Screenshot](/public/readme/main-ui.png)

Here's a preview of the ScrapeBnB mobile UI:

![ScrapeBnB Mobile UI Screenshot](/public/readme/mobile-ui.png)

Here's a preview of the ScrapeBnB UI in action:

![ScrapeBnB Property Details Screenshot](/public/readme/property-details-ui.png)

Here's a preview of the Lighthouse score:

![Lighthouse Screenshot](/public/readme/lighthouse.png)

## 🌐 Live Demo

Visit the live website: [https://scrapebnb.michaeladrian.co.uk/](https://scrapebnb.michaeladrian.co.uk/)

## 🚀 API Usage

To integrate the ScrapeBnB API with your application, send a POST request to:

```
https://scrapebnb.michaeladrian.co.uk/api/scrapebnb
```

with the following body:

```json
{
  "url": "https://www.airbnb.co.uk/rooms/<property number>"
}
```

## 🛠️ Technology Stack

This project is built using:

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide React](https://lucide.dev/) - Icon set for React

## 💻 Development

To set up the project for development:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## 🏗️ Building and Deployment

To build the project:

```
npm run build
```

To start the production server:

```
npm start
```

## 🏠 Hosting

This project is hosted on a home server using a custom infrastructure setup:

- 🐳 Docker for containerization
- ☁️ Cloudflare for DNS management, CDN and proxy.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or concerns, please open an issue on the GitHub repository.
