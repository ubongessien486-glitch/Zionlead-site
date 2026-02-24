import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PenTool, Rocket, Headphones, ArrowRight } from 'lucide-react';

const steps = [
    {
        num: '01',
        icon: Search,
        title: 'Discovery',
        desc: 'We understand your business goals, challenges, and technical requirements.',
        color: 'from-cyan-500 to-blue-500',
        accent: 'text-cyan-600',
    },
    {
        num: '02',
        icon: PenTool,
        title: 'Strategy & Design',
        desc: 'We architect solutions that align with your business objectives.',
        color: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-600',
    },
    {
        num: '03',
        icon: Rocket,
        title: 'Implementation',
        desc: 'We deploy secure, scalable, and efficient solutions.',
        color: 'from-violet-500 to-cyan-500',
        accent: 'text-violet-600',
    },
    {
        num: '04',
        icon: Headphones,
        title: 'Support & Optimization',
        desc: 'We provide continuous support and performance optimization.',
        color: 'from-amber-500 to-emerald-500',
        accent: 'text-amber-600',
    },
];

export default function ApproachPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Our Approach</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        How We <span className="text-gradient-cyan">Work</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        A structured, transparent, and results-driven process that takes your project from concept to completion.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <div key={step.num} className="relative flex gap-8 group">
                                {/* Timeline */}
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[2px] flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all z-10`}>
                                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                            <step.icon className={`w-7 h-7 ${step.accent}`} />
                                        </div>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-[2px] flex-1 bg-gradient-to-b from-cyan-200 to-emerald-100 min-h-[60px]" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className="pb-16 pt-2">
                                    <span className={`text-xs font-bold tracking-widest ${step.accent} uppercase`}>Step {step.num}</span>
                                    <h3 className="font-montserrat font-bold text-2xl text-slate-800 mt-1 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed max-w-xl">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">
                        Ready to start your <span className="text-gradient-cyan">journey</span>?
                    </h2>
                    <p className="text-slate-500 mb-8">Let's take the first step together. Schedule a free consultation today.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                        Get a Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
