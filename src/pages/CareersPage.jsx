import React, { useState } from 'react';
import { Heart, Award, Lightbulb, Users, ArrowRight, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const lookingFor = [
    { icon: Heart, title: 'Passionate learners', desc: 'Curiosity and eagerness to grow in the world of technology.' },
    { icon: Award, title: 'Certified professionals', desc: 'Industry certifications in cloud, security, or related fields.' },
    { icon: Lightbulb, title: 'Problem solvers', desc: 'Creative thinkers who find smart solutions to complex challenges.' },
    { icon: Users, title: 'Team collaborators', desc: 'People who thrive in collaborative, remote-first environments.' },
];

const openRoles = [
    {
        title: 'Cloud Infrastructure Engineer',
        type: 'Full-time',
        location: 'Remote (Nigeria)',
        department: 'Engineering',
        color: 'from-cyan-500 to-blue-500',
        summary: 'Design, deploy, and manage scalable cloud infrastructure on Microsoft Azure for our growing client base across Africa and beyond.',
        responsibilities: [
            'Provision and manage Azure resources (VMs, VNets, Storage, AKS)',
            'Implement IaC using Bicep or Terraform',
            'Monitor infrastructure health and respond to incidents',
            'Collaborate with clients to migrate on-premises workloads to the cloud',
            'Document infrastructure designs and runbooks',
        ],
        requirements: [
            'Azure Administrator Associate (AZ-104) certification or equivalent',
            '2+ years of hands-on Azure/cloud experience',
            'Proficiency in PowerShell or Bash scripting',
            'Strong understanding of networking (DNS, VPNs, firewalls)',
            'Excellent written English communication',
        ],
    },
    {
        title: 'IT Training Facilitator',
        type: 'Contract / Part-time',
        location: 'Remote',
        department: 'Training',
        color: 'from-emerald-500 to-teal-500',
        summary: 'Deliver engaging, practical IT training sessions — from Microsoft 365 fundamentals to Azure certifications — to professionals across our client organisations.',
        responsibilities: [
            'Develop and update training curricula and lab exercises',
            'Deliver live virtual training sessions (Zoom / Teams)',
            'Assess learner progress and provide constructive feedback',
            'Create supporting materials (slide decks, lab guides, quizzes)',
            'Stay current with latest Microsoft certifications and exam objectives',
        ],
        requirements: [
            'Microsoft Certified Trainer (MCT) or demonstrable teaching experience',
            'Expertise in at least two: M365, Azure, Security+, or networking',
            'Strong presentation and communication skills',
            'Ability to simplify complex technical concepts',
            'Reliable internet connection and quiet workspace',
        ],
    },
    {
        title: 'Junior Software Developer',
        type: 'Full-time',
        location: 'Remote (Nigeria)',
        department: 'Software Development',
        color: 'from-violet-500 to-cyan-500',
        summary: 'Join our software team to build modern web applications and internal tools that solve real business problems for our clients.',
        responsibilities: [
            'Build and maintain web applications using React and Node.js',
            'Collaborate with designers and senior engineers on feature development',
            'Write clean, well-documented, testable code',
            'Participate in code reviews and agile sprint ceremonies',
            'Debug and resolve issues reported by QA and clients',
        ],
        requirements: [
            '1+ years of professional experience with React or Vue.js',
            'Comfortable with REST APIs and version control (Git)',
            'Basic understanding of cloud deployments (Vercel, Azure, or similar)',
            'Eagerness to learn and take ownership of tasks',
            'Portfolio of personal or professional projects',
        ],
    },
];

function RoleCard({ role }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${role.color}`} />
            <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`text-xs font-semibold text-white bg-gradient-to-r ${role.color} rounded-full px-3 py-0.5`}>
                                {role.department}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <Clock className="w-3 h-3" />{role.type}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <MapPin className="w-3 h-3" />{role.location}
                            </span>
                        </div>
                        <h3 className="font-montserrat font-bold text-xl text-slate-800">{role.title}</h3>
                    </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{role.summary}</p>

                {/* Expand toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-5"
                >
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {open ? 'Hide details' : 'View full description'}
                </button>

                {/* Expandable details */}
                {open && (
                    <div className="border-t border-slate-100 pt-5 space-y-5 mb-5">
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-3 uppercase tracking-wider">Responsibilities</h4>
                            <ul className="space-y-2">
                                {role.responsibilities.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-3 uppercase tracking-wider">Requirements</h4>
                            <ul className="space-y-2">
                                {role.requirements.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Apply CTA */}
                <a
                    href={`mailto:careers@zionlead.com.ng?subject=Application for ${encodeURIComponent(role.title)}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r ${role.color} rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-300`}
                >
                    Apply for This Role <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

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
                        At Zionlead, we believe in empowering talent and building the next generation of technology leaders. Work remotely. Grow fast. Make a real impact.
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
                    <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-500/10 h-[500px]">
                        <img src="/team-photo.png" alt="Young diverse tech team collaborating" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-xs font-semibold text-emerald-600 border border-emerald-200 mb-4">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            {openRoles.length} Positions Open
                        </div>
                        <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-3">Open Positions</h2>
                        <p className="text-slate-500">All roles are fully remote. Apply directly by email with your CV and a short cover note.</p>
                    </div>
                    <div className="space-y-6">
                        {openRoles.map((role, i) => <RoleCard key={i} role={role} />)}
                    </div>
                </div>
            </section>

            {/* General Apply CTA */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-lg">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-montserrat font-bold text-3xl text-slate-800 mb-4">Don't see your role?</h2>
                        <p className="text-slate-500 text-lg mb-6">
                            We are always looking for talented people. Send us your CV and tell us how you can contribute — we review all applications.
                        </p>
                        <a href="mailto:careers@zionlead.com.ng" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                            careers@zionlead.com.ng <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
