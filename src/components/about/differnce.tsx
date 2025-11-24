import Image from "next/image";

export const Difference = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <div className="md:h-[40%] h-[30%] w-full bg-white" />
                <div className="h-[60%] w-full bg-[#F4F4FF]" />
            </div>
            <div className="relative max-w-[90%] mx-auto px-4 py-20">
                <div className="mx-auto overflow-hidden rounded-3xl shadow-lg">
                    <Image
                        src="/images/difference-hero.png"
                        width={1240}
                        height={700}
                        alt="Person holding a glowing umbrella under the night sky"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="text-center mt-10 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-recoleta font-semibold text-[#111114]">
                        What Makes Lume Different
                    </h2>
                    <p className="text-[#696974] mt-4 font-inter leading-relaxed">
                        Unlike traditional chatbots or wellness apps, Lume doesn't give robotic
                        replies or generic advice. It uses context, tone, and reflection to respond
                        like a friend who understands, helping you.
                    </p>
                </div>
            </div>
        </section>
    );
}
