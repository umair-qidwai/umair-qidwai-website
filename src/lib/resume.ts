export const resumeUrl = __RESUME_URL__;

let prefetch: Promise<void> | undefined;

export const prefetchResume = () => {
  if (!prefetch) {
    // Fetch works in Safari too, where <link rel="prefetch"> is unsupported.
    // Consume the body so the complete PDF is available in the HTTP cache.
    prefetch = fetch(resumeUrl, { cache: 'force-cache', priority: 'low' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Resume prefetch failed');
        await response.arrayBuffer();
      })
      .catch(() => {
        // A failed background request must not interfere with opening the PDF.
        prefetch = undefined;
      });
  }

  return prefetch;
};
