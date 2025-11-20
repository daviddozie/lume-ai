import Image from "next/image"

export const Download = () => {
    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
            <div className="relative rounded-[50px]  overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/download-frame.png')] z-10 bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="relative z-10 flex justify-between px-6 md:px-20 md:pt-30">
                    <div className="md:max-w-[45%]">
                        <h1 className="text-[40px] md:mt-20 font-semibold text-[#F7F7FF] font-recoleta">Download the Lume App</h1>
                        <p className="text-[20px] font-inter text-[#D6D6EF] leading-[35px] pt-2">Find the balance, feel better. Start your journey with Lume today, take control of your mental health one step at a time.</p>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src="/images/phone-frame.png"
                            alt="phone"
                            width={403.33}
                            height={778.29}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}