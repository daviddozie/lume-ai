'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SearchIcon } from "lucide-react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const faqData = {
    General: [
        {
            question: "What is Lume?",
            answer: "Lume is an AI-powered mental wellness companion that helps you track your mood, receive personalized guidance, and grow through reflection.",
        },
        {
            question: "How does Lume use AI for mental health?",
            answer: "Lume uses compassionate AI to understand your emotions and provide thoughtful guidance tailored to your needs in the moment.",
        },
        {
            question: "Does Lume connect me to a community?",
            answer: "Yes! Lume offers community features where you can connect with others on similar wellness journeys in a safe, supportive environment.",
        },
        {
            question: "Is Lume free to use?",
            answer: "Lume offers a free tier with basic features. Premium plans unlock advanced AI insights, unlimited journaling, and exclusive content.",
        },
        {
            question: "How do I create an account?",
            answer: "Simply download the app, tap 'Sign Up', and follow the easy steps to create your personalized Lume account.",
        },
        {
            question: "Does Lume share data with therapists or third parties?",
            answer: "No. Your data is private and encrypted. We never share your personal information with third parties without your explicit consent.",
        },
    ],
    Pricing: [
        {
            question: "Is Lume free to use?",
            answer: "Lume offers a free tier with basic features. Premium plans unlock advanced AI insights, unlimited journaling, and exclusive content.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time from your account settings. No questions asked.",
        },
    ],
    User: [
        {
            question: "How do I create an account?",
            answer: "Simply download the app, tap 'Sign Up', and follow the easy steps to create your personalized Lume account.",
        },
        {
            question: "Can I use Lume on multiple devices?",
            answer: "Yes! Your Lume account syncs across all your devices - phone, tablet, and web.",
        },
        {
            question: "How do I reset my password?",
            answer: "Click 'Forgot Password' on the login screen, and we'll send you a secure reset link via email.",
        },
    ],
    Policy: [
        {
            question: "Does Lume share data with therapists or third parties?",
            answer: "No. Your data is private and encrypted. We never share your personal information with third parties without your explicit consent.",
        },
        {
            question: "How is my data protected?",
            answer: "We use bank-level encryption and security protocols to ensure your mental health data remains completely private and secure.",
        },
        {
            question: "What should I do if the app is not working perfectly?",
            answer: "Contact our support team at support@lume.app or use the in-app chat. We typically respond within 24 hours.",
        },
    ],
};

