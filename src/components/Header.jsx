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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
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
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600 hover:text-slate-900'}`}
                                    >
                                        {link.label}
                                        <ChevronDown className="w-3.5 h-3.5" />
                                    </button>
                                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[220px]">
                                            <Link to="/services" className="block px-4 py-2 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors font-medium">
                                                All Services
                                            </Link>
                                            <div className="h-px bg-slate-100 mx-3 my-1" />
                                            {link.children.map((child) => (
                                                <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600 hover:text-slate-900'}`}
                                >
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
                            <Link to={link.path} className={`block text-sm font-medium py-1 ${isActive(link.path) ? 'text-cyan-600' : 'text-slate-600'} transition-colors`}>
                                {link.label}
                            </Link>
                            {link.children && (
                                <div className="pl-4 mt-1 space-y-1 border-l-2 border-cyan-100">
                                    {link.children.map((child) => (
                                        <Link key={child.path} to={child.path} className="block text-xs text-slate-500 hover:text-cyan-600 py-1 transition-colors">
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="mt-2 text-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full">
                        Get a Consultation
                    </Link>
                </div>
            )}
        </header>
    );
}
