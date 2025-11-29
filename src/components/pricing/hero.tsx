import { Pricing } from "../pricing"

export const Hero = () => {
    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-20">
            <div className="relative md:rounded-[50px] rounded-[20px]">
                <div
                    className="absolute rounded-4xl inset-0 bg-[url('/images/pricing-frame.png')] z-10 bg-cover bg-center bg-no-repeat"
                />
                <div
                    className="absolute rounded-4xl inset-0 bg-[linear-gradient(167.64deg,rgba(250,249,254,0.2)_37.71%,#6356F8_91.01%)]"
                />
                <Pricing
                    style="z-10 relative bottom-[-70px]"
                />
            </div>
        </div>
    )
}