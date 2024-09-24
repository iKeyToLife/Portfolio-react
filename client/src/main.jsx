import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio.jsx';


// Creating the router with routes and nested routes
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // App component as the main layout
    errorElement: <Error />, // Error component to display in case of routing errors
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />, // Home component for the root path
      },
      {
        path: '/About', // Route for the About page
        element: <About />, // About component
      },
      {
        path: '/Portfolio', // Route for the Portfolio page
        element: <Portfolio />, // Portfolio component
      },
      {
        path: '/Contact', // Route for the Contact page
        element: <Contact />, // Contact component
      },
    ],
  },
]);

// Rendering the app with the router inside the root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Providing the router to the app
);