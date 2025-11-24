import Image from "next/image"

export const OurMission = () => {
    return (
        <div className="w-[90%] mx-auto md:pt-13 pt-4 mt-10 flex flex-col-reverse md:flex-row justify-between items-center md:gap-14 gap-8">
            <Image src="/images/mission-frame.png" alt="mission-frame" width={991} height={654} className="md:w-[991px] w-full"/>
            <div>
                <h1 className="text-[#111114] font-semibold font-recoleta text-2xl leading-6 mb-6">Our Mission</h1>
                <p className="text-[#696974] font-inter">
                    We believe emotional health is as important as physical health. That’s why we created Lume, to make mental wellbeing accessible, empathetic, and intelligent.
                </p><br />
                <p className="text-[#696974] font-inter">
                    Whether it’s a reflective journaling moment, a guided CBT exercise, or a quiet chat when you need it most, Lume listens, learns, and supports with care.
                </p>
            </div>
        </div>
    )
}