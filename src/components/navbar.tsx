"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Resources", href: "/resources" },
    ];

    useEffect(() => {
        gsap.from(headerRef.current, {
            y: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    useEffect(() => {
        const header = headerRef.current;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 10) {
                gsap.to(header, {
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            } else {
                gsap.to(header, {
                    backdropFilter: "blur(0px)",
                    backgroundColor: "rgba(255,255,255,1)",
                    boxShadow: "none",
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            gsap.to(menuRef.current, {
                x: isOpen ? 0 : "100%",
                opacity: isOpen ? 1 : 0,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    }, [isOpen]);

    return (
        <header
            ref={headerRef}
            className="header fixed top-0 left-0 w-full z-50 transition-all font-inter border-b border-[#e3e3e6]"
        >
            <div className="max-w-[95%] mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <a href="/">
                        <Image
                            src="/Lume-Logo.png"
                            alt="Lume Logo"
                            width={100}
                            height={100}
                            className=" object-contain"
                        />
                    </a>
                </div>

                <nav className="hidden md:flex text-sm items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors ${isActive ? "text-black" : "text-gray-700"}`}
                            >
                                {link.name}
                            </a>
                        )
                    })}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button className="border border-gray-400 px-4 py-2 text-gray-700 rounded-full hover:border-[#5144EA] transition">
                        Sign In
                    </Button>
                    <Button className="bg-[#5144EA] text-white py-3 rounded-full hover:bg-[#5144EA] transition">
                        Get Started
                    </Button>
                </div>

                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={menuRef}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className={`md:hidden fixed top-15 left-0 w-full h-screen bg-white flex flex-col p-8 space-y-6 z-40 `}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium text-sm hover:text-[#5144EA] ${isActive ? "text-black" : "text-gray-700"}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        })}

                        <Button className="bg-[#5144EA] px-6 text-white py-3 rounded-full hover:bg-[#5144EA] transition">
                            Log In
                        </Button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
