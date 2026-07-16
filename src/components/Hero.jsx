import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const titleRef2 = useRef(null);
    const textRef = useRef(null);
    const ctaRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
        
        tl.fromTo(titleRef.current, { y: 100, opacity: 0, rotateX: 20 }, { y: 0, opacity: 1, rotateX: 0, delay: 0.2 })
          .fromTo(titleRef2.current, { y: 100, opacity: 0, rotateX: 20 }, { y: 0, opacity: 1, rotateX: 0 }, "-=1")
          .fromTo(textRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
          .fromTo(ctaRef.current, { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.9")
          .fromTo(imgRef.current, { y: 80, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out' }, "-=1");
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[100svh] pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]">
            {/* Very subtle radial light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/40 to-transparent blur-3xl opacity-50 rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
                
                <div className="perspective-1000">
                    <h1 className="font-display font-semibold tracking-tighter text-[2.8rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] text-slate-900 mb-2">
                        <div className="overflow-hidden p-1">
                            <span ref={titleRef} className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600">
                                Perfecting
                            </span>
                        </div>
                        <div className="overflow-hidden p-1">
                            <span ref={titleRef2} className="block">
                                IT Innovation.
                            </span>
                        </div>
                    </h1>
                </div>

                <p ref={textRef} className="text-slate-500 text-base sm:text-xl md:text-2xl font-medium tracking-tight max-w-2xl mt-4 mb-8 text-balance leading-snug px-2">
                    Transforming businesses with premium software development, remote IT management, and elite tech outsourcing.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-3 mb-14 w-full sm:w-auto px-4 sm:px-0">
                    <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 px-7 py-3.5 font-medium text-white bg-black rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl text-sm sm:text-base">
                        Start your project
                    </button>
                    <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 px-7 py-3.5 font-medium text-black bg-slate-100 rounded-full hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                        Explore services <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
                    </button>
                </div>

                {/* Hero Image in dynamic frame */}
                <div ref={imgRef} className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.35/1] mt-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-black/5 bg-slate-100">
                    <img
                        src="/team-photo.png"
                        alt="Young Nigerian and American tech team in suits"
                        className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <button className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-3 flex items-center gap-3 transition-colors duration-300 text-sm font-medium group">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                             <Play className="w-3.5 h-3.5 ml-0.5 fill-black" />
                        </div>
                        Watch our story
                    </button>
                </div>
            </div>
        </section>
    );
}
