import Image from "next/image"

export const Hero = () => {
    return (
        <div className="pt-17 mx-auto">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about-hero-frame.png')] z-10 bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 bg-overlay" />
                <div className="relative z-10 flex justify-between p-4 py-20 md:max-w-[60%] mx-auto">
                    <h1 className="md:text-3xl text-sm font-semibold text-[#F7F7FF] tracking-[4%] md:leading-[38px] font-recoleta text-center">
                        At Lume, we make mental well being simple and natural.
                        Our AI brings calm, clarity, and confidence,<br /> anytime,anywhere.
                    </h1>
                </div>
            </div>
            <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10 md:my-20 my-8">
                <div className="max-w-[570px]">
                    <h1 className="text-[#111114] font-semibold text-2xl font-recoleta mb-6">About Lume</h1>
                    <p className="text-[#696974] font-inter">
                        At Lume, we’re a team of designers, psychologists, and engineers driven by a shared belief, that technology should heal, not overwhelm.
                    </p><br />
                    <p className="text-[#696974] font-inter">
                        We created Lume to bridge the gap between human emotion and digital intelligence. Our goal is simple: to make mental wellness feel natural, personal, and stigma-free for everyone.
                    </p><br />
                    <p className="text-[#696974] font-inter">
                        We believe that support should always be accessible, not limited by schedules, costs, or fear of judgment. That’s why every aspect of Lume is built with empathy, privacy, and human understanding at its core.
                    </p><br />
                    <p className="text-[#696974] font-inter">
                        We’re passionate about crafting a product that doesn’t just respond, it connects.
                        From the way Lume listens and learns to how it reflects and encourages, our focus is on designing experiences that remind people they’re not alone in their journey.
                    </p><br />
                    <p className="text-[#696974] font-inter">
                        Every interaction, every insight, every word of comfort within Lume is shaped by a team that genuinely cares, about progress, healing, and the quiet moments of growth that define who we are.
                    </p><br />
                    <p className="text-[#696974] font-inter">
                        Because at Lume, it’s not just about AI.
                        It’s about us, the humans behind it, building light for those who need it most.
                    </p>
                </div>
                <Image src="/images/about-hero.png" alt="about-hero" width={610} height={540} className="w-full" />
            </div>
        </div>
    )
}