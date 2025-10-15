import Complex from "../../../../shared/images/png/complex.png";
import Image from "next/image";
import {HeroHeader} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/HeroHeader";
import {HeroMainContent} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/HeroMainContent";
import {Button} from "@/shared/ui/button";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl h-250 relative bg-radial-1 overflow-hidden"
        >
            <HeroHeader/>
            <HeroMainContent/>
            <Image src={Complex} alt="Complex" className="absolute max-md:left-1/2 max-md:-translate-x-1/2 bottom-0 md:-right-[26.5rem] w-30 md:w-480 md:h-250"/>
            <Button >aDD</Button>
            <div className=" h-20 blur-[50px] backdrop-blur-[100px] bg-[rgba(3,5,12,0.09)]"></div>
        </section>

    );
}
