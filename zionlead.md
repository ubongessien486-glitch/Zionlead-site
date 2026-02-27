# Zionlead Technology Limited — Full Project Backup
> **Live URL:** https://axial-eagle.vercel.app
> **GitHub:** https://github.com/ubongessien486-glitch/Zionlead-site
> **Stack:** Vite + React 19 · React Router DOM · Tailwind CSS v3 · GSAP · Lucide React · Poppins + Montserrat

---

## `src/main.jsx`
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

---

## `src/App.jsx`
```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ApproachPage from './pages/ApproachPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="font-poppins text-slate-800 bg-white min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
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
    background-color: #ffffff;
    color: #1e293b;
    overflow-x: hidden;
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .glass-dark {
    background: rgba(255, 255, 255, 0.9);
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
    background: linear-gradient(135deg, #0f172a, #0e7490);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .border-gradient { border-image: linear-gradient(135deg, #06b6d4, #10b981) 1; }
  .glow-cyan { box-shadow: 0 0 40px rgba(6, 182, 212, 0.25); }
  .glow-green { box-shadow: 0 0 40px rgba(16, 185, 129, 0.25); }
  .bg-grid {
    background-image:
      linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  .hover-lift { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease; }
  .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2); }
  .clip-diagonal { clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 3px; }
  .gsap-fade-up { opacity: 0; transform: translateY(40px); }
  .gsap-fade-left { opacity: 0; transform: translateX(-40px); }
  .gsap-fade-right { opacity: 0; transform: translateX(40px); }
  .gsap-scale-in { opacity: 0; transform: scale(0.9); }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .stat-animate { animation: countUp 0.8s ease-out forwards; }
  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
  @keyframes borderRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animated-border {
    background: linear-gradient(270deg, #06b6d4, #10b981, #0e7490, #06b6d4);
    background-size: 400% 400%;
    animation: borderRotate 4s ease infinite;
  }
}
```

---

## `src/components/ScrollToTop.jsx`
```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}
```

---