export const FAQ = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleItem = useCallback((value: string) => {
        setOpenItem(prev => prev === value ? null : value);
    }, []);

    const tabs = useMemo(
        () => ["General", "Pricing", "User", "Policy"],
        []
    );

    const [activeTab, setActiveTab] = useState<keyof typeof faqData>("General");

    const filteredFaqs = useMemo(() => {
        const currentFaqs = faqData[activeTab];

        if (!searchQuery.trim()) {
            return currentFaqs;
        }

        return currentFaqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [activeTab, searchQuery]);

    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentTab = tabRefs.current[tabs.indexOf(activeTab)];
        if (currentTab) {
            setUnderlineStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
            });
        }
    }, [activeTab, tabs]);

    useEffect(() => {
        setOpenItem(null);
    }, [activeTab]);

    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
            <div className="max-w-[580px] mx-auto">
                <h1 className="text-center uppercase text-sm font-medium text-[#111114] font-inter">
                    faq
                </h1>
                <h1 className="text-2xl md:pb-4 py-2 text-[#111114] font-recoleta font-semibold text-center">
                    We Have answers
                </h1>
                <p className="text-[#696974] text-center leading-5 font-inter">
                    Got questions? We've got you covered. Find clear answers about how Lume supports your mental wellness journey.
                </p>
            </div>

            <div className="relative border border-[#5144EA] my-6  w-full md:w-[506px] h-11 mx-auto rounded-[100px] flex items-center">
                <SearchIcon className="absolute left-4 w-5 h-5 text-[#696974]" />
                <Input
                    placeholder="What can we help you find?"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-none h-full w-full rounded-[100px] pl-12 pr-32"
                />
                <Button className="absolute right-1 bg-[#5144EA] text-[#F7F7FF] h-9 w-[108px] p-2.5 rounded-[100px] hover:bg-[#5144EA]">
                    Search
                </Button>
            </div>

            <div className="relative space-x-6 flex justify-center">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        ref={(el) => {
                            if (el) tabRefs.current[index] = el;
                        }}
                        onClick={() => setActiveTab(tab as keyof typeof faqData)}
                        className={`pb-4 cursor-pointer uppercase transition-colors duration-200 ${activeTab === tab
                            ? "text-black font-bold"
                            : "text-[#696974] hover:text-gray-600"
                            }`}>
                        {tab}
                    </button>
                ))}

                {/* Underline animation */}
                <span
                    className="absolute bottom-3 h-1 rounded-xl bg-[#406CF4] transition-all duration-300 ease-in-out"
                    style={{ left: underlineStyle.left, width: underlineStyle.width }}
                />
            </div>

            <div className="flex-1 mt-10">
                {filteredFaqs.length > 0 ? (
                    <div className="w-full grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {filteredFaqs
                                .filter((_, index) => index % 2 === 0)
                                .map((item, index) => {
                                    const originalIndex = index * 2;
                                    const value = `item-${originalIndex}`;
                                    const isOpen = openItem === value;

                                    return (
                                        <AccordionItem
                                            key={value}
                                            value={value}
                                            className="font-work-sans border border-[#5144EA80] transition-all duration-300 rounded-2xl bg-[#F7F7FF]">
                                            <AccordionTrigger
                                                className="font-bold text-lg flex items-center w-full p-4"
                                                onClick={() => toggleItem(value)}
                                                icon={
                                                    <span>
                                                        {isOpen ? (
                                                            <ChevronUp className="text-[#5144EA]" />
                                                        ) : (
                                                            <ChevronDown className="text-[#5144EA]" />
                                                        )}
                                                    </span>
                                                }>
                                                <span className={`font-recoleta ${isOpen ? 'text-[#5144EA]' : 'text-[#111114]'}`}>
                                                    {item.question}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-[#4B525A] text-base p-4">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
                        </Accordion>

                        {/* Right Column */}
                        <Accordion type="single" collapsible className="w-full space-y-6">
                            {filteredFaqs
                                .filter((_, index) => index % 2 === 1)
                                .map((item, index) => {
                                    const originalIndex = index * 2 + 1;
                                    const value = `item-${originalIndex}`;
                                    const isOpen = openItem === value;

                                    return (
                                        <AccordionItem
                                            key={value}
                                            value={value}
                                            className="font-work-sans border border-[#5144EA80] transition-all duration-300 rounded-2xl bg-[#F7F7FF]">
                                            <AccordionTrigger
                                                className="font-bold text-lg flex items-center w-full p-4"
                                                onClick={() => toggleItem(value)}
                                                icon={
                                                    <span>
                                                        {isOpen ? (
                                                            <ChevronUp className="text-[#5144EA]" />
                                                        ) : (
                                                            <ChevronDown className="text-[#5144EA]" />
                                                        )}
                                                    </span>
                                                }>
                                                <span className={`font-recoleta ${isOpen ? 'text-[#5144EA]' : 'text-[#111114]'}`}>
                                                    {item.question}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-[#4B525A] text-base p-4">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
                        </Accordion>
                    </div>
                ) : (
                    <p className="text-center text-[#696974] mt-10">No results found. Try a different search term.</p>
                )}
            </div>
            <div className="w-full flex justify-center mt-10 mb-6">
                <Button className=" bg-[#5144EA] text-[#F7F7FF] h-9 w-[153px] p-2.5 rounded-[100px] hover:bg-[#5144EA]">
                    Ask Questions
                </Button>
            </div>
            <p className="text-[#696974] text-center">
                Have more questions? 
                <a href="#">
                    <span className="text-[#5144EA] font-medium underline">See full FAQ here</span>
                </a>
            </p>
        </div>
    )
}