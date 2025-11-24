"use client";

import Image from "next/image";
import Slider from "react-slick";

export const HowItWorks = () => {
    const listFAQs = [
        {
            visual: "/images/FAQ.png",
            step: "Step 01",
            title: "Check In",
            alt: "how it works",
            description:
                "Share your mood by typing, speaking, or tapping how you feel. Lume listens and understands.",
        },
        {
            visual: "/images/FAQ-2.png",
            step: "Step 02",
            title: "Receive Insight",
            alt: "how it works",
            description:
                "Get instant, thoughtful guidance or calming exercises crafted to match your emotions in the moment.",
        },
        {
            visual: "/images/FAQ-3.png",
            step: "Step 03",
            title: "Grow with reflection",
            alt: "how it works",
            description:
                "Track your growth, send gentle messages to your future self, and rediscover balance with daily journaling.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
            <div className="max-w-[580px] mx-auto">
                <h1 className="text-center uppercase text-sm font-medium text-[#111114] font-inter">
                    How It Works
                </h1>
                <h1 className="text-2xl md:pb-4 py-2 text-[#111114] font-recoleta font-semibold text-center">
                    How Lume Fits Into Your Day
                </h1>
                <p className="text-[#696974] text-center leading-5 font-inter">
                    Discover how Lume blends compassionate AI, mindful design, and cognitive therapy 
                    to guide you towards emotional clarity, one gentle step at a time.
                </p>
            </div>

            {/* Mobile: Carousel */}
            <div className="md:hidden mt-10">
                <Slider {...settings}>
                    {listFAQs.map((faq, index) => (
                        <div key={index}>
                            <div className=" border border-[#f7f7f7]  bg-[#FBFDFF] w-full rounded-3xl p-6">

                                <Image
                                    src={faq.visual}
                                    alt={faq.alt}
                                    height={307}
                                    width={362}
                                    className="w-full h-[307px] rounded-[11px]"
                                />

                                <div className="shadow-[0px_4px_7.7px_0px_#00000021] mt-6 border-[#DCD9FF] border 
                                    bg-[#F7F7FF] py-1 px-2 w-20 h-[26px] rounded-sm font-medium 
                                    text-[#111114] font-inter text-sm flex items-center justify-center">
                                    {faq.step}
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-semibold text-[#111114] text-2xl font-recoleta">
                                        {faq.title}
                                    </h4>
                                    <p className="text-[#696974] font-inter">
                                        {faq.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex justify-between items-center gap-6 mt-10">
                {listFAQs.map((faq, index) => (
                    <div
                        className="shadow-[-2px_-2px_8px_8px_#00000014] drop-shadow-[0px_4px_7.7px_0px_#00000021] 
                        bg-[#FBFDFF] w-full rounded-3xl p-6"
                        key={index}
                    >
                        <Image
                            src={faq.visual}
                            alt={faq.alt}
                            height={307}
                            width={362}
                            className="w-full h-[307px] rounded-[11px]"
                        />

                        <div className="shadow-[0px_4px_7.7px_0px_#00000021] mt-6 border-[#DCD9FF] border 
                            bg-[#F7F7FF] py-1 px-2 w-20 h-[26px] rounded-sm font-medium 
                            text-[#111114] font-inter text-sm flex items-center justify-center">
                            {faq.step}
                        </div>

                        <div className="pt-4">
                            <h4 className="font-semibold text-[#111114] text-2xl font-recoleta">
                                {faq.title}
                            </h4>
                            <p className="text-[#696974] font-inter">
                                {faq.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
