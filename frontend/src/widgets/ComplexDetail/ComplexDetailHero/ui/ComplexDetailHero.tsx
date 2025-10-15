import Complex from "../../../../shared/images/png/complex.png";
import Image from "next/image";
import {HeroHeader} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/HeroHeader";
import {HeroMainContent} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/HeroMainContent";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl h-250 relative bg-radial-1 overflow-hidden"
        >
            <HeroHeader/>
            <HeroMainContent/>
            <article className="absolute right-[-26.5rem] bottom-0">
                <Image src={Complex} alt="Complex" className="object-cover w-480 h-250"/>
            </article>
        </section>

    );
}
