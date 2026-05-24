import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateStars = () => {
    const stars = [];
    const count = 180; // Slightly denser field for more visible motion

    for (let i = 0; i < count; i++) {
      const size = Math.random() < 0.6 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
      const wrapper = document.createElement('div');
      wrapper.className = 'star-wrapper';

      const star = document.createElement('div');
      star.className = `star star-${size}`;
      
      // Create a spiral pattern
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 40 + 10; // Distance from center (10-50%)
      const x = 50 + Math.cos(angle) * distance; // Center at 50%
      const y = 50 + Math.sin(angle) * distance; // Center at 50%
      
      wrapper.style.left = `${x}%`;
      wrapper.style.top = `${y}%`;
      wrapper.style.setProperty('--drift-distance', `${Math.random() * 2.5 + 1}px`);
      wrapper.style.setProperty('--drift-duration', `${5 + Math.random() * 4}s`);
      wrapper.style.setProperty('--drift-delay', `-${Math.random() * 8}s`);

      star.style.setProperty('--base-opacity', `${size === 'small' ? 0.4 : size === 'medium' ? 0.62 : 0.82}`);
      star.style.setProperty('--twinkle-duration', `${1.4 + Math.random() * 1.6}s`);
      star.style.setProperty('--rotate-speed', `${14 + Math.random() * 10}s`); // faster rotation
      star.style.setProperty('--orbit-distance', `${distance * 0.3}px`); // Scale down the orbit
      star.style.setProperty('--orbit-delay', `-${Math.random() * 16}s`); // Random start position

      if (size === 'large' || Math.random() > 0.88) {
        star.classList.add('star-accent');
      }

      wrapper.appendChild(star);
      stars.push(wrapper);
    }
    return stars;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const stars = generateStars();
    const starsContainer = containerRef.current.querySelector('.stars-container');
    if (!starsContainer) return;

    stars.forEach(star => starsContainer.appendChild(star));

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxScroll) * 100;

      stars.forEach(star => {
        const baseY = parseFloat(star.style.top) || 0;
        const parallaxSpeed = (100 - baseY) * 0.001; // Stars higher up move more
        const yOffset = scrollPercent * parallaxSpeed;
        star.style.setProperty('--scroll-offset', `${yOffset}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A192F] to-black" />
      <div className="absolute inset-0 stars-container" />
    </div>
  );
};

export default StarBackground;
