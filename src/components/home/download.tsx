import Image from "next/image"
import { Button } from "../ui/button"
import AppleStoreIcon from "../../../public/icons/apple.svg"
import GoogleStoreIcon from "../../../public/icons/google.svg"

export const Download = () => {
    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
            <div className="relative md:rounded-[50px] rounded-[20px]  overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/download-frame.png')] z-10 bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="relative z-10 flex justify-between p-4 md:px-20 md:pt-30">
                    <div className="md:max-w-[45%]">
                        <h1 className="md:text-[40px] md:mt-20 font-semibold text-[#F7F7FF] font-recoleta">Download the Lume App</h1>
                        <p className="md:text-[20px] text-xs font-inter text-[#D6D6EF] md:leading-[35px] pt-2">Find the balance, feel better. Start your journey with Lume today, take control of your mental health one step at a time.</p>
                        <div className="mt-8 flex items-center md:gap-6 gap-2 w-full ">
                            <Button className="border-2 border-[#3322FC] w-[180px] text-[#F7F7FF] font-semibold font-inter bg-[#5144EA] py-2.5 md:px-[15px] px-2 rounded-[50px] h-[50xp] md:w-[223px] shadow-[inset_0px_4px_4px_0px_#1907F180]">
                                Download App
                                <div className="noise py-1.5 md:px-2.5 px-2 h-[30px] bg w-[60px] flex items-center gap-2 md:gap-4 rounded-[50px]">
                                    <Image src={AppleStoreIcon} alt="apple-icon" />
                                    <Image src={GoogleStoreIcon} alt="google-icon" />
                                </div>
                            </Button>
                            <Button className="md:w-[180px] w-full flex-1 text-[#F7F7FF] font-semibold font-inter h-[50px] rounded-[50px] py-2.5 md:px-[15px] px-2 bg-[linear-gradient(90deg,#0A0450_0%,#150B8E_50%,#0A0450_100%)] shadow-[inset_0px_4px_10px_0px_#F7F7FF80] drop-shadow-[0px_4px_2px_0px_#F7F7FF26]">
                                See how it works
                            </Button>
                        </div>
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