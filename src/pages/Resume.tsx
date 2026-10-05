import { useEffect } from 'react';
import { resumeUrl } from '@/lib/resume';

const Resume = () => {
  useEffect(() => {
    // Hand off to the browser's native PDF viewer so it opens at default zoom
    window.location.replace(resumeUrl);
  }, []);

  return null;
};

export default Resume;
