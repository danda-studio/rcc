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
            {/* <article className="absolute md:-right-[26.5rem] bottom-0"> */}
            <Image src={Complex} alt="Complex" className="absolute max-md:left-1/2 max-md:-translate-x-1/2 bottom-0 md:-right-[26.5rem] w-30 md:w-480 md:h-250"/>
            {/* </article> */}

            <Button size="lg" >aDD</Button>
        </section>

    );
}
