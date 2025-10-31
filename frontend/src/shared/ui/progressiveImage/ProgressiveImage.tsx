'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProgressiveImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    blurAmount?: number;
    transitionDuration?: number;
    objectFit?: 'cover' | 'contain';
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = (props: ProgressiveImageProps) => {
    const {
        src,
        alt,
        width,
        height,
        className,
        blurAmount = 25,
        transitionDuration = 1000,
        objectFit = 'cover',
    } = props;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoadingComplete={() => setLoaded(true)}
            className={className}
            style={{
                objectFit,
                objectPosition: 'center',
                filter: loaded ? 'blur(0px)' : `blur(${blurAmount}px)`,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'scale(1)' : 'scale(1.03)',
                transition: `
          opacity ${transitionDuration}ms ease,
          filter ${transitionDuration}ms ease,
          transform ${transitionDuration}ms ease
        `,
                width: '100%',
                height: '100%',
            }}
        />
    );
};
