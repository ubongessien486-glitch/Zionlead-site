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
    { label: 'Case Studies', path: '/case-studies' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
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
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-700 w-full pointer-events-none">
            <div className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3 border ${scrolled ? 'bg-white/70 backdrop-blur-xl border-white/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]' : 'bg-transparent border-transparent'}`}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity" aria-label="Zionlead Home">
                    <img src="/zionlead-logo.jpg" alt="Zionlead" className="h-14 w-auto object-contain mix-blend-multiply saturate-150 contrast-125 drop-shadow-md" />
                    <span className="font-display font-semibold text-xl tracking-tight text-gradient-logo hidden sm:block">
                        Zionlead
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative group">
                            {link.children ? (
                                <>
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className={`text-[13px] font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${isActive(link.path) ? 'text-black' : 'text-slate-500 hover:text-black'}`}
                                    >
                                        {link.label}
                                        <ChevronDown className="w-3 h-3 opacity-50" />
                                    </button>
                                    <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 py-3 min-w-[200px] transform origin-top scale-95 group-hover:scale-100 transition-transform duration-300">
                                            {link.children.map((child) => (
                                                <Link key={child.path} to={child.path} className="block px-5 py-2 text-[13px] text-slate-600 hover:text-black hover:bg-black/5 transition-colors font-medium">
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`text-[13px] font-medium tracking-wide transition-colors duration-300 block relative ${isActive(link.path) ? 'text-black' : 'text-slate-500 hover:text-black'}`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/contact" className="px-5 py-2.5 text-[13px] font-medium text-white bg-black hover:bg-slate-800 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
                        Get started
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button className="lg:hidden text-slate-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-2xl z-40 p-6 flex flex-col gap-4 pointer-events-auto animate-slide-in">
                    {navLinks.map((link) => (
                        <div key={link.path}>
                            <Link to={link.path} className={`block text-lg font-medium py-2 ${isActive(link.path) ? 'text-blue-600' : 'text-slate-900'}`}>
                                {link.label}
                            </Link>
                            {link.children && (
                                <div className="pl-4 mt-2 space-y-3 border-l-2 border-slate-100">
                                    {link.children.map((child) => (
                                        <Link key={child.path} to={child.path} className="block text-sm text-slate-500">
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="mt-4 text-center px-6 py-3 text-sm font-medium text-white bg-black rounded-xl">
                        Get started
                    </Link>
                </div>
            )}
        </header>
    );
}
