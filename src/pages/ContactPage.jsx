import React, { useState } from 'react';
import { Mail, Globe, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const serviceOptions = [
    'IT Training',
    'IT Outsourcing',
    'IT Procurement',
    'Infrastructure & Cloud',
    'Software Development',
    'Other',
];

const INITIAL_FORM = { name: '', company: '', email: '', phone: '', service: '', message: '' };

export default function ContactPage() {
    usePageMeta('Contact Us', 'Get in touch with Zionlead Technology Limited. Send us a message for IT training, outsourcing, cloud infrastructure, software development or procurement enquiries.');
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear field error on change
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
            errors.email = 'Please enter a valid email address.';
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
                    company: form.company.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
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
            console.error('[ContactPage] Submission error:', err.message);
            setErrorMsg(err.message || 'Failed to send your message. Please try again later.');
            setStatus('error');
        }
    };

    const isLoading = status === 'loading';

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

                                {/* Success Banner */}
                                {status === 'success' && (
                                    <div className="mb-6 flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-emerald-800 text-sm font-medium leading-relaxed">
                                            Thank you for contacting Zionlead. We have received your message and will get back to you shortly.
                                        </p>
                                    </div>
                                )}

                                {/* Error Banner */}
                                {status === 'error' && errorMsg && (
                                    <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-red-800 text-sm font-medium leading-relaxed">{errorMsg}</p>
                                    </div>
                                )}

                                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">
                                                Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                                placeholder="Your name"
                                            />
                                            {fieldErrors.name && (
                                                <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={form.company}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                                placeholder="Company name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">
                                                Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                                placeholder="email@example.com"
                                            />
                                            {fieldErrors.email && (
                                                <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1.5">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                                placeholder="+234 xxx xxx xxxx"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1.5">Service Needed</label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all appearance-none disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-1.5">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            disabled={isLoading}
                                            className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed ${fieldErrors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}
                                            placeholder="Tell us about your project..."
                                        />
                                        {fieldErrors.message && (
                                            <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        id="contact-page-submit-btn"
                                        disabled={isLoading}
                                        className="w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-slate-400">
                                        Fields marked <span className="text-red-400">*</span> are required.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
