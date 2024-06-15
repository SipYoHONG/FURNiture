import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('path');
    if (redirectPath) {
      const correctedPath = redirectPath.startsWith('/FURNiture') ? redirectPath.substring('/FURNiture'.length) : redirectPath;
      navigate(correctedPath);
    }
  }, [navigate]);

  return null;
};

export default RedirectHandler;
