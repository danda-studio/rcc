import Logo from "../../../../shared/images/svg/logo.svg";
import Complex from "../../../../shared/images/png/complex.png";
import Flag from "../../../../shared/images/svg/flag.svg"
import Image from "next/image";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl h-250 relative bg-radial-1 overflow-hidden"
        >
            <article className="flex items-center justify-between px-10 mt-10 mb-4">
                <div
                    className="flex items-center border border-white rounded-2xl px-[1rem] py-[0.4rem] gap-[0.5rem]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0) 0%)',
                    }}
                >
                    <Image src={Flag} alt={"Flag"} className="w-[1.5rem] h-[1.5rem]"/>
                    <p className="font-manrope font-medium text-[1.2rem] leading-[100%] text-[rgba(255,255,255,1)]">
                        Мариуполь
                    </p>
                </div>
                <Image src={Logo} alt={"Logo"} className="translate-y-4 w-11.5 h-18"/>
            </article>
            <section className="flex px-10 relative">
                <div className="absolute z-10 flex flex-col items-left justify-center max-w-[40rem]">
                    <h2 className="font-manrope font-medium text-header tracking-[-0.04em] mb-7 bg-test-text">
                        Продажи в новом ЖК "Олимпийский"
                    </h2>
                    <p className="text-[rgba(255,255,255,1)] font-manrope font-medium text-[2.1rem] tracking-[-0.04em]">Место,
                        где хочется жить</p>
                </div>
            </section>
            <article className="absolute right-[-27rem] bottom-0">
                <Image src={Complex} alt="Complex" className="object-cover w-480 h-270"/>
            </article>
        </section>

    );
}
