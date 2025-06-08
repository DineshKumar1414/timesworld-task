# TimesWorld Task - React Application

This project is a React application built as part of a Machine Test assignment.

## Overview

The app includes:

- A **Login page** with validation:
  - Password must be at least 8 characters, including 1 uppercase letter, 1 number, and 1 symbol.
  - On successful login, redirects to the Home page.
  - **Test Credentials:**
    - Email: `dineshkumar130197@gmail.com`
    - Password: `Dinesh@1414`
- A **Home page** displaying:
  - A slider with Next/Previous navigation and pagination dots.
  - A list of countries fetched from [REST Countries API](https://restcountries.com/v2/all?fields=name,region,flag), showing country name, flag, and region.
  - Load more pagination to fetch additional countries.
  - Functional continent filters to filter countries by region.

The app is built with:

- React (functional components and hooks)
- Redux Toolkit for state management
- React-Bootstrap for UI components
- Responsive design based on the provided Figma mockup

## Live Demo

[https://timesworld-task-gwmk.vercel.app](https://timesworld-task-gwmk.vercel.app)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-project-folder>
```
