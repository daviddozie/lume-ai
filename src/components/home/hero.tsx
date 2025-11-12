"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const Hero = () => {
    const headings: string[][] = [
        ["Light For the Moments", "That Feel Heavy"],
        ["You Are Not Alone", "We're Here With You"],
        ["Make Every Day", "A Step Forward"],
        ["Balance Your Mind", "Embrace the Present"],
    ];

    const [index, setIndex] = useState(0);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        // rotate every 3.5s
        intervalRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % headings.length);
        }, 3500);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (!headingRef.current) return;
        let tl: any | null = null;
        let mounted = true;

        (async () => {
            const gsapModule = await import("gsap");
            if (!mounted) return;
            const gsap = (gsapModule && (gsapModule.default ?? gsapModule)) as any;
            const el = headingRef.current as HTMLElement;
            tl = gsap.timeline();
            tl.fromTo(
                el,
                { scale: 0.995, y: 6, opacity: 0.96 },
                { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            );
        })();

        return () => {
            mounted = false;
            if (tl && typeof tl.kill === "function") tl.kill();
        };
    }, [index]);

    const lineVariants: Variants = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.45, ease: "easeIn" } },
    };

    return (
        <div className="pt-[120px] w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row justify-between w-full items-start">
                <div className="md:max-w-[50%]">
                    <div ref={headingRef} className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={index}
                                className="font-recoleta md:text-5xl text-3xl text-center md:text-start font-black md:leading-14 leading-10"
                                variants={lineVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <span>{headings[index][0]}</span>
                                <br />
                                <span className="block">{headings[index][1]}</span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <motion.p className="md:text-xl text-center md:text-start font-inter text-gray-500 md:leading-8 py-6 reveal"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.08 }}>
                        Lume helps you track emotions, talk through your thoughts, and find balance again.
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center gap-4 font-inter">
                        <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                            <Button className="bg-[#5144EA] md:w-[155px] w-full px-6 text-white py-3 rounded-full hover:bg-[#5144EA] transition">
                                Try Lume Free
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                            <Button className="border w-full md:w-[205px] border-gray-400 px-6 py-2 text-gray-700 rounded-full hover:border-[#5144EA] transition">
                                See How Lume Works
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center w-full md:w-[436px] pt-8 md:pt-0 parallax">
                    <Image
                        src="/images/hero-testimonies.png"
                        alt="hero-img"
                        className="w-full"
                        width={436}
                        height={274}
                    />
                </div>
            </div>

            <div className="flex md:flex-nowrap justify-between items-start gap-3 md:gap-4 lg:gap-6 py-10">
                <div className=" w-[697px]">
                    <Image
                        src="/images/meditate-img.png"
                        alt="meditate-img"
                        width={697}
                        height={531}
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 w-[530px]">
                    <Image
                        src="/images/training-img.png"
                        alt="training-img"
                        width={530}
                        height={251}
                        className="rounded-xl object-cover"
                    />
                    <Image
                        src="/images/learning-img.png"
                        alt="learning-img"
                        width={530}
                        height={251}
                        className="rounded-t-xl object-cover"
                    />
                </div>
            </div>

        </div>
    );
};
