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
    <main className="h-[100dvh] w-full min-w-0 overflow-hidden bg-black">
      <iframe
        src="/resume.pdf#page=1&view=FitH&zoom=page-width"
        title="Umair Qidwai resume"
        className="block h-full w-full border-0"
      />
    </main>
  );
};

export default Resume;
