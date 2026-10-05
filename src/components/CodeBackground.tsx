import { useEffect, useRef } from 'react';

// A cursor reveals a changing field of code glyphs, leaving a short fading trail.
const GLYPHS = '/ > < | _ : . 0 1 { }';
const SPACING = 15;
const RADIUS = 140;
const LIFETIME = 70 * (1000 / 60);
const EDGE_MASK = 'radial-gradient(ellipse 64% 70% at 50% 50%, black 30%, rgba(0,0,0,0.55) 62%, transparent 92%)';

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let columns = 0;
    let seeds = new Uint8Array(0);
    let frame = 0;
    let lastX = -Infinity;
    let lastY = -Infinity;
    const trail: { x: number; y: number; time: number }[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      columns = Math.ceil(width / SPACING) + 1;
      seeds = Uint8Array.from({ length: columns * (Math.ceil(height / SPACING) + 1) },
        () => Math.floor(Math.random() * GLYPHS.length));
    };

    const draw = () => {
      const now = performance.now();
      frame = 0;
      while (trail.length && now - trail[0].time > LIFETIME) trail.shift();
      context.clearRect(0, 0, width, height);
      context.font = '12px "JetBrains Mono", ui-monospace, monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#4ade80';

      if (trail.length) {
        const left = Math.min(...trail.map(point => point.x)) - RADIUS;
        const right = Math.max(...trail.map(point => point.x)) + RADIUS;
        const top = Math.min(...trail.map(point => point.y)) - RADIUS;
        const bottom = Math.max(...trail.map(point => point.y)) + RADIUS;
        for (let row = Math.max(0, Math.floor(top / SPACING)); row <= Math.min(Math.ceil(height / SPACING), Math.ceil(bottom / SPACING)); row++) {
          for (let column = Math.max(0, Math.floor(left / SPACING)); column <= Math.min(columns - 1, Math.ceil(right / SPACING)); column++) {
            const x = (column + 0.5) * SPACING;
            const y = (row + 0.5) * SPACING;
            let strength = 0;
            for (const point of trail) {
              const distance = Math.hypot(x - point.x, y - point.y) / RADIUS;
              if (distance >= 1) continue;
              const age = (now - point.time) / LIFETIME;
              strength = Math.max(strength, Math.pow(1 - distance, 1 + age * 5) * (1 - age * age));
            }
            if (strength < 0.03) continue;
            const seed = seeds[row * columns + column];
            const shift = strength > 0.25 ? Math.floor(now / (1000 / 60) * 0.06 + strength * 2) : 0;
            const glyph = GLYPHS[(seed + shift) % GLYPHS.length];
            if (glyph === ' ') continue;
            context.globalAlpha = strength * (strength > 0.25 ? 0.55 : 0.4);
            context.fillText(glyph, x, y);
          }
        }
        frame = requestAnimationFrame(draw);
      }
      context.globalAlpha = 1;
    };

    const move = (event: PointerEvent) => {
      if (reducedMotion.matches || event.pointerType === 'touch' || document.hidden) return;
      const { clientX: x, clientY: y } = event;
      if ((x - lastX) ** 2 + (y - lastY) ** 2 <= 40) return;
      trail.push({ x, y, time: performance.now() });
      if (trail.length > 60) trail.shift();
      lastX = x;
      lastY = y;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const leave = () => { lastX = lastY = -Infinity; };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      trail.length = 0;
      leave();
      context.clearRect(0, 0, width, height);
    };
    const handleResize = () => { reset(); resize(); };

    resize();
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('blur', reset);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', reset);
    reducedMotion.addEventListener('change', reset);
    return () => {
      reset();
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('blur', reset);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', reset);
      reducedMotion.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A192F] to-black" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }} />
    </div>
  );
};

export default CodeBackground;
