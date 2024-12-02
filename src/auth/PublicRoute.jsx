import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PublicRoute({ children }) {
  const navigate = useNavigate();
  const storedData = localStorage.getItem('isAuthenticate');
  const isAuthenticated = storedData ? JSON.parse(storedData).isAuthenticate === true : false;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true }); 
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? null : children;
}

export default PublicRoute;
