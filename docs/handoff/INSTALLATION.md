# CarFinder Installation Instructions

## Project Information

**Project:** CarFinder  
**Developer:** Amoy Turner  
**Framework:** React + Vite  
**Deployment:** Netlify  
**Live Site:** https://carfinder-amoy.netlify.app/

---

## Overview

CarFinder is a React web application that allows users to search vehicle inventory by year, make, and model. Users can view detailed vehicle information, add new vehicles to the inventory, and save and manage vehicles using Favorites.

CarFinder also uses vehicle data from the NHTSA vPIC API to support the vehicle search experience.

These instructions explain how to install and run CarFinder locally from the GitHub repository.

---

## Requirements

Before installing CarFinder, make sure the following are installed:

- Node.js
- npm
- Git
- A modern web browser
- A code editor such as Visual Studio Code

---

## Installation

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/AmoyTurner-FS/202603-WDV349-TurnerAmoy.git
```

### 2. Navigate to the CarFinder Project

```bash
cd 202603-WDV349-TurnerAmoy/dev/portfolio
```

### 3. Install Dependencies

Run:

```bash
npm install
```

This installs all required project dependencies listed in `package.json`.

### 4. Start the Development Server

Run:

```bash
npm run dev
```

Vite will display a local development URL in the terminal.

Open the provided URL in a modern web browser to view and test CarFinder.

---

## Production Build

To create a production build of CarFinder, run:

```bash
npm run build
```

The completed production files will be generated inside the `dist` directory.

To preview the production build locally, run:

```bash
npm run preview
```

---

## Netlify Deployment

CarFinder is currently deployed using Netlify.

The current production configuration is:

- **Production Branch:** `dev`
- **Base Directory:** `dev/portfolio`
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Live URL:** https://carfinder-amoy.netlify.app/

Changes that are approved and merged into the `dev` branch are automatically deployed to the live CarFinder website through Netlify.

---

## Application Data

CarFinder currently uses browser `localStorage` for locally stored application data, including user-added vehicles and Favorites.

Because the application uses localStorage instead of a database, locally created data is stored within the user's browser. This information is not automatically shared between different browsers or devices.

Vehicle make and model information used by the search functionality is supported by the NHTSA vPIC API.

---

## Analytics

CarFinder uses Google Analytics 4 to monitor website traffic and user engagement.

The Google Analytics tag has been added to the application and is included with the deployed production site.

---

## SEO

CarFinder includes SEO metadata and page titles designed to help search engines understand the purpose and content of the application.

SEO information should be reviewed whenever major pages, features, or content are changed.

---

## Maintenance

Ongoing maintenance requirements and recommended maintenance schedules are documented in:

**CarFinder Maintenance Plan - Amoy Turner.pdf**

The Maintenance Plan is located in:

```text
docs/handoff/
```

The plan includes routine checks for application functionality, external API availability, analytics, dependencies, browser compatibility, content, and deployment.

---

## Project Documentation

The GitHub repository contains the source code and supporting documentation created throughout the development of CarFinder.

Major project materials can be found in the following locations:

```text
dev/portfolio/        CarFinder application source code
docs/designs/         Design files
docs/wires/           Wireframes
docs/research/        Project research and notes
docs/handoff/         Final handoff and maintenance documentation
```

Additional project documentation is available throughout the `docs` directory.

---

## Troubleshooting

If the application does not start correctly:

1. Confirm that Node.js and npm are installed.
2. Confirm that the terminal is inside the `dev/portfolio` directory.
3. Run `npm install` to make sure all dependencies are installed.
4. Run `npm run dev` again.
5. Check the terminal and browser console for errors.
6. Confirm that the NHTSA vPIC API is available if vehicle make or model information is not loading.

If a production build fails, run:

```bash
npm run build
```

and review any errors displayed in the terminal before deploying again.

---

## Final Handoff

The CarFinder repository contains the files necessary to install, run, maintain, and continue development of the application.

**Developer:** Amoy Turner  
**Project:** CarFinder  
**Project Status:** Launched  
**Live Website:** https://carfinder-amoy.netlify.app/
