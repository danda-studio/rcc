import {ContainerBlure} from "@/widgets/ComplexDetail/ComplexDetailHero/ui/ContainerBlure";
import Image from "next/image";
import Armor from "../../../../shared/images/svg/armor.svg"

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
            <div className="flex relative z-10">
                <Image src={Armor} alt={"Armor"} className="w-23 h-23"/>
                <ContainerBlure title={"от 11500р"} subTitle={"Платеж по ипотеке"}/>
                <ContainerBlure title={"от 2%"} subTitle={"Ипотека"}/>
            </div>
        </section>
    )
}
