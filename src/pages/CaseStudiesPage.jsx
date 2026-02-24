import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Mail, Code2 } from 'lucide-react';

const caseStudies = [
    {
        icon: Cloud,
        title: 'Azure Infrastructure Deployment for Financial Firm',
        desc: 'Designed and implemented a secure hybrid cloud infrastructure with backup and disaster recovery.',
        tags: ['Azure', 'Hybrid Cloud', 'Disaster Recovery'],
        color: 'from-cyan-500 to-blue-500',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop',
    },
    {
        icon: Mail,
        title: 'Microsoft 365 Transformation for SME',
        desc: 'Migrated legacy email systems to Microsoft 365 and improved collaboration efficiency by 45%.',
        tags: ['Microsoft 365', 'Migration', 'Collaboration'],
        color: 'from-emerald-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop',
    },
    {
        icon: Code2,
        title: 'Custom ERP Integration Project',
        desc: 'Built API integrations between finance and HR systems to automate workflows.',
        tags: ['ERP', 'API Integration', 'Automation'],
        color: 'from-violet-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=350&fit=crop',
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Our Work</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        Case <span className="text-gradient-cyan">Studies</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Real-world projects that showcase our capabilities and impact.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-12">
                    {caseStudies.map((cs, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">
                            <div className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? '' : ''}`}>
                                <div className={`relative h-[300px] lg:h-auto overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className={`p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cs.color} p-[1.5px] mb-5`}>
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <cs.icon className="w-6 h-6 text-cyan-600" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-montserrat font-bold text-2xl text-slate-800 mb-3">{cs.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-5">{cs.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cs.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full border border-cyan-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">
                        Want similar results for your <span className="text-gradient-cyan">business</span>?
                    </h2>
                    <p className="text-slate-500 mb-8">Let's discuss how we can help transform your IT infrastructure.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                        Start a Project <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
