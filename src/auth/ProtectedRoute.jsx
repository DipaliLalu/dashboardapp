import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Parse authentication status from localStorage
  const storedData =JSON.parse(localStorage.getItem('isAuthenticate'));
  const isAuthenticated = storedData ? storedData.isAuthenticate === true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // Render children only if authenticated
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
