# Zionlead Technology Limited — Full Project Backup
> **Live URL:** https://axial-eagle.vercel.app
> **Stack:** Vite + React 19 · Tailwind CSS v3 · GSAP · Lucide React · Poppins + Montserrat

---

## `package.json`
```json
{
  "name": "axial-eagle",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.14.2",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.24",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "vite": "^7.3.1"
  }
}
```

---

## `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan:  '#06b6d4',
          green: '#10b981',
          dark:  '#0a1628',
          mid:   '#0d2137',
          light: '#e0f7fa',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a2f2a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(16,185,129,0.08) 100%)',
        'glow-cyan':     'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15), transparent 70%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-cyan':  '0 0 30px rgba(6,182,212,0.3)',
        'glow-green': '0 0 30px rgba(16,185,129,0.3)',
        'glass':      '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 60px rgba(6,182,212,0.2)',
      },
    },
  },
  plugins: [],
}
```

---

## `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Zionlead Technology Limited — Pioneering IT Solutions. We design, build, and manage innovative IT solutions that transform businesses remotely, efficiently, and excellently." />
    <title>Zionlead Technology Limited</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0a1628;
    color: #ffffff;
    overflow-x: hidden;
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .glass-dark {
    background: rgba(10, 22, 40, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(6, 182, 212, 0.2);
  }
  .text-gradient-cyan {
    background: linear-gradient(135deg, #06b6d4, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .text-gradient-white {
    background: linear-gradient(135deg, #ffffff, #a5f3fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .bg-grid {
    background-image:
      linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2);
  }
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  @keyframes borderRotate {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animated-border {
    background: linear-gradient(270deg, #06b6d4, #10b981, #0e7490, #06b6d4);
    background-size: 400% 400%;
    animation: borderRotate 4s ease infinite;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a1628; }
  ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 3px; }
}
```

---

## `src/main.jsx`
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## `src/App.jsx`
```jsx
import React from 'react';
import './index.css';
import Header       from './components/Header';
import Hero         from './components/Hero';
import About        from './components/About';
import Services     from './components/Services';
import WhyZionlead  from './components/WhyZionlead';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <div className="font-poppins text-white bg-brand-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyZionlead />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

---

## `src/components/AnimatedNetwork.jsx`
```jsx
import React, { useEffect, useRef } from 'react';

export default function AnimatedNetwork({
  className = '',
  nodeCount = 60,
  nodeColor = '#06b6d4',
  lineColor = 'rgba(6,182,212,0.15)',
  accentColor = '#10b981',
  speed = 0.4,
  connectionDistance = 150,
}) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const nodesRef  = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * speed,
      vy:  (Math.random() - 0.5) * speed,
      r:   Math.random() * 2.5 + 1,
      color: i % 5 === 0 ? accentColor : nodeColor,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;

      nodes.forEach((node) => {
        node.x   += node.vx;
        node.y   += node.vy;
        node.pulse += 0.02;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = lineColor.replace('0.15', String(alpha));
            ctx.lineWidth   = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const pulsedR = node.r + Math.sin(node.pulse) * 0.5;
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulsedR * 4);
        grd.addColorStop(0, node.color + '66');
        grd.addColorStop(1, node.color + '00');
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulsedR * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle   = node.color;
        ctx.shadowBlur  = 8;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur  = 0;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [nodeCount, nodeColor, lineColor, accentColor, speed, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
```

---

## `src/components/TechIllustrations.jsx`
```jsx
import React from 'react';

export function TechServerIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d2137" />
          <stop offset="100%" stopColor="#071a30" />
        </linearGradient>
        <linearGradient id="topFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e3348" />
          <stop offset="100%" stopColor="#0a2537" />
        </linearGradient>
        <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="cyanGlow2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx="260" cy="300" rx="220" ry="80" fill="#06b6d4" fillOpacity="0.05" />
      <ellipse cx="260" cy="200" rx="160" ry="120" fill="#10b981" fillOpacity="0.04" />
      <rect x="110" y="90" width="300" height="240" rx="8" fill="url(#panelGrad)" stroke="#0e4a5e" strokeWidth="1.5" />
      <path d="M110 90 L160 60 L460 60 L410 90 Z" fill="url(#topFace)" stroke="#0e4a5e" strokeWidth="1" />
      <path d="M410 90 L460 60 L460 300 L410 330 Z" fill="#071220" stroke="#0e4a5e" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 110 + i * 44;
        const isActive = i === 0 || i === 2 || i === 4;
        return (
          <g key={i}>
            <rect x="125" y={y} width="270" height="34" rx="4" fill="#071a30" stroke="#0c2d40" strokeWidth="1" />
            <rect x="128" y={y + 3} width="4" height="28" rx="2" fill={isActive ? '#10b981' : '#1e3a4a'} filter={isActive ? 'url(#glowFilter)' : ''} />
            {[0, 1, 2, 3].map((d) => (
              <rect key={d} x={140 + d * 14} y={y + 9} width="10" height="16" rx="2" fill={isActive ? '#0d2f40' : '#0a1e2b'} stroke={isActive ? '#06b6d4' : '#0e2d3a'} strokeWidth="0.5" />
            ))}
            {isActive && (
              <>
                <circle cx="210" cy={y + 17} r="3" fill="#06b6d4" filter="url(#glowFilter)" opacity={i === 2 ? '1' : '0.7'} />
                <circle cx="220" cy={y + 17} r="3" fill="#10b981" filter="url(#glowFilter)" opacity="0.8" />
                <circle cx="230" cy={y + 17} r="2" fill="#06b6d4" filter="url(#glowFilter)" opacity="0.5" />
              </>
            )}
            <rect x="300" y={y + 8} width="80" height="18" rx="3" fill="#050f1a" stroke="#0c2d40" strokeWidth="0.5" />
            {[0, 1, 2, 3, 4, 5].map((p) => (
              <rect key={p} x={303 + p * 12} y={y + 11} width="8" height="12" rx="1.5"
                fill={isActive && p < 3 ? '#0d3040' : '#050f1a'}
                stroke={isActive && p < 3 ? '#06b6d4' : '#0c2030'}
                strokeWidth="0.5"
              />
            ))}
          </g>
        );
      })}
      <rect x="110" y="326" width="300" height="4" rx="2" fill="url(#cyanGlow)" filter="url(#glowFilter)" />
      <path d="M110 150 L60 150 L60 120 L30 120" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
      <path d="M110 200 L70 200 L70 240 L40 240" stroke="#10b981" strokeWidth="0.8" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />
      <path d="M410 160 L450 160 L450 130 L490 130" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
      <path d="M410 210 L460 210 L460 250 L500 250" stroke="#10b981" strokeWidth="0.8" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />
      <circle cx="30" cy="120" r="4" fill="#06b6d4" filter="url(#glowFilter)" />
      <circle cx="40" cy="240" r="4" fill="#10b981" filter="url(#glowFilter)" />
      <circle cx="490" cy="130" r="4" fill="#06b6d4" filter="url(#glowFilter)" />
      <circle cx="500" cy="250" r="4" fill="#10b981" filter="url(#glowFilter)" />
      <g transform="translate(340,20)">
        <ellipse cx="50" cy="30" rx="48" ry="22" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
        <ellipse cx="30" cy="22" rx="26" ry="20" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
        <ellipse cx="70" cy="18" rx="22" ry="18" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
        <ellipse cx="50" cy="25" rx="40" ry="16" fill="#06b6d4" fillOpacity="0.06" />
        <line x1="50" y1="52" x2="50" y2="70" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="50,75 46,67 54,67" fill="#06b6d4" fillOpacity="0.8" />
      </g>
      <g transform="translate(20,50)">
        <rect width="72" height="52" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
        <text x="8" y="15" fontSize="7" fill="#06b6d4" fontFamily="monospace">CPU</text>
        <rect x="8" y="20" width="56" height="6" rx="2" fill="#050f1a" />
        <rect x="8" y="20" width="42" height="6" rx="2" fill="url(#cyanGlow)" />
        <text x="8" y="38" fontSize="6" fill="#475569" fontFamily="monospace">MEMORY</text>
        <rect x="8" y="41" width="56" height="5" rx="2" fill="#050f1a" />
        <rect x="8" y="41" width="28" height="5" rx="2" fill="url(#cyanGlow2)" />
      </g>
      <g transform="translate(20,330)">
        <rect width="80" height="44" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
        <circle cx="12" cy="12" r="5" fill="#10b981" filter="url(#glowFilter)" />
        <text x="22" y="16" fontSize="7" fill="#10b981" fontFamily="monospace">ONLINE</text>
        <text x="8" y="30" fontSize="6" fill="#475569" fontFamily="monospace">UPTIME: 99.99%</text>
        <text x="8" y="40" fontSize="6" fill="#06b6d4" fontFamily="monospace">■ 3 NODES ACTIVE</text>
      </g>
      <g transform="translate(420,320)">
        <rect width="80" height="44" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
        <text x="8" y="14" fontSize="7" fill="#06b6d4" fontFamily="monospace">LATENCY</text>
        <text x="8" y="28" fontSize="14" fill="#ffffff" fontFamily="monospace" fontWeight="bold">2ms</text>
        <text x="8" y="40" fontSize="6" fill="#10b981" fontFamily="monospace">▲ Optimal</text>
      </g>
      <ellipse cx="260" cy="360" rx="180" ry="16" fill="#06b6d4" fillOpacity="0.07" />
    </svg>
  );
}

export function TechHexBadge({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="url(#hexGrad)" strokeWidth="1.5" />
      <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" fill="rgba(6,182,212,0.08)" stroke="url(#hexGrad)" strokeWidth="0.5" />
      <circle cx="20" cy="20" r="5" fill="url(#hexGrad)" opacity="0.9" />
    </svg>
  );
}

export function CircuitLines({ className = '' }) {
  return (
    <svg viewBox="0 0 800 120" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="30%"  stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="70%"  stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 45, 70, 95].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="800" y2={y} stroke="url(#traceGrad)" strokeWidth="0.8" />
      ))}
      {[100, 200, 350, 500, 650, 700].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="20" x2={x} y2="95" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx={x} cy={i % 2 === 0 ? 20 : 95} r="3" fill={i % 2 === 0 ? '#06b6d4' : '#10b981'} fillOpacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
```

---

## `src/components/Header.jsx`
```jsx
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import AnimatedNetwork from './AnimatedNetwork';

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${scrolled ? 'shadow-[0_4px_40px_rgba(6,182,212,0.2)]' : ''}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: scrolled ? 'linear-gradient(90deg, rgba(5,14,28,0.97) 0%, rgba(7,26,40,0.97) 50%, rgba(5,21,30,0.97) 100%)' : 'linear-gradient(90deg, rgba(5,14,28,0.85) 0%, rgba(7,26,40,0.85) 50%, rgba(5,21,30,0.85) 100%)'}} />
        <div className="absolute inset-0 opacity-70">
          <AnimatedNetwork nodeCount={35} nodeColor="#06b6d4" accentColor="#10b981" lineColor="rgba(6,182,212,0.18)" speed={0.25} connectionDistance={130} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group" aria-label="Zionlead Home">
          <div className="w-9 h-9 rounded-lg animated-border p-[2px]">
            <div className="w-full h-full bg-brand-dark rounded-[6px] flex items-center justify-center">
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="font-montserrat font-bold text-lg tracking-tight drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            <span className="text-gradient-cyan">Zion</span><span className="text-white">lead</span>
          </span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button key={href} onClick={() => handleNav(href)} className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${activeLink === href ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>
              {label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300 ${activeLink === href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => handleNav('#contact')} className="px-5 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/40 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">Contact Us</button>
          <button onClick={() => handleNav('#contact')} className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-glow-cyan transition-all duration-300">Get a Consultation</button>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden relative z-10 border-t border-white/10 px-6 py-4 flex flex-col gap-4 bg-[rgba(5,14,28,0.97)]">
          {navLinks.map(({ label, href }) => (
            <button key={href} onClick={() => handleNav(href)} className="text-left text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">{label}</button>
          ))}
          <button onClick={() => handleNav('#contact')} className="mt-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full">Get a Consultation</button>
        </div>
      )}
    </header>
  );
}
```

---

## `src/components/Hero.jsx`
```jsx
import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Globe, Shield, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import AnimatedNetwork from './AnimatedNetwork';
import { TechServerIllustration } from './TechIllustrations';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef   = useRef(null);
  const ctaRef   = useRef(null);
  const vizRef   = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subRef.current,   { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo(ctaRef.current,   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo(vizRef.current,   { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'back.out(1.2)' }, '-=0.8');
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0a1e35 50%, #061a18 100%)' }}>
      <div className="absolute inset-0 z-0">
        <AnimatedNetwork nodeCount={80} nodeColor="#06b6d4" accentColor="#10b981" lineColor="rgba(6,182,212,0.12)" speed={0.3} connectionDistance={160} />
      </div>
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 80% at 30% 50%, rgba(6,15,30,0.6) 0%, rgba(6,15,30,0.1) 100%)' }} />
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 75% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)' }} />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10 opacity-50">
        {[Globe, Shield, Cpu].map((Icon, i) => (
          <div key={i} className="w-10 h-10 glass rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: `${i * 0.8}s` }}>
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/30 mb-8 tracking-wider uppercase">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow" />
              Premier IT Solutions Company
            </div>
            <h1 ref={titleRef} className="font-montserrat font-black text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              <span className="text-gradient-white block">Pioneering</span>
              <span className="text-gradient-cyan block">Possibilities…</span>
            </h1>
            <p ref={subRef} className="text-slate-300 text-lg font-light leading-relaxed max-w-xl mb-10">
              We design, build, and manage innovative IT solutions that transform businesses —{' '}
              <em className="text-cyan-300 not-italic font-medium">remotely</em>,{' '}
              <em className="text-emerald-300 not-italic font-medium">efficiently</em>, and{' '}
              <em className="text-white not-italic font-medium">excellently</em>.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-glow-cyan hover:scale-105 transition-all duration-300">
                Get a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 px-8 py-4 font-semibold text-cyan-400 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300">
                Explore Our Services <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#06b6d4','#10b981','#8b5cf6','#f59e0b'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ background: c + '33', borderColor: c + '66', color: c }}>{['A','B','C','D'][i]}</div>
                ))}
              </div>
              <p className="text-slate-400 text-sm"><span className="text-white font-semibold">500+</span> businesses transformed globally</p>
            </div>
          </div>
          <div ref={vizRef} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-glow-cyan opacity-20 rounded-full scale-75 blur-3xl" />
            <div className="absolute inset-[-10%] rounded-full border border-cyan-500/10 animate-spin-slow" style={{ borderStyle: 'dashed' }} />
            <div className="absolute inset-[5%] rounded-full border border-emerald-500/8" style={{ borderStyle: 'dashed', animation: 'spin 30s linear infinite reverse' }} />
            <TechServerIllustration className="w-full max-w-lg mx-auto drop-shadow-[0_0_60px_rgba(6,182,212,0.3)] relative z-10 animate-float" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
        <span className="text-xs tracking-widest text-slate-400 uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse-slow" />
      </div>
    </section>
  );
}
```

---

## `src/components/About.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\About.jsx`
> (Includes ChipIllustration SVG, 3-column layout: chip | text | stats, CircuitLines divider, GSAP animations)

---

## `src/components/Services.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\Services.jsx`
> (5 service cards in 3+2 grid, hover glow borders, feature pills, GSAP stagger animation)

---

## `src/components/WhyZionlead.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\WhyZionlead.jsx`
> (5 reasons in vertical icon timeline, sticky left column, trust badge cluster, GSAP scroll animations)

---

## `src/components/Contact.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\Contact.jsx`
> (Contact info cards + send message form, GSAP fadeup animations)

---

## `src/components/Footer.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\Footer.jsx`
> (Brand logo, nav link columns — Company/Services/Legal, social icons, back-to-top button)

---

## Restore Instructions

```bash
# 1. Go to project folder
cd c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173

# 4. Deploy to Vercel
vercel --prod --yes
# → https://axial-eagle.vercel.app
```
