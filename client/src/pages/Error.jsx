// Importing hook to handle route errors
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError(); // Fetching the current error from routing
  console.error(error);

  return (
    <div id="error-page"> {/* Main container for the error page */}
      <h2>Oops!</h2> {/* Error title */}
      <p>Sorry, an unexpected error has occurred.</p> {/* User-friendly error message */}
      <p>
        <i>{error.statusText || error.message}</i> {/* Displaying the specific error message if available */}
      </p>
    </div>
  );
}
