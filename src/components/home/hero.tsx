import { Button } from "../ui/button"
import Image from "next/image"

export const Hero = () => {
    return (
        <>
            <div className="pt-[120px] w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row justify-between w-full items-start">
                    <div className="md:max-w-[50%] ">
                        <h1 className="font-recoleta md:text-5xl text-3xl text-center md:text-start font-black md:leading-14 leading-10">Light For the Moments <br /> That Feel Heavy</h1>
                        <p className="md:text-xl text-center md:text-start font-inter text-gray-500 md:leading-8 py-6">Lume helps you track emotions, talk through your thoughts, and find balance again.</p>
                        <div className="flex flex-col md:flex-row items-center gap-4 font-inter">
                            <Button className="bg-purple-600 md:w-[155px] w-full px-6 text-white py-3 rounded-full hover:bg-purple-700 transition">
                                Try Lume Free
                            </Button>
                            <Button className="border w-full md:w-[205px] border-gray-400 px-6 py-2 text-gray-700 rounded-full hover:border-purple-600 transition">
                                See How Lume Works
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center w-full md:w-[436px] pt-8 md:pt-0">
                        <Image src="/images/hero-testimonies.png" alt="hero-img" className="w-full" width={436} height={274} />
                    </div>
                </div>
                <div className="flex md:flex-nowrap justify-between items-start gap-6 py-10">
                    <div className=" w-[697px]">
                        <Image
                            src="/images/meditate-img.png"
                            alt="meditate-img"
                            width={697}
                            height={531}
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-6 w-[530px]">
                        <Image
                            src="/images/training-img.png"
                            alt="training-img"
                            width={530}
                            height={251}
                            className="rounded-xl object-cover"
                        />
                        <Image
                            src="/images/learning-img.png"
                            alt="learning-img"
                            width={530}
                            height={251}
                            className="rounded-t-xl object-cover"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}