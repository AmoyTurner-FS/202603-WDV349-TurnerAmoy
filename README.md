# Project & Portfolio

### Amoy Turner

![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-8-purple.svg)
![Status](https://img.shields.io/badge/status-Beta-gold.svg)

# CarFinder

CarFinder is a React web application that allows users to search and explore a vehicle inventory by year, make, and model. The goal of the project is to provide a simple and organized way to find vehicles while also supporting inventory management features.

The current version represents the Beta stage of CarFinder. The application combines CarFinder inventory data with vehicle information from the NHTSA vPIC API.

## Features

- Search vehicles by Year, Make, and Model
- Vehicle Make and Model data provided by the NHTSA vPIC API
- No results state for searches without matching inventory
- Clear vehicle search filters
- View detailed information for individual vehicles
- Add new vehicles to the CarFinder inventory
- Added vehicles persist in browser localStorage
- Dashboard navigation and quick actions
- Favorites interface
- Expandable CarFinder logo
- Navbar account menu
- Responsive application layout
- Vehicle Not Found state for invalid vehicle IDs

## Tech Stack

- React
- React Router
- Vite
- JavaScript
- HTML
- CSS
- NHTSA vPIC API
- Browser localStorage
- ESLint
- Git & GitHub

## Project Structure

The main application is located inside:

`dev/portfolio`

The application is organized using reusable React components, pages, service files, utility functions, application data, and separate CSS files.

The NHTSA API service handles external vehicle data, while CarFinder maintains its own inventory information such as price, mileage, VIN, description, and available listings.

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

Vite will provide a local development URL. Open that URL in a browser to use CarFinder.

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

CarFinder currently uses the NHTSA Vehicle Product Information Catalog (vPIC) API.

The API is used to retrieve real vehicle Make and Model information for the Search Cars filters.

No API key is currently required for the NHTSA integration.

NHTSA provides vehicle information, while CarFinder controls which vehicles are actually available in its inventory.

## Data Storage

The current Beta does not require a database.

Starter inventory is stored within the application, while vehicles added through the Add Vehicle page are stored using browser localStorage.

Because localStorage is browser specific, vehicles added by a user will only remain available in that browser unless the browser data is cleared.

A future production version of CarFinder could replace this setup with backend and database storage.

## Current Beta Limitations

CarFinder is currently a frontend Beta and some planned functionality is not included in this version.

- Favorites currently displays sample vehicle data.
- Add to Favorites and Remove Favorite are not functional yet.
- Authentication and user accounts are not implemented.
- Manager and regular user access levels are planned but are not currently enforced.
- Navbar account menu options are currently interface placeholders.
- Added inventory is stored locally instead of in a shared database.

These limitations do not prevent the current core vehicle search, inventory, navigation, and Vehicle Details flows from being tested.

## Future Development

Future versions of CarFinder could include:

- Complete Favorites functionality
- User authentication and account management
- Manager and regular user authorization
- Backend and database inventory storage
- Stronger form validation
- User facing API error handling
- Automated security and dependency scanning
- Analytics for searches and vehicle interactions
- VIN decoding using NHTSA data
- Vehicle recall information
- Safety ratings and additional vehicle specifications
- Vehicle images
- Additional accessibility and UI improvements

## Documentation

- [Project Log](./docs/log.md)
- [Project Proposal](./docs/ProjectProposal.md)
- [Research](./docs/research)
- [Wireframes](./docs/wires)

The research folder contains weekly research completed throughout the project, including development practices, project planning, security, APIs, clean code, and Beta preparation.

## Prototype

[Figma Prototype](https://www.figma.com/proto/AxoOY3ci05UsDjILE212J0/Untitled?node-id=1-33&t=G1qykYWa8Qj7HQj9-1)

## Beta Status

CarFinder has reached the Beta stage of development.

Core vehicle search, inventory creation, Vehicle Details, navigation, NHTSA API integration, and major UI flows are functional. Beta use case testing was completed for both successful and unsuccessful user flows.

The remaining work for this milestone focuses on final code cleanup, application state testing, documentation, and preparing the development branch for staging.

## Author

**Amoy Turner**  
Full Sail University  
Web Development
