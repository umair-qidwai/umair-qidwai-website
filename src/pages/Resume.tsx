import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Umair Qidwai | Resume';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="h-screen w-screen bg-black">
      <iframe
        src="/resume.pdf"
        title="Umair Qidwai resume"
        className="h-full w-full border-0"
      />
    </main>
  );
};

export default Resume;
