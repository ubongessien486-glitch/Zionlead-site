import React, { useState } from 'react';
import { Cloud, Shield, Globe, DollarSign, KeyRound, ArrowRight, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

const articles = [
    {
        icon: Cloud,
        title: 'Benefits of Azure Virtual Machines',
        desc: 'Azure VMs give organisations on-demand compute power without the capital cost of physical hardware. From dev/test environments to production workloads, learn how to right-size your VM fleet, leverage reserved instances for up to 72% savings, and use Azure Autoscale to handle traffic spikes automatically.',
        tag: 'Cloud Infrastructure',
        readTime: '5 min read',
        color: 'from-cyan-500 to-blue-500',
    },
    {
        icon: Shield,
        title: 'Why Cloud Security Matters in 2025',
        desc: 'Misconfigured storage buckets, over-privileged identities, and unpatched VMs remain the top three causes of cloud breaches. This guide walks through the shared-responsibility model, essential security controls (MFA, RBAC, encryption-at-rest), and how to implement Microsoft Defender for Cloud at no extra cost.',
        tag: 'Cybersecurity',
        readTime: '7 min read',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        icon: Globe,
        title: 'Remote Infrastructure Best Practices',
        desc: 'Managing IT infrastructure across time zones demands more than VPNs and hope. Discover the toolchain Zionlead uses — from Infrastructure-as-Code with Bicep, to centralised monitoring in Azure Monitor, to automated patch management — so your remote team delivers with confidence.',
        tag: 'Remote Operations',
        readTime: '6 min read',
        color: 'from-violet-500 to-cyan-500',
    },
    {
        icon: DollarSign,
        title: 'IT Cost Optimization Strategies',
        desc: 'Many organisations overspend on cloud by 30–40% simply due to idle resources and wrong VM sizes. We break down practical steps: Azure Cost Management alerts, rightsizing recommendations, Reserved Instances vs. Spot VMs, and tag-based chargeback models that keep every team accountable.',
        tag: 'FinOps',
        readTime: '8 min read',
        color: 'from-amber-500 to-emerald-500',
    },
    {
        icon: KeyRound,
        title: 'Modern Identity & Access Management',
        desc: 'Passwords are no longer enough. We explore how to implement Zero Trust with Azure AD Conditional Access, enforce MFA for all privileged accounts, apply Privileged Identity Management (PIM) for just-in-time access, and audit your IAM posture using Microsoft Secure Score.',
        tag: 'Identity & Security',
        readTime: '6 min read',
        color: 'from-rose-500 to-pink-500',
    },
];

export default function BlogPage() {
    const [email, setEmail] = useState('');
    const [subStatus, setSubStatus] = useState('idle'); // idle | success

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
        setSubStatus('success');
        setEmail('');
    };

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
                        Insights &amp; <span className="text-gradient-cyan">Resources</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Expert perspectives on cloud computing, infrastructure, security, and modern IT strategy — written by practitioners, for practitioners.
                    </p>
                </div>
            </section>

            {/* Articles */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <article key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
                                <div className={`h-2 bg-gradient-to-r ${article.color}`} />
                                <div className="p-7 flex flex-col flex-1">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} p-[1.5px] mb-5 group-hover:scale-110 transition-transform`}>
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <article.icon className="w-6 h-6 text-cyan-600" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    {/* Tag + read time */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-0.5">{article.tag}</span>
                                        <span className="flex items-center gap-1 text-xs text-slate-400">
                                            <Clock className="w-3 h-3" />{article.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-montserrat font-bold text-lg text-slate-800 mb-3 leading-snug">{article.title}</h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{article.desc}</p>
                                    {/* Read More */}
                                    <a
                                        href="mailto:info@zionlead.com.ng?subject=Request full article"
                                        className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-semibold group-hover:gap-2.5 transition-all hover:text-cyan-700"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Request Full Article <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/20 to-emerald-50/20">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">
                        Stay Updated with <span className="text-gradient-cyan">The Cloud Advantage</span>
                    </h2>
                    <p className="text-slate-500 mb-8">
                        Get new articles and practical IT guides delivered directly to your inbox. No spam — unsubscribe anytime.
                    </p>
                    {subStatus === 'success' ? (
                        <div className="flex items-center justify-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl max-w-sm mx-auto">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <p className="text-emerald-800 text-sm font-medium">You're subscribed! We'll be in touch soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex gap-3 max-w-sm mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all text-sm"
                            />
                            <button
                                type="submit"
                                className="px-5 py-3 font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
