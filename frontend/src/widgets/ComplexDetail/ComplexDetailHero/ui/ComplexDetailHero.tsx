import Logo from "../../../../shared/images/svg/logo.svg";
import Complex from "../../../../shared/images/png/complex.png";
import Flag from "../../../../shared/images/svg/flag.svg"
import Image from "next/image";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl h-250 relative bg-radial-1 overflow-hidden"
        >
            <article className="flex items-center justify-between px-10 mt-12 mb-5">
                <div
                    className="flex items-center border border-white rounded-2xl px-4 py-2 gap-2 bg-radial-hero"
                >
                    <Image src={Flag} alt={"Flag"} className="w-6 h-6"/>
                    <p className="font-manrope font-medium text-[1.2rem] leading-[100%] text-[rgba(255,255,255,1)]">
                        Мариуполь
                    </p>
                </div>
                <Image src={Logo} alt={"Logo"} className="translate-y-3 w-11.5 h-18"/>
            </article>
            <section className="flex px-10 relative">
                <div className="absolute z-10 flex flex-col items-left justify-center max-w-222 gap-6">
                    <h2 className="font-manrope font-medium text-header tracking-[-0.04em] bg-test-text">
                        Продажи в новом ЖК "Олимпийский"
                    </h2>
                    <p className="font-manrope font-medium text-subtitle-hero tracking-[-0.04em] text-a">
                        Место, где хочется жить
                    </p>
                </div>
            </section>
            <article className="absolute right-[-26.5rem] bottom-0">
                <Image src={Complex} alt="Complex" className="object-cover w-480 h-250"/>
            </article>
        </section>

    );
}
