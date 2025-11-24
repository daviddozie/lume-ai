import Image from "next/image"

export const Numbers = () => {

    const chart = [
        {
            count: "120K+",
            title: "Daily Mindful Moments",
            description: "Guided reflections, journaling, and micro-practices completed by users every single day.",
        },
        {
            count: "35+",
            title: "Countries Reached",
            description: "Lume is being used across the world, from students to professionals seeking calm.",
        },
        {
            count: "75K+",
            title: "AI Conversations That Listen",
            description: "Empathetic chats that help users process thoughts, feelings, and daily emotions safely.",
        },
        {
            count: "4.9/5",
            title: "User Satisfaction",
            description: "Because every interaction is designed with empathy, privacy, and trust at its core.",
        },
    ]

    return (
        <div className="w-[90%] mx-auto md:mt-18">
            <div className="flex md:justify-between md:items-center flex-col md:flex-row">
                <h1 className="text-2xl text-start font-recoleta font-semibold text-[#111114] mb-4">Lume In Numbers</h1>
                <p className="text-[#696974] font-inter">
                    A quick look at how far we've come in lighting up lives and fostering emotional<br /> well-being.
                </p>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-15">
                <Image src="/images/number-img.png" alt="numbers" width={610} height={513} className="w-full"/>
                <div className="grid grid-cols-2 gap-10">
                    {chart.map((charts, index) => (
                        <div key={index}>
                            <h1 className="font-black text-[#111114] font-recoleta md:text-[40px] text-2xl">{charts.count}</h1>
                            <p className="font-semibold text-[#111114] font-recoleta md:text-2xl text-sm py-2">{charts.title}</p>
                            <p className="text-[#696974] md:text-base text-[10px] font-inter">{charts.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
