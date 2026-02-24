import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Users, Cloud, Code2, Package, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: GraduationCap,
        title: 'IT Training',
        tagline: 'Knowledge Empowers',
        description: 'Equipping individuals and organizations with practical, hands-on technology skills that drive real-world impact and career excellence.',
        color: 'from-cyan-500 to-blue-500',
        accent: 'text-cyan-600',
        border: 'border-cyan-200/60',
        hoverBorder: 'hover:border-cyan-400',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop',
        features: ['Corporate Training', 'Certification Prep', 'Hands-on Labs'],
    },
    {
        icon: Users,
        title: 'IT Outsourcing',
        tagline: 'Expert Talent On-Demand',
        description: 'Providing expert IT professionals and fully managed services so you stay focused on your core business while we handle the technology.',
        color: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-600',
        border: 'border-emerald-200/60',
        hoverBorder: 'hover:border-emerald-400',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop',
        features: ['Managed IT Services', 'Staff Augmentation', 'Remote Teams'],
    },
    {
        icon: Cloud,
        title: 'Infrastructure & Cloud',
        tagline: 'Secure. Scalable. Resilient.',
        description: 'Designing, deploying, and managing secure, scalable IT environments including cloud migration, hybrid infrastructure, and network engineering.',
        color: 'from-blue-500 to-cyan-400',
        accent: 'text-blue-600',
        border: 'border-blue-200/60',
        hoverBorder: 'hover:border-blue-400',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
        features: ['Cloud Migration', 'Network Design', 'Disaster Recovery'],
    },
    {
        icon: Code2,
        title: 'Software Development',
        tagline: 'Built for Your Business',
        description: 'Building powerful, custom-tailored applications, from web platforms to enterprise systems, engineered for performance, security, and scale.',
        color: 'from-violet-500 to-cyan-500',
        accent: 'text-violet-600',
        border: 'border-violet-200/60',
        hoverBorder: 'hover:border-violet-400',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
        features: ['Web Applications', 'Mobile Apps', 'API Integration'],
    },
    {
        icon: Package,
        title: 'IT Procurement',
        tagline: 'Genuine. Reliable. Affordable.',
        description: 'Sourcing genuine hardware and software solutions from trusted vendors, ensuring quality, warranty, and value for every technology investment.',
        color: 'from-amber-500 to-emerald-500',
        accent: 'text-amber-600',
        border: 'border-amber-200/60',
        hoverBorder: 'hover:border-amber-400',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
        features: ['Hardware Supply', 'Software Licensing', 'Vendor Management'],
    },
];

function ServiceCard({ service, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`gsap-scale-in relative bg-white rounded-2xl border ${service.border} ${service.hoverBorder} shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 group cursor-pointer transition-all duration-500 overflow-hidden`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Service image */}
            <div className="relative h-44 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                {/* Icon badge */}
                <div className={`absolute bottom-0 left-6 translate-y-1/2 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-[1.5px] shadow-lg z-10`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <service.icon className={`w-7 h-7 ${service.accent}`} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <div className="p-7 pt-10">
                {/* Tagline */}
                <p className={`text-xs font-semibold tracking-widest uppercase ${service.accent} mb-2`}>
                    {service.tagline}
                </p>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-xl text-slate-800 mb-3 group-hover:text-gradient-cyan transition-all">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                        <span
                            key={f}
                            className={`text-xs px-3 py-1 rounded-full border ${service.border} ${service.accent} bg-slate-50`}
                        >
                            {f}
                        </span>
                    ))}
                </div>

                {/* Learn More */}
                <button className={`flex items-center gap-1 text-sm font-medium ${service.accent} group/btn`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-scale-in',
                { opacity: 0, scale: 0.9, y: 40 },
                {
                    opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="relative py-28 overflow-hidden bg-white">
            {/* Decorative orbs */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[100px]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">What We Do</span>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                    </div>
                    <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 mb-4">
                        Our <span className="text-gradient-cyan">Services</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Comprehensive IT solutions designed to accelerate your business, from training to cloud, from code to hardware.
                    </p>
                </div>

                {/* Cards grid — 3+2 layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {services.slice(0, 3).map((svc, i) => (
                        <ServiceCard key={svc.title} service={svc} index={i} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.67%+8px)] mx-auto">
                    {services.slice(3).map((svc, i) => (
                        <ServiceCard key={svc.title} service={svc} index={i + 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}
