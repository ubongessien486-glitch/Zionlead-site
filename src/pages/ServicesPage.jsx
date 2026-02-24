import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Package, Cloud, Code2, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'training',
        icon: GraduationCap,
        title: 'IT Training',
        color: 'from-cyan-500 to-blue-500',
        accent: 'text-cyan-600',
        border: 'border-cyan-200',
        intro: 'We train individuals and corporate teams in:',
        items: [
            'Cloud Computing (Azure, AWS, Google Cloud)',
            'Microsoft 365 and Co-pilot Administration',
            'Cybersecurity & Compliance',
            'DevOps & Automation',
            'Infrastructure Management',
            'Data & Business Intelligence',
        ],
        summary: 'Our training approach is practical, project-based, and industry-aligned, ensuring learners gain real-world experience.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=350&fit=crop',
    },
    {
        id: 'outsourcing',
        icon: Users,
        title: 'IT Outsourcing',
        color: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-600',
        border: 'border-emerald-200',
        intro: 'We provide:',
        items: [
            'IT Support Services',
            'Cloud Administrators',
            'Security Specialists',
            'Infrastructure Engineers',
            'DevOps Engineers',
            'Software Developers',
            'Helpdesk Support',
            'Sales and Marketing Specialists',
            'Accounting Specialists',
        ],
        summary: 'Whether short-term projects or long-term managed services, we deliver reliable and professional expertise.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=350&fit=crop',
    },
    {
        id: 'procurement',
        icon: Package,
        title: 'IT Procurement',
        color: 'from-amber-500 to-emerald-500',
        accent: 'text-amber-600',
        border: 'border-amber-200',
        intro: 'We help organizations source:',
        items: [
            'Servers & Networking Equipment',
            'Laptops & End-user Devices',
            'Microsoft & Enterprise Licenses',
            'CRM (D365, Zoho, HubSpot, Click Up, Monday.com, Salesforce)',
            'Security Solutions',
            'Backup & Storage Systems',
        ],
        summary: 'We ensure authenticity, cost-efficiency, and performance reliability.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=350&fit=crop',
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Infrastructure & Cloud Solutions',
        color: 'from-blue-500 to-cyan-400',
        accent: 'text-blue-600',
        border: 'border-blue-200',
        intro: 'We design and implement:',
        items: [
            'Hybrid Cloud Architectures',
            'On premise Infrastructure Deployment',
            'Cloud Infrastructure Deployments',
            'SaaS Implementation (M365 and Google workspace)',
            'Cloud cost optimization',
            'Virtual Machines & Virtual Desktop Infrastructure',
            'Active Directory & Identity Solutions',
            'Network Security & Firewalls',
            'Backup & Disaster Recovery',
        ],
        summary: 'Our solutions are secure, scalable, and aligned with business goals.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop',
    },
    {
        id: 'software',
        icon: Code2,
        title: 'Software Development',
        color: 'from-violet-500 to-cyan-500',
        accent: 'text-violet-600',
        border: 'border-violet-200',
        intro: 'We build:',
        items: [
            'Custom Business Applications',
            'Web Applications',
            'Automation Systems',
            'ERP & Integration Solutions',
            'API-based Solutions',
        ],
        summary: 'Our development process emphasizes scalability, security, and user experience.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=350&fit=crop',
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Our Services</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        What We <span className="text-gradient-cyan">Do</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Comprehensive IT solutions designed to accelerate your business, from training to cloud, from code to hardware.
                    </p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-20">
                    {services.map((svc, idx) => (
                        <div key={svc.id} id={svc.id} className="scroll-mt-28">
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} p-[1.5px] mb-6`}>
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <svc.icon className={`w-7 h-7 ${svc.accent}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">{svc.title}</h2>
                                    <p className="text-slate-500 text-base mb-5">{svc.intro}</p>
                                    <ul className="space-y-2.5 mb-6">
                                        {svc.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className={`w-5 h-5 ${svc.accent} flex-shrink-0 mt-0.5`} />
                                                <span className="text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-slate-500 italic">{svc.summary}</p>
                                </div>
                                {/* Image */}
                                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className={`rounded-3xl overflow-hidden shadow-xl border ${svc.border}`}>
                                        <img src={svc.image} alt={svc.title} className="w-full h-[320px] object-cover" />
                                    </div>
                                </div>
                            </div>
                            {idx < services.length - 1 && (
                                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-20" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">Ready to get started?</h2>
                    <p className="text-slate-500 mb-8">Let us help you find the right IT solution for your business.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                        Get a Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
