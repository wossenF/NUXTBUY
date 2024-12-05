# Product View Page Built with NuxtJS

## Table of Contents
1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Getting Started](#getting-started)
4. [Features](#features)
5. [Component Architecture](#component-architecture)
6. [UI Design](#ui-design)
7. [Usage in Application](#usage-in-application)
8. [Video Presentation](#video-presentation)


---

## Overview

This project is a **Product View Page** built with:
- **NuxtJS** for server-side rendering and dynamic routing.
- **Tailwind CSS** for responsive styling.
- **Element Plus** for prebuilt, customizable UI components.
- **Storybook** for component documentation and development.
- **Atomic Design** to create a modular and scalable component architecture.

The application features a dynamic product listing with interactive filters, detailed product view, and responsive layouts.

---

## Folder Structure

```plaintext
.
├── assets/            # Static files like images and icons
├── components/        # Vue components following atomic design
│   ├── atoms/         # Small, reusable elements (e.g., Button, Input)
│   ├── molecules/     # Groups of atoms (e.g., ProductCard)
│   └── organisms/     # Complex, multi-functional components (e.g., ProductList)
├── pages/             # Nuxt pages for routing (e.g., Product page)
├── layouts/           # Shared layouts (e.g., Header, Footer)
├── stories            # story component following atomic design
└── App.vue            # Main application entry point
```

---

## Getting Started

### Prerequisites
- **Node.js** v16+ and **npm** v8+
- **Git** installed locally

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wossenF/NUXTBUY.git
   cd NUXTBUY
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run Storybook:
   ```bash
   npm run storybook
   ```

---

## Features

- **Product Listing**: Displays a list of products.
- **Product Details**: Each product has a dedicated details page with images, descriptions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Reusability**: Components are built using atomic design principles for modularity.

---

## Component Architecture

This project uses **Atomic Design** for structuring components:

- **Atoms**: Basic UI elements (e.g., `Button.vue`, `Text.vue`).
- **Molecules**: Combinations of atoms that perform a specific function (e.g., `ProductCard.vue`).
- **Organisms**: Larger UI sections formed by molecules and atoms (e.g., `ProductList.vue`).


## UI Design

- **Tailwind CSS**: For responsive, utility-first styling.
- **Element Plus**: To leverage prebuilt components like dropdowns, sliders, and modals.

---



## Usage in Application

Components are reusable and can be integrated seamlessly into pages.




---

## Video Presentation

🎥 Watch the video walkthrough of the project: [Video Link](#)

