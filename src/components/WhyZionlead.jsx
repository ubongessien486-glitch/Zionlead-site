import React, { useEffect, useRef } from 'react';
import { Wifi, Award, Layers, Target, Handshake, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: Wifi,
        title: 'Remote-First Efficiency',
        description: 'We operate seamlessly across time zones, delivering top-tier IT services from anywhere in the world without compromising quality or speed.',
        color: 'from-cyan-500 to-blue-500',
        accent: 'text-cyan-600',
    },
    {
        icon: Award,
        title: 'Industry-Certified Experts',
        description: 'Our team holds elite certifications from Microsoft, Cisco, AWS, Google, and more, ensuring every solution is backed by verified expertise.',
        color: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-600',
    },
    {
        icon: Layers,
        title: 'Practical Delivery',
        description: 'Theory means nothing without execution. We focus on hands-on, real-world delivery that creates tangible value and measurable results.',
        color: 'from-violet-500 to-cyan-500',
        accent: 'text-violet-600',
    },
    {
        icon: Target,
        title: 'Business-Focused Solutions',
        description: 'Every technology decision we make is anchored to your business goals, ROI-driven, cost-conscious, and aligned with your growth trajectory.',
        color: 'from-amber-500 to-orange-500',
        accent: 'text-amber-600',
    },
    {
        icon: Handshake,
        title: 'Long-Term Partnership Mindset',
        description: "We're not just vendors, we're strategic partners committed to your success, supporting you long after deployment with care and consistency.",
        color: 'from-rose-500 to-pink-500',
        accent: 'text-rose-600',
    },
];

function ReasonItem({ reason, index }) {
    return (
        <div className="gsap-reason flex gap-5 group">
            {/* Left: number + line */}
            <div className="flex flex-col items-center gap-2 pt-1">
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${reason.color} p-[1.5px] flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow duration-300`}
                >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <reason.icon className={`w-5 h-5 ${reason.accent}`} strokeWidth={1.5} />
                    </div>
                </div>
                {index < reasons.length - 1 && (
                    <div className="w-[1px] flex-1 bg-gradient-to-b from-slate-200 to-transparent min-h-[40px]" />
                )}
            </div>

            {/* Right: content */}
            <div className="pb-10 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className={`w-4 h-4 ${reason.accent} flex-shrink-0`} />
                    <h3 className="font-montserrat font-bold text-slate-800 text-lg">{reason.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
        </div>
    );
}

export default function WhyZionlead() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-reason',
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                '.why-left',
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="why" ref={sectionRef} className="relative py-28 overflow-hidden bg-slate-50/50">
            {/* Decorative ring */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-100 opacity-50 hidden lg:block" />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-emerald-100 opacity-50 hidden lg:block" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left: sticky header + image */}
                    <div className="why-left lg:sticky lg:top-32">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Why Choose Us</span>
                        </div>
                        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 leading-tight mb-6">
                            The Zionlead<br />
                            <span className="text-gradient-cyan">Advantage</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            We combine deep technical expertise with a genuine partnership approach, delivering IT excellence that aligns with your unique business needs and long-term vision.
                        </p>

                        {/* Team image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10 mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=400&fit=crop"
                                alt="Young tech professionals strategizing together"
                                className="w-full h-[260px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[
                                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
                                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
                                        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
                                    ].map((src, i) => (
                                        <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                    ))}
                                </div>
                                <span className="text-white text-sm font-medium drop-shadow-lg">Our Expert Team</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 text-sm"
                        >
                            Partner With Us
                            <Handshake className="w-4 h-4" />
                        </button>

                        {/* Mini trust bar */}
                        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                            <p className="text-xs text-slate-400 mb-3 uppercase tracking-widest">Trusted by Teams in</p>
                            <div className="flex items-center gap-3 flex-wrap">
                                {['Finance', 'Healthcare', 'Education', 'Enterprise', 'Government'].map((org) => (
                                    <span key={org} className="text-xs px-3 py-1 bg-slate-50 rounded-full text-slate-600 border border-slate-100">
                                        {org}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: reasons list */}
                    <div>
                        {reasons.map((reason, i) => (
                            <ReasonItem key={reason.title} reason={reason} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
