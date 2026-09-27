# Project & Portfolio

### Amoy Turner

![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-8-purple.svg)
![Status](https://img.shields.io/badge/status-Launched-brightgreen.svg)

# CarFinder

CarFinder is a React web application that allows users to search and explore vehicle inventory by year, make, and model. The goal of the project is to provide a simple and organized way for users to find vehicles and view useful vehicle information without an overly complicated search experience.

CarFinder uses vehicle information from the NHTSA vPIC API and combines it with CarFinder inventory data. The application has completed development, Beta testing, final improvements, SEO implementation, analytics integration, and production deployment.

## Live Website

**CarFinder:** https://carfinder-amoy.netlify.app/

## Features

- Search vehicles by Year, Make, and Model
- Vehicle Make and Model data provided by the NHTSA vPIC API
- View detailed information for individual vehicles
- Add new vehicles to the CarFinder inventory
- Added vehicles persist using browser localStorage
- Add vehicles to Favorites
- Remove vehicles from Favorites
- Dedicated Favorites page
- No results state for searches without matching inventory
- Clear vehicle search filters
- Dashboard navigation and quick actions
- Expandable CarFinder logo
- Navbar account menu
- Responsive application layout
- Vehicle Not Found state for invalid vehicle IDs
- SEO metadata and page titles
- Google Analytics 4 integration

## Tech Stack

- React
- React Router
- Vite
- JavaScript
- HTML
- CSS
- NHTSA vPIC API
- Browser localStorage
- Google Analytics 4
- ESLint
- Git & GitHub
- Netlify

## Project Structure

The main CarFinder application is located inside:

```text
dev/portfolio
```

The application is organized using reusable React components, pages, service files, utility functions, application data, and separate CSS files.

The NHTSA API service handles external vehicle data, while CarFinder maintains its own inventory information such as price, mileage, VIN, description, and available listings.

Supporting project documentation is located inside:

```text
docs/
```

This includes research, wireframes, designs, project documentation, and final handoff materials.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmoyTurner-FS/202603-WDV349-TurnerAmoy.git
```

### 2. Open the Application Directory

```bash
cd 202603-WDV349-TurnerAmoy/dev/portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL. Open the URL provided in the terminal in a browser to use CarFinder.

For additional installation and deployment information, see:

[Installation Instructions](./docs/handoff/INSTALLATION.md)

## Additional Commands

### Run ESLint

```bash
npm run lint
```

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## API

CarFinder uses the NHTSA Vehicle Product Information Catalog (vPIC) API.

The API is used to retrieve real vehicle Make and Model information for the Search Cars filters.

No API key is currently required for the NHTSA integration.

NHTSA provides vehicle information, while CarFinder controls which vehicles are available within its inventory.

## Data Storage

CarFinder does not currently require an external database.

Starter inventory is stored within the application, while vehicles added through the Add Vehicle page and Favorites information are stored using browser localStorage.

Because localStorage is browser specific, locally stored information remains within that browser unless the browser data is cleared.

A future version of CarFinder could replace this setup with backend and database storage if shared or account-based data is required.

## Analytics

CarFinder uses Google Analytics 4 to monitor website traffic and user engagement.

Analytics was implemented and tested before the final production launch.

## SEO

CarFinder includes SEO metadata and page titles designed to help search engines understand the purpose and content of the application.

The project includes optimized metadata for the main CarFinder experience and vehicle search functionality.

## Deployment

CarFinder is deployed through Netlify.

Current production configuration:

```text
Production Branch: dev
Base Directory: dev/portfolio
Build Command: npm run build
Publish Directory: dist
```

The live production application is available at:

https://carfinder-amoy.netlify.app/

## Current Project Status

CarFinder has officially launched.

The final version includes the completed vehicle search experience, Vehicle Details, Add Vehicle functionality, Favorites functionality, NHTSA API integration, responsive design, SEO implementation, Google Analytics, and production deployment.

The application completed Beta testing and final improvements before launch.

## Future Development

Future versions of CarFinder could include:

- User authentication and account management
- Manager and regular user authorization
- Backend and database inventory storage
- Stronger form validation
- Additional user-facing API error handling
- Automated security and dependency scanning
- VIN decoding using NHTSA data
- Vehicle recall information
- Safety ratings and additional vehicle specifications
- Additional vehicle images
- Additional accessibility and UI improvements

## Documentation

Project documentation is available throughout the `docs` directory.

- [Project Log](./docs/log.md)
- [Project Proposal](./docs/ProjectProposal.md)
- [Tech Stack](./docs/TechStack.md)
- [Research](./docs/research)
- [Wireframes](./docs/wires)
- [Designs](./docs/designs)
- [Installation Instructions](./docs/handoff/INSTALLATION.md)
- [Final Maintenance Plan](./docs/handoff/CarFinder%20Maintenance%20Plan%20-%20Amoy%20Turner.pdf)

The documentation includes project planning, development research, technical decisions, design materials, wireframes, maintenance information, and final handoff documentation.

## Maintenance and Handoff

CarFinder includes final handoff documentation so the project can be installed, reviewed, maintained, or continued by another developer.

The handoff documentation includes:

- Installation and local setup instructions
- Production build instructions
- Netlify deployment information
- Maintenance procedures and schedule
- Application source code
- Research and project documentation
- Wireframes and design materials

See the [Installation Instructions](./docs/handoff/INSTALLATION.md) for setup information and the [Maintenance Plan](./docs/handoff/CarFinder%20Maintenance%20Plan%20-%20Amoy%20Turner.pdf) for ongoing maintenance procedures.

## Prototype

[Figma Prototype](https://www.figma.com/proto/AxoOY3ci05UsDjILE212J0/Untitled?node-id=1-33&t=G1qykYWa8Qj7HQj9-1)

## Author

**Amoy Turner**  
Full Sail University  
Web Development  
2026
