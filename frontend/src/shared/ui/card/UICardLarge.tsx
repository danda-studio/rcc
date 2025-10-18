import {ReactNode} from "react";
import Image from 'next/image';
type CardProps = {
    imageSrc?: string;
    title?: ReactNode;
    subtitle?: string;
    description?: ReactNode;
    bgColor?: string;
};

export const UICardLarge = ({ imageSrc, title, subtitle,bgColor,description }: CardProps) => {
    return (
        <div
            className={`
        relative flex flex-col justify-between w-[440px] h-[594px] overflow-hidden p-6 text-white
        ${bgColor ?? 'bg-gray-1'} 
      `}
        >
            <div className="absolute inset-y-0 left-0 flex items-center">
                {imageSrc && (
                    <Image
                        width={416}
                        height={594}
                        src={imageSrc}
                        alt={imageSrc}
                        className=""
                    />
                )}

            </div>

            {/* Контент */}
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-baseline">
                    <p className="text-6xl font-medium text-blue-6">{title}</p>
                    <p className="ml-1.5 text-2-3xl font-medium text-blue-6">{subtitle}</p>
                </div>

                <div>
                    <p className="text-md font-medium text-gray-4" >{description}</p>
                </div>
            </div>
        </div>
    );
};

