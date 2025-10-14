import Logo from "../../../../shared/images/svg/logo.svg";
import Complex from "../../../../shared/images/png/complex.png";
import Flag from "../../../../shared/images/svg/flag.svg"
import Image from "next/image";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl w-full h-[62.5rem] relative overflow-hidden
            bg-[linear-gradient(180deg,#345783_0%,#192435_27%,#101828_54%,#03050C_79%,#01050C_100%)]"
        >

            <article className="flex items-center justify-between px-[2rem] mt-[2.5rem]">
                <div className="flex items-center border border-white rounded-2xl ">
                    <Image src={Flag} alt={"Flag"} className="w-[2.4rem] h-[2.4rem]" />
                    <p className="font-manrope font-medium text-[2rem] leading-[100%] text-[rgba(255,255,255,1)]">
                        Мариуполь
                    </p>
                </div>
                <Image src={Logo} alt={"Logo"}/>
            </article>
            <article className="absolute right-[-27rem] bottom-0">
                <Image src={Complex} alt="Complex" className="object-cover"/>
            </article>
        </section>
    );
}
