# React Navigation App

A modern React.js application with a clean white and black design featuring a collapsible left navigation sidebar built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Clean Design**: Minimalist white and black color scheme
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔀 **Collapsible Navigation**: Hide/show sidebar functionality
- ⚡ **Modern Stack**: React 18, TypeScript, Tailwind CSS
- 🎯 **Best Practices**: Component-based architecture, custom hooks, accessibility features
- 🔍 **Interactive Elements**: Search functionality, notifications, user profile
- 📊 **Dashboard**: Sample dashboard with stats, projects, and quick actions

## Navigation Links

The sidebar includes the following sample navigation links:

- 📊 Dashboard
- 📁 Projects
- 👥 Team
- 📈 Analytics
- ⚙️ Settings
- ❓ Help
- 👤 Profile

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd react-nav-app
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Left navigation sidebar
│   ├── MainContent.tsx     # Main content area
│   └── index.ts           # Component exports
├── hooks/
│   └── useSidebar.ts      # Custom hook for sidebar state
├── App.tsx                # Main application component
├── index.tsx              # Application entry point
└── index.css              # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icons
- **Create React App** - Development environment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
