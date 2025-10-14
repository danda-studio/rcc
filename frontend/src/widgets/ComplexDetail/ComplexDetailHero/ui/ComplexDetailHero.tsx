// import Logo from "../../../../shared/images/svg/logo.svg";
// import Complex from "../../../../shared/images/png/complex.png";
// import Flag from "../../../../shared/images/svg/flag.svg"
// import Image from "next/image";

export const ComplexDetailHero = () => {
    return (
        <section
            className="rounded-2xl w-full h-[62.5rem] relative overflow-hidden bg-radial-1"
        >
            <article className="flex items-center justify-between px-[2rem] mt-[2.5rem] mb-4">
                <div
                    className="flex items-center border border-white rounded-2xl px-[1rem] py-[0.4rem] gap-[0.5rem]"
                      style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0) 0%)',
                      }}
                >
                    <div className="bg-red absolute top-1/2 left-1/2 h-4.25 w-16">

                    </div>
                    {/* <Icon iconNode={} /> */}
                    {/* <Image src={Flag} alt={"Flag"} className="w-[1.5rem] h-[1.5rem]"/> */}
                    <p className="font-manrope font-medium text-[1.2rem] leading-[100%] text-[rgba(255,255,255,1)]">
                        Мариуполь
                    </p>
                </div>
                {/* <Image src={Logo} alt={"Logo"} className="translate-y-4"/> */}
            </article>
            <section className="flex px-[2rem] relative">
                <div className="absolute z-10 flex flex-col items-left justify-center max-w-[40rem]">
                    <h2 className="font-manrope font-medium text-header tracking-[-0.04em] mb-7 bg-test-text">
                        Продажи в новом ЖК "Олимпийский"
                    </h2>
                    <p className="text-[rgba(255,255,255,1)] font-manrope font-medium text-[2.1rem] tracking-[-0.04em]">Место, где хочется жить</p>
                </div>
            </section>
            <article className="absolute right-[-27rem] bottom-0">
                {/* <Image src={Complex} alt="Complex" className="object-cover"/> */}
            </article>
        </section>
    );
}
