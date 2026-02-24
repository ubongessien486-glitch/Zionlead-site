import React from 'react';
import { Star, Eye, Heart, Lightbulb, Users, Sparkles, Globe, Clock, TrendingDown, Scale } from 'lucide-react';

const coreValues = [
    { icon: Star, title: 'Excellence', desc: 'We pursue the highest standards in every solution we deliver.' },
    { icon: Heart, title: 'Integrity', desc: 'We operate with transparency, honesty, and accountability.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We embrace creativity and forward-thinking to solve complex challenges.' },
    { icon: Users, title: 'Collaboration', desc: 'We work together with clients as true partners in success.' },
    { icon: Sparkles, title: 'Possibility Mind-set', desc: 'We believe in pushing boundaries and pioneering new solutions.' },
];

const remoteAdvantages = [
    { icon: Globe, text: 'Serve clients globally' },
    { icon: TrendingDown, text: 'Reduce operational overhead' },
    { icon: Clock, text: 'Deliver faster turnaround times' },
    { icon: Scale, text: 'Maintain flexibility and scalability' },
];

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">About Us</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        Our <span className="text-gradient-cyan">Story</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Zionlead Technology Limited was founded with a vision to drive technological advancement and empower businesses and individuals through innovation, education, and reliable IT solutions.
                    </p>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mt-4">
                        We recognized the growing need for skilled professionals, scalable infrastructure, and secure digital systems and positioned ourselves as a trusted partner in delivering these solutions.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-3xl p-10 border border-cyan-100">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="font-montserrat font-bold text-2xl text-slate-800 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To empower organizations and individuals with innovative, reliable, and scalable technology solutions that drive growth and excellence.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-violet-50 to-cyan-50 rounded-3xl p-10 border border-violet-100">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-6">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="font-montserrat font-bold text-2xl text-slate-800 mb-4">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To be a globally recognized IT solutions provider known for excellence, innovation, and impact within the technology ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Image */}
            <section className="py-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10 h-[350px]">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" alt="Modern tech office team" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">What Drives Us</span>
                        <h2 className="font-montserrat font-bold text-4xl text-slate-800 mt-3">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {coreValues.map((v, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 text-center group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow">
                                    <v.icon className="w-6 h-6 text-cyan-500" />
                                </div>
                                <h3 className="font-montserrat font-bold text-slate-800 mb-2">{v.title}</h3>
                                <p className="text-slate-500 text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Remote-First Advantage */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                                <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Our Advantage</span>
                            </div>
                            <h2 className="font-montserrat font-bold text-4xl text-slate-800 mb-6">
                                Remote-First <span className="text-gradient-cyan">Advantage</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Zionlead operates remotely, allowing us to deliver faster, leaner, and more flexible services to clients around the world.
                            </p>
                            <div className="space-y-4">
                                {remoteAdvantages.map((a, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 hover:bg-cyan-50/50 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <a.icon className="w-5 h-5 text-cyan-500" />
                                        </div>
                                        <span className="font-medium text-slate-700">{a.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 text-sm mt-6 leading-relaxed">
                                We combine digital collaboration tools with disciplined project management to ensure seamless service delivery.
                            </p>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10">
                                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=500&fit=crop" alt="Remote work setup" className="w-full h-[400px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
