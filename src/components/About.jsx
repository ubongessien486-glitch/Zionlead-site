import React, { useEffect, useRef } from 'react';
import { Building2, Globe2, Users, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CircuitLines } from './TechIllustrations';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Globe2, value: '12+', label: 'Countries Reached' },
    { icon: Building2, value: '8+', label: 'Years of Excellence' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: textRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                }
            );
            gsap.fromTo(imgRef.current,
                { opacity: 0, scale: 0.85 },
                {
                    opacity: 1, scale: 1, duration: 1.1, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: imgRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                }
            );
            gsap.fromTo(statsRef.current.querySelectorAll('.stat-card'),
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.4)',
                    scrollTrigger: { trigger: statsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden bg-slate-50/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-100/30 rounded-full blur-3xl" />

            {/* Circuit divider at top */}
            <div className="absolute top-0 left-0 right-0 h-[120px] opacity-30">
                <CircuitLines className="w-full h-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section tag */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-[2px] w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                    <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Who We Are</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-16 items-center">
                    {/* Image — LEFT */}
                    <div ref={imgRef} className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-cyan-100/20 rounded-3xl blur-2xl" />
                        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10 border border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=700&fit=crop"
                                alt="Young professionals collaborating on tech solutions"
                                className="w-full h-[420px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                            {/* Floating label */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-semibold text-slate-700">Enterprise-Grade Infrastructure</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">Trusted by 500+ businesses globally</p>
                            </div>
                        </div>
                    </div>

                    {/* Text — CENTRE */}
                    <div ref={textRef} className="lg:col-span-1">
                        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 leading-tight mb-6">
                            Your Trusted Partner in{' '}
                            <span className="text-gradient-cyan">Digital Transformation</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-6">
                            <span className="text-slate-800 font-semibold">Zionlead Technology Limited</span> is a premier IT solutions company delivering{' '}
                            <span className="text-cyan-600 font-medium">secure</span>,{' '}
                            <span className="text-emerald-600 font-medium">scalable</span>, and{' '}
                            <span className="text-cyan-500 font-medium">cost-effective</span> technology solutions with a remote-first, global mindset.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            From infrastructure and cloud to bespoke software, we bridge the gap between technology and business outcomes, enabling organizations to operate with excellence and agility.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full" />
                            <span className="text-slate-400 text-sm font-medium italic">Remote-first. Globally Minded.</span>
                        </div>
                    </div>

                    {/* Stats — RIGHT */}
                    <div ref={statsRef} className="grid grid-cols-2 gap-4">
                        {stats.map(({ icon: Icon, value, label }, i) => (
                            <div key={i} className="stat-card bg-white rounded-2xl p-5 border border-slate-100 shadow-md shadow-slate-100 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow">
                                    <Icon className="w-5 h-5 text-cyan-500" />
                                </div>
                                <div className="font-montserrat font-bold text-3xl text-gradient-cyan mb-1">{value}</div>
                                <div className="text-slate-400 text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
