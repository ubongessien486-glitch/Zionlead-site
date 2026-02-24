import React from 'react';

/**
 * TechServerIllustration — a detailed SVG render of a 3D-style
 * server rack / cloud node visual in cyan & green palette.
 * Used in the Hero section as the main visual.
 */
export function TechServerIllustration({ className = '' }) {
    return (
        <svg
            viewBox="0 0 520 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d2137" />
                    <stop offset="100%" stopColor="#071a30" />
                </linearGradient>
                <linearGradient id="topFace" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0e3348" />
                    <stop offset="100%" stopColor="#0a2537" />
                </linearGradient>
                <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="cyanGlow2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glowFilter">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* ── Background ambient glow ── */}
            <ellipse cx="260" cy="300" rx="220" ry="80" fill="#06b6d4" fillOpacity="0.05" />
            <ellipse cx="260" cy="200" rx="160" ry="120" fill="#10b981" fillOpacity="0.04" />

            {/* ── Server rack body — isometric 3D look ── */}
            {/* Main front face */}
            <rect x="110" y="90" width="300" height="240" rx="8" fill="url(#panelGrad)" stroke="#0e4a5e" strokeWidth="1.5" />

            {/* Top face (isometric cap) */}
            <path d="M110 90 L160 60 L460 60 L410 90 Z" fill="url(#topFace)" stroke="#0e4a5e" strokeWidth="1" />
            {/* Right side face */}
            <path d="M410 90 L460 60 L460 300 L410 330 Z" fill="#071220" stroke="#0e4a5e" strokeWidth="1" />

            {/* ── Server slots (5 rack units) ── */}
            {[0, 1, 2, 3, 4].map((i) => {
                const y = 110 + i * 44;
                const isActive = i === 0 || i === 2 || i === 4;
                return (
                    <g key={i}>
                        {/* Slot panel */}
                        <rect x="125" y={y} width="270" height="34" rx="4" fill="#071a30" stroke="#0c2d40" strokeWidth="1" />
                        {/* Status strip */}
                        <rect x="128" y={y + 3} width="4" height="28" rx="2" fill={isActive ? '#10b981' : '#1e3a4a'} filter={isActive ? 'url(#glowFilter)' : ''} />
                        {/* Drive bays */}
                        {[0, 1, 2, 3].map((d) => (
                            <rect key={d} x={140 + d * 14} y={y + 9} width="10" height="16" rx="2" fill={isActive ? '#0d2f40' : '#0a1e2b'} stroke={isActive ? '#06b6d4' : '#0e2d3a'} strokeWidth="0.5" />
                        ))}
                        {/* Activity LEDs */}
                        {isActive && (
                            <>
                                <circle cx="210" cy={y + 17} r="3" fill="#06b6d4" filter="url(#glowFilter)" opacity={i === 2 ? '1' : '0.7'} />
                                <circle cx="220" cy={y + 17} r="3" fill="#10b981" filter="url(#glowFilter)" opacity="0.8" />
                                <circle cx="230" cy={y + 17} r="2" fill="#06b6d4" filter="url(#glowFilter)" opacity="0.5" />
                            </>
                        )}
                        {/* Port strip on right */}
                        <rect x="300" y={y + 8} width="80" height="18" rx="3" fill="#050f1a" stroke="#0c2d40" strokeWidth="0.5" />
                        {[0, 1, 2, 3, 4, 5].map((p) => (
                            <rect key={p} x={303 + p * 12} y={y + 11} width="8" height="12" rx="1.5"
                                fill={isActive && p < 3 ? '#0d3040' : '#050f1a'}
                                stroke={isActive && p < 3 ? '#06b6d4' : '#0c2030'}
                                strokeWidth="0.5"
                            />
                        ))}
                    </g>
                );
            })}

            {/* ── Glow stripe at front base ── */}
            <rect x="110" y="326" width="300" height="4" rx="2" fill="url(#cyanGlow)" filter="url(#glowFilter)" />

            {/* ── Circuit traces radiating outward ── */}
            {/* Left traces */}
            <path d="M110 150 L60 150 L60 120 L30 120" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
            <path d="M110 200 L70 200 L70 240 L40 240" stroke="#10b981" strokeWidth="0.8" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />
            <path d="M110 270 L55 270" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeOpacity="0.3" strokeDasharray="3 4" />
            {/* Right traces */}
            <path d="M410 160 L450 160 L450 130 L490 130" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
            <path d="M410 210 L460 210 L460 250 L500 250" stroke="#10b981" strokeWidth="0.8" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />

            {/* ── Connection nodes at trace ends ── */}
            <circle cx="30" cy="120" r="4" fill="#06b6d4" filter="url(#glowFilter)" />
            <circle cx="40" cy="240" r="4" fill="#10b981" filter="url(#glowFilter)" />
            <circle cx="490" cy="130" r="4" fill="#06b6d4" filter="url(#glowFilter)" />
            <circle cx="500" cy="250" r="4" fill="#10b981" filter="url(#glowFilter)" />
            <circle cx="55" cy="270" r="3" fill="#06b6d4" fillOpacity="0.7" filter="url(#glowFilter)" />

            {/* ── Floating cloud node top-right ── */}
            <g transform="translate(340,20)">
                <ellipse cx="50" cy="30" rx="48" ry="22" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
                <ellipse cx="30" cy="22" rx="26" ry="20" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
                <ellipse cx="70" cy="18" rx="22" ry="18" fill="#071a30" stroke="#0e4a5e" strokeWidth="1" />
                {/* Cloud glow */}
                <ellipse cx="50" cy="25" rx="40" ry="16" fill="#06b6d4" fillOpacity="0.06" />
                {/* Data arrows */}
                <line x1="50" y1="52" x2="50" y2="70" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="50,75 46,67 54,67" fill="#06b6d4" fillOpacity="0.8" />
            </g>

            {/* ── Floating data widgets ── */}
            {/* CPU widget */}
            <g transform="translate(20,50)">
                <rect width="72" height="52" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
                <text x="8" y="15" fontSize="7" fill="#06b6d4" fontFamily="monospace">CPU</text>
                <rect x="8" y="20" width="56" height="6" rx="2" fill="#050f1a" />
                <rect x="8" y="20" width="42" height="6" rx="2" fill="url(#cyanGlow)" />
                <text x="8" y="38" fontSize="6" fill="#475569" fontFamily="monospace">MEMORY</text>
                <rect x="8" y="41" width="56" height="5" rx="2" fill="#050f1a" />
                <rect x="8" y="41" width="28" height="5" rx="2" fill="url(#cyanGlow2)" />
            </g>

            {/* Uptime widget */}
            <g transform="translate(20,330)">
                <rect width="80" height="44" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
                <circle cx="12" cy="12" r="5" fill="#10b981" filter="url(#glowFilter)" />
                <text x="22" y="16" fontSize="7" fill="#10b981" fontFamily="monospace">ONLINE</text>
                <text x="8" y="30" fontSize="6" fill="#475569" fontFamily="monospace">UPTIME: 99.99%</text>
                <text x="8" y="40" fontSize="6" fill="#06b6d4" fontFamily="monospace">■ 3 NODES ACTIVE</text>
            </g>

            {/* Latency widget right */}
            <g transform="translate(420,320)">
                <rect width="80" height="44" rx="6" fill="#071a30" stroke="#0e3a50" strokeWidth="1" />
                <text x="8" y="14" fontSize="7" fill="#06b6d4" fontFamily="monospace">LATENCY</text>
                <text x="8" y="28" fontSize="14" fill="#ffffff" fontFamily="monospace" fontWeight="bold">2ms</text>
                <text x="8" y="40" fontSize="6" fill="#10b981" fontFamily="monospace">▲ Optimal</text>
            </g>

            {/* ── Bottom shadow line ── */}
            <ellipse cx="260" cy="360" rx="180" ry="16" fill="#06b6d4" fillOpacity="0.07" />
        </svg>
    );
}

