# Homework 7 - React Router DOM Application

## By Jalen Banks

### Assignment Requirements

This project implements a React application using React Router DOM with the following features:

✅ **Multiple Pages (3+)**: 
- Home page
- Space page
- Ocean page
- 404 Not Found page

✅ **Each Page Includes**:
- Title reflecting the page's theme
- Relevant image (using Unsplash API for high-quality images)
- Informative paragraph with curious/interesting facts

✅ **Navigation Bar**:
- Implemented with React Router's Link component
- Links to Home, Space, and Ocean pages
- Sticky navigation that stays at top of page
- Hover effects for better UX

✅ **Routing**:
- React Router DOM v6 implementation
- Routes display corresponding page content
- Clean URL structure

✅ **404 Page**:
- Catch-all route (*) for invalid URLs
- Styled error page with link back to home

✅ **Styling**:
- Modern gradient background
- Card-based layout
- Hover effects and transitions
- Responsive design for mobile devices
- Professional color scheme

### Technologies Used

- React 19.2.0
- React Router DOM 6.x
- CSS3 with Flexbox
- Unsplash Images (via CDN)

### Project Structure

```
src/
├── App.js              # Main app with routing setup
├── App.css             # Global styles
├── components/
│   ├── Navbar.js       # Navigation component
│   ├── Home.js         # Home page component
│   ├── Space.js        # Space facts page
│   ├── Ocean.js        # Ocean facts page
│   └── NotFound.js     # 404 error page
```

### How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open http://localhost:3000 in your browser

### Features Implemented

1. **React Router DOM Navigation**: Uses BrowserRouter, Routes, Route, and Link components
2. **Component-Based Architecture**: Each page is a separate component
3. **Responsive Design**: Works on desktop and mobile devices
4. **Interactive UI**: Hover effects and smooth transitions
5. **Catch-All Route**: 404 page for undefined routes
6. **Educational Content**: Interesting facts about space and ocean exploration

### Methods from Previous Labs

This project uses techniques learned from:
- **Lab 13**: React Router DOM setup, navigation bar with Links, routing between pages
- **Lab 12**: Component structure, props passing, modular design
- **Previous labs**: CSS styling, responsive design, modern UI/UX practices

### Pages Overview

**Home Page** (`/`): Introduction to the website theme with general information about space and ocean exploration

**Space Page** (`/space`): Fascinating facts about the universe, including scale, mysteries, and interesting phenomena

**Ocean Page** (`/ocean`): Curious information about Earth's oceans, depth, unexplored areas, and marine life

**404 Page** (`/*`): Creative error page for any invalid routes with a button to return home

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
