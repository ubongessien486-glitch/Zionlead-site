import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
    'IT Training',
    'IT Outsourcing',
    'IT Procurement',
    'Infrastructure & Cloud',
    'Software Development',
    'Other',
];

const INITIAL_FORM = { name: '', email: '', service: '', message: '' };

export default function Contact() {
    const sectionRef = useRef(null);

    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const errors = {};
        if (!form.name.trim()) errors.name = 'Name is required.';
        if (!form.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            errors.email = 'Enter a valid email address.';
        }
        if (!form.message.trim()) errors.message = 'Message is required.';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name.trim(),
                    company: '',
                    email: form.email.trim(),
                    phone: '',
                    service: form.service,
                    message: form.message.trim(),
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            setStatus('success');
            setForm(INITIAL_FORM);
            setFieldErrors({});
        } catch (err) {
            console.error('[Contact] Submission error:', err.message);
            setErrorMsg(err.message || 'Failed to send your message. Please try again later.');
            setStatus('error');
        }
    };

    const isLoading = status === 'loading';

    return (
        <section id="contact" ref={sectionRef} className="relative py-28 overflow-hidden bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-50/50 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400 rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">Get In Touch</span>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                    </div>
                    <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 mb-4">
                        Ready to <span className="text-gradient-cyan">Transform</span> Your Business?
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Let's start a conversation. Our experts are ready to design the perfect IT solution for your needs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact info cards */}
                    <div className="space-y-5">
                        {[
                            { icon: Mail, label: 'Email Us', value: 'info@zionlead.com.ng', sub: 'We reply within 24 hours' },
                            { icon: Phone, label: 'Call Us', value: '+1 (800) ZIONLEAD', sub: 'Mon-Fri, 9am–6pm UTC' },
                            { icon: MapPin, label: 'Remote-First', value: 'Global Operations', sub: 'Serving clients worldwide' },
                        ].map(({ icon: Icon, label, value, sub }) => (
                            <div key={label} className="contact-card bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-100 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow">
                                    <Icon className="w-6 h-6 text-cyan-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 tracking-wider uppercase mb-1">{label}</p>
                                    <p className="font-semibold text-slate-800 text-base">{value}</p>
                                    <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-cyan-500 transition-colors" />
                            </div>
                        ))}
                    </div>

                    {/* Quick Contact Form */}
                    <div className="contact-card bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50">
                        <h3 className="font-montserrat font-bold text-xl text-slate-800 mb-6">Send Us a Message</h3>

                        {/* Success Banner */}
                        {status === 'success' && (
                            <div className="mb-5 flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <p className="text-emerald-800 text-sm font-medium leading-relaxed">
                                    Thank you for contacting Zionlead. We have received your message and will get back to you shortly.
                                </p>
                            </div>
                        )}

                        {/* Error Banner */}
                        {status === 'error' && errorMsg && (
                            <div className="mb-5 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <p className="text-red-800 text-sm font-medium leading-relaxed">{errorMsg}</p>
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    placeholder="Your full name"
                                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                />
                                {fieldErrors.name && <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>}
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">
                                    Email Address <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    placeholder="you@company.com"
                                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                />
                                {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">Service Interest</label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select a service…</option>
                                    {serviceOptions.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase tracking-wide mb-1.5 block">
                                    Message <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    disabled={isLoading}
                                    placeholder="Tell us about your project or challenge…"
                                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                />
                                {fieldErrors.message && <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                id="contact-section-submit-btn"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