/**
 * TechGridBadge — Inline SVG circuit board hexagon badge.
 * Used as accent in section headings.
 */
export function TechHexBadge({ size = 40, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
            <defs>
                <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
            </defs>
            <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="url(#hexGrad)" strokeWidth="1.5" />
            <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" fill="rgba(6,182,212,0.08)" stroke="url(#hexGrad)" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="5" fill="url(#hexGrad)" opacity="0.9" />
        </svg>
    );
}

/**
 * CircuitLines — decorative horizontal SVG circuit board trace pattern.
 */
export function CircuitLines({ className = '' }) {
    return (
        <svg viewBox="0 0 800 120" className={className} preserveAspectRatio="none">
            <defs>
                <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="70%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
            </defs>
            {/* Horizontal PCB traces */}
            {[20, 45, 70, 95].map((y, i) => (
                <line key={i} x1="0" y1={y} x2="800" y2={y} stroke="url(#traceGrad)" strokeWidth="0.8" />
            ))}
            {/* Vertical junctions */}
            {[100, 200, 350, 500, 650, 700].map((x, i) => (
                <g key={i}>
                    <line x1={x} y1="20" x2={x} y2="95" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
                    <circle cx={x} cy={i % 2 === 0 ? 20 : 95} r="3" fill={i % 2 === 0 ? '#06b6d4' : '#10b981'} fillOpacity="0.7" />
                </g>
            ))}
        </svg>
    );
}
