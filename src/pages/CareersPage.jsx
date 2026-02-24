import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Lightbulb, Users, ArrowRight, Mail } from 'lucide-react';

const lookingFor = [
    { icon: Heart, title: 'Passionate learners', desc: 'Curiosity and eagerness to grow in the world of technology.' },
    { icon: Award, title: 'Certified professionals', desc: 'Industry certifications in cloud, security, or related fields.' },
    { icon: Lightbulb, title: 'Problem solvers', desc: 'Creative thinkers who find smart solutions to complex challenges.' },
    { icon: Users, title: 'Team collaborators', desc: 'People who thrive in collaborative, remote-first environments.' },
];

export default function CareersPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Careers</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        Join Our <span className="text-gradient-cyan">Team</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        At Zionlead, we believe in empowering talent and building the next generation of technology leaders.
                    </p>
                </div>
            </section>

            {/* What We Look For */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-3">What we look for</h2>
                        <p className="text-slate-500">The qualities that make a great Zionlead team member</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {lookingFor.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 text-center group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center mx-auto mb-5 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow">
                                    <item.icon className="w-7 h-7 text-cyan-500" />
                                </div>
                                <h3 className="font-montserrat font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Image */}
            <section className="py-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10 h-[350px]">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop" alt="Young diverse tech team collaborating" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-lg">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">Ready to apply?</h2>
                        <p className="text-slate-500 text-lg mb-6">Submit your CV and let us know how you can contribute to our mission.</p>
                        <a href="mailto:careers@zionlead.com.ng" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                            careers@zionlead.com.ng <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
