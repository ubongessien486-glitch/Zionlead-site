import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Instagram, Layers } from 'lucide-react';

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
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-5 group">
                            <div className="relative flex items-center justify-center w-11 h-11 rounded-[14px] bg-gradient-to-b from-slate-900 to-black shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] ring-1 ring-white/10 overflow-hidden transform group-hover:scale-105 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Layers className="w-[22px] h-[22px] text-white/90 drop-shadow-sm" />
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight text-slate-900 flex items-center">
                                Zion<span className="text-slate-400 font-medium">lead</span><span className="text-cyan-500 -ml-0.5">.</span>
                            </span>
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

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-montserrat font-bold text-slate-800 text-sm mb-4 uppercase tracking-wider">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-slate-500 hover:text-cyan-600 transition-colors">
                                            {link.label}
                                        </Link>
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
