import {ContainerBlure} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/ContainerBlure";
import Image from "next/image";
import Armor from "../../../../shared/images/svg/armor.svg"
import Procent from "../../../../shared/images/png/procent.png"
import Ceil from "../../../../shared/images/png/ceil.png"

export const HeroMainContent = () => {
    return (
        <section className="flex px-10">
            <div className="flex flex-col items-left justify-center max-w-222 gap-6">
                <h2 className="font-manrope font-medium text-header tracking-[-0.04em] bg-test-text">
                    Продажи в новом ЖК "Олимпийский"
                </h2>
                <p className="font-manrope font-medium text-subtitle-hero tracking-[-0.04em] text-subtitle">
                    Место, где хочется жить
                </p>
            </div>
            <div className="flex relative z-10 gap-68.5">
                <div сlassNames="flex">
                    <Image src={Armor} alt={"Armor"} className="w-23 h-23"/>
                    <Image src={Procent} alt={"Procent"} className="w-47.75 h-42"/>
                </div>
                <Image src={Ceil} alt={"Ceil"} className="w-78.5 h-42"/>
            </div>
        </section>
    )
}
