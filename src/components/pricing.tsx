'use client'

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { CheckCheck } from "lucide-react";

const tabs = ["Monthly", "Yearly"];

interface Plan {
    price: string;
    name: string;
    description?: string;
    duration?: string;
    features: string[];
}

interface PricingProps {
    style?: string;
}

export const Pricing = ({style}: PricingProps) => {

    const [currentPricing, setCurrentPricing] = useState<string>("Monthly");
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentTab = tabRefs.current[tabs.indexOf(currentPricing)];
        if (currentTab) {
            setUnderlineStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
            });
        }
    }, [currentPricing]);

    const plansData: Record<string, Plan[]> = {
        Monthly: [
            {
                price: "$0",
                name: "Starter Plan",
                duration: "per Month",
                description: "Perfect on getting started on your mental wellness journey",
                features: [
                    "Access to daily mood tracker by reflecting each day",
                    "AI powered journaling by writing freely and with feed...",
                    "3 guided journaling to you relax, sleep better and relax...",
                    "Limited AI checkups per week from your companion",
                    "Basic dashboard insights, visualize your mood with AI",
                ],
            },
            {
                price: "$9",
                name: "Premium plan",
                duration: "per Month",
                description: "Get full access to personalized tools for deep emotional growth ",
                features: [
                    "Unlimited AI check-ins by talking to Lume anytime you..",
                    "Voice & Text based reflection speak your thought aloud...",
                    "Advanced emotional analytics showing your thought.... ",
                    "Personalized growth plans and adapt based response...",
                    "Priority support whenever you need help with your app",
                ],
            },
            {
                price: "$14",
                name: "Professional plan",
                duration: "per Month",
                description: "Perfect on getting started on your mental wellness journey",
                features: [
                    "Custom AI coaching plans from your reflections habits...",
                    "1 on 1 virtual sessions with licensed therapist to direct...",
                    "Deep emotional insights and cognitive tracking beyond... ",
                    "Therapist backed emotional modules to explore struct...",
                    "Integration with Apple health & Google fitness for strong...",
                ],
            },
        ],
        Yearly: [
            {
                price: "$0",
                name: "Starter Plan",
                duration: "per Year",
                description: "Perfect on getting started on your mental wellness journey",
                features: [
                    "Access to daily mood tracker by reflecting each day",
                    "AI powered journaling by writing freely and with feed...",
                    "3 guided journaling to you relax, sleep better and relax...",
                    "Limited AI checkups per week from your companion",
                    "Basic dashboard insights, visualize your mood with AI",
                ],
            },
            {
                price: "$84",
                name: "Premium plan",
                duration: "per Year",
                description: "Get full access to personalized tools for deep emotional growth",
                features: [
                    "Unlimited AI check-ins by talking to Lume anytime you..",
                    "Voice & Text based reflection speak your thought aloud...",
                    "Advanced emotional analytics showing your thought.... ",
                    "Personalized growth plans and adapt based response...",
                    "Priority support whenever you need help with your app",
                ],
            },
            {
                price: "$136",
                name: "Professional plan",
                duration: "per Year",
                description: "Perfect on getting started on your mental wellness journey",
                features: [
                    "Custom AI coaching plans from your reflections habits...",
                    "1 on 1 virtual sessions with licensed therapist to direct...",
                    "Deep emotional insights and cognitive tracking beyond...",
                    "Therapist backed emotional modules to explore struct...",
                    "Integration with Apple health & Google fitness for strong...",
                ],
            },
        ],
    };

    const plans: Plan[] = plansData[currentPricing];

    return (
        <div className={`w-[90%] mx-auto ${style}`}>
            <div className="max-w-[580px] mx-auto mb-10">
                <h1 className="text-center uppercase text-sm font-medium text-[#111114] font-inter">Pricing</h1>
                <h1 className="text-2xl md:pb-4 py-2 text-[#111114] font-recoleta font-semibold text-center">
                    Invest in your peace of mind
                </h1>
                <p className="text-[#696974] text-center leading-5 font-inter">
                    Choose a plan that meets your mental health needs, start free and grow at your own pace with Lume.
                </p>
            </div>
            <div className="bg-[#DCD9FF] w-[222px] p-2 mx-auto mb-8 border border-[#5144EA] rounded-[100px]">
                <div className="flex relative justify-between">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            ref={(el) => {
                                if (el) tabRefs.current[index] = el;
                            }}
                            onClick={() => setCurrentPricing(tab)}
                            className={`cursor-pointer py-2 w-[107px] z-10 transition-colors duration-200 ${currentPricing === tab
                                ? "text-white"
                                : "text-[#111114] hover:text-gray-700"
                                }`}>
                            {tab}
                        </button>
                    ))}

                    <span
                        className="absolute w-[107px] bottom-0 h-full bg-[#5144EA] rounded-[100px] transition-all duration-300 ease-in-out"
                        style={{ left: underlineStyle.left, width: underlineStyle.width }}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center gap-6 flex-col md:flex-row">
                {plans.map((plan, index) => (
                    <div className="border border-[#DCD9FF] bg-[#F7F7FF] rounded-3xl w-full p-6" key={index}>
                        <h4 className="text-[#111114] font-semibold font-recoleta text-[20px]">{plan.name}</h4>
                        <p className="text-[#696974] text-xs font-inter pt-3 pb-5">{plan.description}</p>
                        <div className=" ">
                            <span className="font-bold font-inter text-[#111114] text-[40px]">{plan.price}</span>
                            <span className="text-[#696974] text-xs font-inter">{plan.duration}</span>
                        </div>
                        <Button className="bg-transparent border my-4 h-12 border-[#5144EA] p-3 rounded-[100px] w-full font-inter font-medium text-[#5144EA]">Get Started</Button>
                        <ul className="space-y-4 font-inter">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3">
                                    <CheckCheck className=" text-[#696974]" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}