import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Globe, Shield, Cpu, GraduationCap, Users, Cloud, Code2, Package, Wifi, Award, Layers, Target, Handshake, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { icon: GraduationCap, title: 'IT Training', desc: 'Equipping individuals and organizations with practical, hands-on technology skills.', color: 'from-cyan-500 to-blue-500', accent: 'text-cyan-600' },
    { icon: Users, title: 'IT Outsourcing', desc: 'Providing expert IT professionals and managed services to support your operations.', color: 'from-emerald-500 to-teal-500', accent: 'text-emerald-600' },
    { icon: Cloud, title: 'Infrastructure & Cloud', desc: 'Designing secure, scalable IT environments on-premises and in the cloud.', color: 'from-blue-500 to-cyan-400', accent: 'text-blue-600' },
    { icon: Code2, title: 'Software Development', desc: 'Building powerful custom applications tailored to your business needs.', color: 'from-violet-500 to-cyan-500', accent: 'text-violet-600' },
    { icon: Package, title: 'IT Procurement', desc: 'Sourcing genuine hardware and software solutions at competitive value.', color: 'from-amber-500 to-emerald-500', accent: 'text-amber-600' },
];

const reasons = [
    { icon: Wifi, title: 'Remote-first efficiency', color: 'text-cyan-600' },
    { icon: Award, title: 'Industry-certified experts', color: 'text-emerald-600' },
    { icon: Layers, title: 'Practical, hands-on delivery', color: 'text-violet-600' },
    { icon: Target, title: 'Business-focused solutions', color: 'text-amber-600' },
    { icon: Handshake, title: 'Long-term partnership mindset', color: 'text-rose-600' },
];

export default function HomePage() {
    const heroTitle = useRef(null);
    const heroSub = useRef(null);
    const heroCta = useRef(null);
    const heroImg = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(heroTitle.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
            .fromTo(heroSub.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
            .fromTo(heroCta.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
            .fromTo(heroImg.current, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'back.out(1.2)' }, '-=0.8');
    }, []);

    return (
        <>
            {/* ── HERO ────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-xs font-semibold text-cyan-600 border border-cyan-200 mb-8 tracking-wider uppercase">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                Premier IT Solutions Company
                            </div>
                            <h1 ref={heroTitle} className="font-montserrat font-black text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
                                <span className="text-slate-800 block">Pioneering</span>
                                <span className="text-gradient-cyan block">Possibilities…</span>
                            </h1>
                            <p ref={heroSub} className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mb-10">
                                We design, build, and manage innovative IT solutions that transform businesses{' '}
                                <em className="text-cyan-600 not-italic font-medium">remotely</em>,{' '}
                                <em className="text-emerald-600 not-italic font-medium">efficiently</em>, and{' '}
                                <em className="text-slate-800 not-italic font-medium">excellently</em>.
                            </p>
                            <div ref={heroCta} className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="group flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                                    Get a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/services" className="group flex items-center justify-center gap-2 px-8 py-4 font-semibold text-cyan-600 border border-cyan-300 rounded-full hover:border-cyan-500 hover:bg-cyan-50 hover:scale-105 transition-all duration-300">
                                    Explore Our Services <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                </Link>
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
                        <div ref={heroImg} className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-3xl blur-3xl scale-90" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/50">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Young tech team collaborating" className="w-full h-[480px] object-cover" />
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

            {/* ── WHO WE ARE ──────────────────────────────────── */}
            <section className="relative py-24 overflow-hidden bg-slate-50/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-100/30 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Who We Are</span>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 leading-tight mb-6">
                                Your Trusted Partner in{' '}
                                <span className="text-gradient-cyan">Digital Transformation</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-4">
                                <span className="text-slate-800 font-semibold">Zionlead Technology Limited</span> is a premier IT solutions company dedicated to excellence in training, outsourcing, infrastructure deployment, procurement, and software development.
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed mb-4">
                                We operate remotely with a global mindset, delivering secure, scalable, and cost-effective technology solutions to organizations of all sizes.
                            </p>
                            <p className="text-slate-800 text-lg font-semibold mb-2">We are not just service providers.</p>
                            <p className="text-gradient-cyan text-xl font-bold mb-8">We are technology partners.</p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                                Learn More About Us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=500&fit=crop" alt="Team collaboration" className="w-full h-[400px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE SNAPSHOT CARDS ───────────────────────── */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[100px]" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-[100px]" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400 rounded-full" />
                            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">What We Do</span>
                            <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                        </div>
                        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 mb-4">
                            Our <span className="text-gradient-cyan">Services</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {services.slice(0, 3).map((svc) => (
                            <Link key={svc.title} to="/services" className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 group">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} p-[1.5px] mb-5 group-hover:scale-110 transition-transform`}>
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                        <svc.icon className={`w-7 h-7 ${svc.accent}`} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="font-montserrat font-bold text-lg text-slate-800 mb-2">{svc.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.67%+8px)] mx-auto">
                        {services.slice(3).map((svc) => (
                            <Link key={svc.title} to="/services" className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 group">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} p-[1.5px] mb-5 group-hover:scale-110 transition-transform`}>
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                        <svc.icon className={`w-7 h-7 ${svc.accent}`} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="font-montserrat font-bold text-lg text-slate-800 mb-2">{svc.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                            View All Services <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY ZIONLEAD? ───────────────────────────────── */}
            <section className="relative py-24 overflow-hidden bg-slate-50/50">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                                <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Why Choose Us</span>
                            </div>
                            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 leading-tight mb-8">
                                Why <span className="text-gradient-cyan">Zionlead</span>?
                            </h2>
                            <div className="space-y-5">
                                {reasons.map((r, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                                            <r.icon className={`w-5 h-5 ${r.color}`} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className={`w-4 h-4 ${r.color} flex-shrink-0`} />
                                            <span className="font-semibold text-slate-700">{r.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/approach" className="inline-flex items-center gap-2 mt-8 text-cyan-600 font-semibold hover:gap-3 transition-all">
                                See Our Approach <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop" alt="Team strategizing" className="w-full h-[400px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
