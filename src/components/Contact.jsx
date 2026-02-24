import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="relative py-28 overflow-hidden bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-50/50 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Get In Touch</span>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                    </div>
                    <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 mb-4">
                        Ready to <span className="text-gradient-cyan">Transform</span> Your Business?
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Let's start a conversation. Our experts are ready to design the perfect IT solution for your needs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact info cards */}
                    <div className="space-y-5">
                        {[
                            { icon: Mail, label: 'Email Us', value: 'hello@zionlead.com', sub: 'We reply within 24 hours' },
                            { icon: Phone, label: 'Call Us', value: '+1 (800) ZIONLEAD', sub: 'Mon-Fri, 9am–6pm UTC' },
                            { icon: MapPin, label: 'Remote-First', value: 'Global Operations', sub: 'Serving clients worldwide' },
                        ].map(({ icon: Icon, label, value, sub }) => (
                            <div key={label} className="contact-card bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-100 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow">
                                    <Icon className="w-6 h-6 text-cyan-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 tracking-wider uppercase mb-1">{label}</p>
                                    <p className="font-semibold text-slate-800 text-base">{value}</p>
                                    <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-cyan-500 transition-colors" />
                            </div>
                        ))}
                    </div>

                    {/* Quick Contact Form */}
                    <div className="contact-card bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50">
                        <h3 className="font-montserrat font-bold text-xl text-slate-800 mb-6">Send Us a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">Service Interest</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all">
                                    <option value="">Select a service…</option>
                                    <option>IT Training</option>
                                    <option>IT Outsourcing</option>
                                    <option>Infrastructure & Cloud</option>
                                    <option>Software Development</option>
                                    <option>IT Procurement</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project or challenge…"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all resize-none"
                                />
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
