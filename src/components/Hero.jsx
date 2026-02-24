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
            {/* Subtle decorative elements */}
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

                    {/* Hero Image — young tech team */}
                    <div ref={vizRef} className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-3xl blur-3xl scale-90" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Young tech team collaborating in a modern office"
                                className="w-full h-[480px] object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                            {/* Floating badge */}
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
                            {/* Stats badge */}
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
