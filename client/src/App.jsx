import { Outlet } from 'react-router-dom'; // Importing Outlet to render nested routes
import './App.css'; // Importing global CSS for the application
import Footer from './components/Footer'; // Importing Footer component
import Header from './components/Header'; // Importing Header component

function App() {
  return (
    <>
      <Header /> {/* Rendering the Header at the top */}
      <main>
        <Outlet /> {/* Placeholder for rendering the current route's component */}
      </main>
      <Footer /> {/* Rendering the Footer at the bottom */}
    </>
  );
}

export default App; // Exporting the App component