import Logo from "../../../../shared/images/svg/logo.svg";
import Flag from "../../../../shared/images/svg/flag.svg"
import Image from "next/image";

export const HeroHeader = () => {
    return (
        <article className="flex items-center justify-between px-10 mt-12">
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
    )
}
