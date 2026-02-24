import React from 'react';
import { Cloud, Shield, Globe, DollarSign, KeyRound, ArrowRight } from 'lucide-react';

const topics = [
    { icon: Cloud, title: 'Benefits of Azure Virtual Machines', desc: 'Explore how Azure VMs can provide scalable, cost-effective, computing power for your organization.', color: 'from-cyan-500 to-blue-500' },
    { icon: Shield, title: 'Why Cloud Security Matters', desc: 'Understanding the critical importance of securing your cloud infrastructure and data.', color: 'from-emerald-500 to-teal-500' },
    { icon: Globe, title: 'Remote Infrastructure Best Practices', desc: 'Key strategies for managing and maintaining IT infrastructure in a remote-first environment.', color: 'from-violet-500 to-cyan-500' },
    { icon: DollarSign, title: 'IT Cost Optimization Strategies', desc: 'Practical approaches to reducing IT spend without compromising on quality or performance.', color: 'from-amber-500 to-emerald-500' },
    { icon: KeyRound, title: 'Modern Identity & Access Management', desc: 'How to implement robust IAM solutions that balance security with user experience.', color: 'from-rose-500 to-pink-500' },
];

export default function BlogPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">The Cloud Advantage</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        Insights & <span className="text-gradient-cyan">Resources</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Expert perspectives on cloud computing, infrastructure, security, and modern IT strategy.
                    </p>
                </div>
            </section>

            {/* Blog Topics */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
                                <div className="p-7">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} p-[1.5px] mb-5 group-hover:scale-110 transition-transform`}>
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <topic.icon className="w-6 h-6 text-cyan-600" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-montserrat font-bold text-lg text-slate-800 mb-3">{topic.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{topic.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-cyan-600 text-sm font-semibold group-hover:gap-2 transition-all">
                                        Coming Soon <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-16 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">
                        Stay Updated with <span className="text-gradient-cyan">The Cloud Advantage</span>
                    </h2>
                    <p className="text-slate-500 mb-8">We are building a library of expert insights. Follow our journey.</p>
                </div>
            </section>
        </div>
    );
}
