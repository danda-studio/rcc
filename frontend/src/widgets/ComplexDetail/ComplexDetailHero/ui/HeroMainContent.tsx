import Image from "next/image";
import Armor from "../../../../shared/images/png/armor.png"
import Procent from "../../../../shared/images/png/procent.png"
import Ceil from "../../../../shared/images/png/ceil.png"

export const HeroMainContent = () => {
    return (
        <section className="flex px-10">
            <div className="flex flex-col items-left max-w-222">
                <h2 className="font-manrope font-medium text-header-md md:text-header tracking-[-0.04em] bg-test-text mb-6">
                    Продажи в новом ЖК "Олимпийский"
                </h2>
                <p className="font-manrope font-medium text-subtitle-hero tracking-[-0.04em] text-subtitle">
                    Место, где хочется жить
                </p>
            </div>
            <div className="flex relative z-10 gap-41.5">
                <div className="flex flex-col gap-59">
                    <Image src={Armor} alt={"Armor"} className="w-23 h-23 translate-x-37 translate-y-22"/>
                    <Image src={Procent} alt={"Procent"} className="w-47.75 h-42 translate-x-40 translate-y-22"/>
                </div>
                <Image src={Ceil} alt={"Ceil"} className="w-78.5 h-42 translate-x-40 translate-y-42"/>
            </div>
        </section>
    )
}