## `src/components/Header.jsx`
```jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
        label: 'Services', path: '/services',
        children: [
            { label: 'IT Training', path: '/services#training' },
            { label: 'IT Outsourcing', path: '/services#outsourcing' },
            { label: 'IT Procurement', path: '/services#procurement' },
            { label: 'Infrastructure & Cloud', path: '/services#cloud' },
            { label: 'Software Development', path: '/services#software' },
        ]
    },
    { label: 'Our Approach', path: '/approach' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo + wordmark */}
                <Link to="/" className="flex items-center gap-3 group" aria-label="Zionlead Home">
                    <img src="/zionlead-logo.jpg" alt="Zionlead Technology Ltd" className="h-16 w-auto drop-shadow-md" />
                    <span className="font-montserrat font-bold text-xl tracking-tight hidden sm:block">
                        <span className="text-gradient-cyan">Zion</span><span className="text-slate-800">lead</span>
                    </span>
                </Link>
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative group">
                            {link.children ? (
                                <>
                                    <button onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600 hover:text-slate-900'}`}>
                                        {link.label}<ChevronDown className="w-3.5 h-3.5" />
                                    </button>
                                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[220px]">
                                            <Link to="/services" className="block px-4 py-2 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors font-medium">All Services</Link>
                                            <div className="h-px bg-slate-100 mx-3 my-1" />
                                            {link.children.map((child) => (
                                                <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{child.label}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link to={link.path} className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600 hover:text-slate-900'}`}>
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                {/* CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link to="/contact" className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        Get a Consultation
                    </Link>
                </div>
                {/* Mobile hamburger */}
                <button className="lg:hidden text-slate-700 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden relative z-10 border-t border-slate-100 px-6 py-4 flex flex-col gap-3 bg-white max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.path}>
                            <Link to={link.path} className={`block text-sm font-medium py-1 ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600'} transition-colors`}>{link.label}</Link>
                            {link.children && (
                                <div className="pl-4 mt-1 space-y-1 border-l-2 border-cyan-100">
                                    {link.children.map((child) => (
                                        <Link key={child.path} to={child.path} className="block text-xs text-slate-500 hover:text-cyan-600 py-1 transition-colors">{child.label}</Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="mt-2 text-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full">Get a Consultation</Link>
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

export default function Hero() {
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const vizRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
            .fromTo(subRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
            .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
            .fromTo(vizRef.current, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'back.out(1.2)' }, '-=0.8');
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl" />
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10 opacity-40">
                {[Globe, Shield, Cpu].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center animate-float border border-slate-100" style={{ animationDelay: `${i * 0.8}s` }}>
                        <Icon className="w-5 h-5 text-cyan-500" />
                    </div>
                ))}
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-xs font-semibold text-cyan-600 border border-cyan-200 mb-6 tracking-wider uppercase">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                            Premier IT Solutions Company
                        </div>
                        {/* Company Name — Bold & unmistakable */}
                        <h1 ref={titleRef} className="font-montserrat font-black leading-tight mb-3">
                            <span className="text-gradient-cyan block text-6xl lg:text-7xl xl:text-8xl tracking-tight">Zionlead</span>
                        </h1>
                        {/* Tagline — clearly secondary to the brand name */}
                        <p className="font-montserrat font-semibold text-2xl lg:text-3xl text-slate-600 mb-6 tracking-wide italic">
                            "Pioneering Possibilities…"
                        </p>
                        <p ref={subRef} className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mb-10">
                            We design, build, and manage innovative IT solutions that transform businesses{' '}
                            <em className="text-cyan-600 not-italic font-medium">remotely</em>,{' '}
                            <em className="text-emerald-600 not-italic font-medium">efficiently</em>, and{' '}
                            <em className="text-slate-800 not-italic font-medium">excellently</em>.
                        </p>
                        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                                Get a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 px-8 py-4 font-semibold text-cyan-600 border border-cyan-300 rounded-full hover:border-cyan-500 hover:bg-cyan-50 hover:scale-105 transition-all duration-300">
                                Explore Our Services <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                        <div className="mt-10 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
                                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
                                    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face',
                                ].map((src, i) => (
                                    <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm"><span className="text-slate-800 font-semibold">500+</span> businesses transformed globally</p>
                        </div>
                    </div>
                    <div ref={vizRef} className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-3xl blur-3xl scale-90" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/50">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Young tech team collaborating in a modern office" className="w-full h-[480px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                                        <Cpu className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-sm">Remote-First Team</p>
                                        <p className="text-slate-400 text-xs">Global Talent, Local Impact</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/50">
                                <p className="text-emerald-600 font-bold text-lg">98%</p>
                                <p className="text-slate-400 text-xs">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
                <span className="text-xs tracking-widest text-slate-400 uppercase">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
            </div>
        </section>
    );
}
```

---

## `src/components/About.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\About.jsx`
> (3-column layout: image | text | stats grid, CircuitLines divider, GSAP scroll animations, 4 stats: 500+ Clients, 12+ Countries, 8+ Years, 98% Satisfaction)

---

## `src/components/Services.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\Services.jsx`
> (5 service cards in 3+2 grid: IT Training, IT Outsourcing, Infrastructure & Cloud, Software Dev, IT Procurement — hover glow borders, feature pills, GSAP stagger)

---

## `src/components/WhyZionlead.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\WhyZionlead.jsx`
> (5 reasons in vertical icon timeline, sticky left column with team image + trust bar, GSAP scroll animations)

---

## `src/components/Contact.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\components\Contact.jsx`
> (Contact info cards: Email/Phone/Remote + contact form with Name/Email/Service/Message, GSAP fadeup)

---

## `src/components/Footer.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:info@zionlead.com.ng', label: 'Email' },
];

const footerLinks = {
    Company: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Approach', path: '/approach' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Careers', path: '/careers' },
    ],
    Services: [
        { label: 'IT Training', path: '/services#training' },
        { label: 'IT Outsourcing', path: '/services#outsourcing' },
        { label: 'Infrastructure & Cloud', path: '/services#cloud' },
        { label: 'Software Development', path: '/services#software' },
        { label: 'IT Procurement', path: '/services#procurement' },
    ],
    Resources: [
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <img src="/zionlead-logo.jpg" alt="Zionlead Technology Ltd" className="h-14 w-auto" />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">
                            Pioneering IT solutions that transform businesses, remotely, efficiently, and excellently.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cyan-500 hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-500/10 transition-all"
                                    aria-label={label}>
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-montserrat font-bold text-slate-800 text-sm mb-4 uppercase tracking-wider">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-slate-500 hover:text-cyan-600 transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Zionlead Technology Limited. All rights reserved.</p>
                    <p>Pioneering Possibilities</p>
                </div>
            </div>
        </footer>
    );
}
```

---

## `src/pages/HomePage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\HomePage.jsx`
> (Full home page: Hero with GSAP animation, Who We Are section, 5 Service snapshot cards, Why Zionlead? section with 5 reasons)

---

## `src/pages/AboutPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\AboutPage.jsx`
> (Our Story, Mission & Vision cards, Team image, 5 Core Values grid, Remote-First Advantage section)

---

## `src/pages/ServicesPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\ServicesPage.jsx`
> (Detailed alternating layout for all 5 services with bullet points, images, and CTA)

---

## `src/pages/ApproachPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\ApproachPage.jsx`
> (4-step vertical timeline: Discovery → Strategy & Design → Implementation → Support & Optimization)

---

## `src/pages/CaseStudiesPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\CaseStudiesPage.jsx`
> (3 case studies: Azure Infrastructure, M365 Transformation, Custom ERP Integration)

---

## `src/pages/BlogPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\BlogPage.jsx`
> (5 "coming soon" blog topics: Azure VMs, Cloud Security, Remote Infrastructure, Cost Optimization, IAM)

---

## `src/pages/CareersPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\CareersPage.jsx`
> (What We Look For section, team image, Apply CTA with email: careers@zionlead.com.ng)

---

## `src/pages/ContactPage.jsx`
> See full file at: `c:\Users\LENOVO\.gemini\antigravity\playground\axial-eagle\src\pages\ContactPage.jsx`
> (Full contact form: Name, Company, Email, Phone, Service dropdown, Message. Info cards: info@zionlead.com.ng, Global Remote Ops)

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

# 5. Push to GitHub
git push origin master
# → https://github.com/ubongessien486-glitch/Zionlead-site
```
