import React, { useState } from 'react';
import { Mail, Globe, Send } from 'lucide-react';

const serviceOptions = [
    'IT Training',
    'IT Outsourcing',
    'IT Procurement',
    'Infrastructure & Cloud',
    'Software Development',
    'Other',
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className="pt-24">
            {/* Page Hero */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/20">
                <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Contact Us</span>
                    </div>
                    <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-slate-800 leading-tight mb-6">
                        Let's Build Something <span className="text-gradient-cyan">Great</span> Together
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                        Whether you need training, infrastructure deployment, outsourcing support, or custom software, we are ready to partner with you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="font-montserrat font-bold text-2xl text-slate-800 mb-6">Get in Touch</h2>
                                <div className="space-y-5">
                                    <a href="mailto:info@zionlead.com.ng" className="flex items-center gap-4 p-4 bg-cyan-50/50 rounded-xl border border-cyan-100 hover:bg-cyan-50 transition-colors group">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-cyan-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Email</p>
                                            <p className="text-slate-700 font-medium group-hover:text-cyan-600 transition-colors">info@zionlead.com.ng</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Operations</p>
                                            <p className="text-slate-700 font-medium">Remote Operations, Serving Clients Globally</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10 h-[280px]">
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8 lg:p-10">
                                <h3 className="font-montserrat font-bold text-xl text-slate-800 mb-6">Send us a message</h3>
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Name</label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all"
                                                placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Company</label>
                                            <input type="text" name="company" value={form.company} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all"
                                                placeholder="Company name" />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Email</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all"
                                                placeholder="email@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Phone</label>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all"
                                                placeholder="+234 xxx xxx xxxx" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1.5">Service Needed</label>
                                        <select name="service" value={form.service} onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all appearance-none">
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1.5">Message</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all resize-none"
                                            placeholder="Tell us about your project..." />
                                    </div>
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300">
                                        <Send className="w-5 h-5" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
