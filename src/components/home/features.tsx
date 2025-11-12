"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Features = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const cards = containerRef.current.querySelectorAll<HTMLElement>(".feature-card");

        const tl = gsap.from(cards, {
            y: 50,
            opacity: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto">
            <div className="max-w-[560px] mx-auto">
                <h1 className="text-center uppercase text-sm font-medium text-[#111114] font-inter">Our Features</h1>
                <h1 className="text-2xl md:pb-6 md:pt-4 py-2 text-[#111114] font-recoleta font-semibold text-center">Every Feature, Designed To Listen</h1>
                <p className="text-[#696974] text-center leading-5 font-inter">Lume learns your moods, understands your patterns, and offers the right care, exactly when you need it.</p>
            </div>

            {/* card images section */}
            <div ref={containerRef} className="md:mt-10 mt-6 flex flex-col md:flex-row items-start gap-4">
                <div className="flex flex-col gap-4 w-full">
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature1.png" alt="feature1" width={400} height={540} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature2.png" alt="feature2" width={400} height={540} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature11.png" alt="feature3" width={400} height={353} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature4.png" alt="feature4" width={400} height={353} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature5.png" alt="feature5" width={400} height={353} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature6.png" alt="feature6" width={400} height={540} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                    <motion.div className="feature-card overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src="/images/feature7.png" alt="feature7" width={400} height={540} className="w-full md:w-[400px] object-cover" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
