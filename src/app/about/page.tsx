import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/about/hero";
import { OurMission } from "@/components/about/our-mission";
import { Difference } from "@/components/about/differnce";
import { Numbers } from "@/components/about/numbers";
import { Download } from "@/components/download";
import { Footer } from "@/components/footer";

const About = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OurMission />
            <Difference />
            <Numbers />
            <Download />
            <Footer />
        </>
    )
}

export default About;
