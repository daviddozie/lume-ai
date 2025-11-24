import { Input } from "./ui/input"
import { Button } from "./ui/button"
import facebookIcon from "../../public/icons/facebaook.svg"
import instagramIcon from "../../public/icons/instagram.svg"
import twitterIcon from "../../public/icons/twitter.svg"
import tiktokIcon from "../../public/icons/tiktok.svg"
import linkedinIcon from "../../public/icons/linkedin.svg"
import youtubeIcon from "../../public/icons/youtube.svg"
import Image from "next/image"

export const Footer = () => {

    const navListItem = [
        {
            title: 'Discover',
            navList: [
                "Purpose",
                "Experience",
                "Story",
                "People",
            ]
        },
        {
            title: 'Support',
            navList: [
                "Help centers",
                "Chat us",
                "Mail us",
                "Feedback"
            ]
        },
    ];

    const socialMedia = [
        {
            icon: facebookIcon,
            alt: "facebook-icon",
            path: "#",
        },
        {
            icon: instagramIcon,
            alt: "instagram-icon",
            path: "#",
        },
        {
            icon: twitterIcon,
            alt: "twitter-icon",
            path: "#",
        },
        {
            icon: tiktokIcon,
            alt: "tiktok-icon",
            path: "#",
        },
        {
            icon: linkedinIcon,
            alt: "linkedin-icon",
            path: "#",
        },
        {
            icon: youtubeIcon,
            alt: "youtube-icon",
            path: "#",
        },
    ]

    return (
        <>
            <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
                <div className="flex flex-col md:flex-row items-center md:gap-20 lg:gap-60 gap-10">
                    <div className="md:max-w-[30%]">
                        <h1 className="font-recoleta text-[#111114] leading-[55px] font-medium text-4xl">
                            Stay connected to the future of Lume
                        </h1>
                        <div className="flex gap-2.5 items-center mt-6 mb-2">
                            <Input
                                placeholder="Enter your email..."
                                type="email"
                                className="border border-[#5144EA]/50 md:w-[253px] w-full h-[37px] rounded-[10px] p-2.5 bg-[#F7F7FF] font-inter text-[#696974] text-sm"
                            />
                            <Button className="bg-[#5144EA] text-white h-[37px] py-3 rounded-full transition">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-[#696974] font-inter text-xs">
                            By subscribing you agree to our
                            <span className="font-medium underline pl-1">
                                Privacy Policy
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center md:gap-10 lg:gap-30 w-full justify-between">
                        {navListItem.map((item, index) => (
                            <ul key={index}>
                                <p className="font-recoleta font-semibold text-[18px] text-[#111114] mb-4">{item.title}</p>
                                {item.navList.map((nav, i) => (
                                    <li className="font-inter text-[#111114] py-2 whitespace-nowrap" key={i}>
                                        <a href="#">
                                            {nav}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                        <ul className="hidden md:block">
                            <p className="font-recoleta font-semibold text-[18px] text-[#111114] mb-4">Contact</p>
                            <li className="font-inter text-[#111114] py-2">
                                306, Adrain street, New <br />York, United States.
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                +1212 444 6590
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Info@lume.com
                            </li>
                            <li className="font-inter text-[#111114] py-2.5 flex items-center gap-2">
                                {socialMedia.map((social, index) => (
                                    <a href={social.path} key={index}>
                                        <Image src={social.icon} alt={social.alt} />
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between w-full gap-10 md:hidden">
                        <ul className="">
                            <p className="font-recoleta font-semibold text-[18px] text-[#111114] mb-4">Contact</p>
                            <li className="font-inter text-[#111114] py-2">
                                306, Adrain street, New <br />York, United States.
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                +1212 444 6590
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Info@lume.com
                            </li>
                            <li className="font-inter text-[#111114] py-2.5 flex items-center gap-2">
                                {socialMedia.map((social, index) => (
                                    <a href={social.path} key={index}>
                                        <Image src={social.icon} alt={social.alt} />
                                    </a>
                                ))}
                            </li>
                        </ul>
                        <ul>
                            <p className="font-recoleta font-semibold text-[18px] text-[#111114] mb-4">Legal</p>
                            <li className="font-inter text-[#111114] py-2">
                                Terms of service
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Order of cancelation policy
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Privacy policy
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Cookie policy
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 md:hidden border-b border-[#696974] flex justify-between items-end">
                    <p className="text-[#111114] text-sm font-inter pb-3">© Lume {new Date().getFullYear()}</p>
                    <div className="border border-[#696974] border-b-0 py-[15px] text-center px-2.5 text-[#111114]">
                        <p className="font-recoleta font-semibold">HIPAA</p>
                        <p className="font-recoleta font-semibold">Certified</p>
                        <p className="text-sm">2025</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="mt-40 border-b border-[#696974] flex justify-between items-end">
                        <ul>
                            <p className="font-recoleta font-semibold text-[18px] text-[#111114] mb-4">Legal</p>
                            <li className="font-inter text-[#111114] py-2">
                                Terms of service
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Order of cancelation policy
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Privacy policy
                            </li>
                            <li className="font-inter text-[#111114] py-2">
                                Cookie policy
                            </li>
                        </ul>
                        <p className="text-[#111114] text-sm font-inter pb-3">© Lume {new Date().getFullYear()}</p>
                        <div className="border border-[#696974] border-b-0 py-[15px] text-center px-2.5 text-[#111114]">
                            <p className="font-recoleta font-semibold">HIPAA</p>
                            <p className="font-recoleta font-semibold">Certified</p>
                            <p className="text-sm">2025</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-20 mb-10">
                    <Image src="/images/footer-logo.png" alt="footer-logo" width={1093.13} height={330} />
                </div>
            </div>
        </>
    )
}