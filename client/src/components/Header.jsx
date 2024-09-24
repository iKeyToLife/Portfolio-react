// Importing Link for navigation and useLocation to get the current path
import { Link, useLocation } from 'react-router-dom';

function Header() {
  // Getting the current URL path
  const currentPage = useLocation().pathname;

  return (
    <header className="main-header nav animated animated-down"> {/* Main header element */}
      <h1 id="header-name">Aleksandr Polbennikov</h1> {/* Displaying name */}
      <div className="nav-links"> {/* Container for navigation links */}
        <li className="nav-item" id="home">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item" id="about">
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About me
          </Link>
        </li>
        <li className="nav-item" id="portfolio">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item" id="contact">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </div>
    </header>
  );
}

// Exporting Header component
export default Header;
