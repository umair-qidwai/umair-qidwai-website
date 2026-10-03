import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Hand off to the browser's native PDF viewer so it opens at default zoom
    window.location.replace('/resume.pdf');
  }, []);

  return null;
};

export default Resume;
