"use client";

import React from "react";
import { Container } from "./Container";
import Image from "next/image";

const brands = [
    { name: "Amazon", src: "/img/brands/amazon.svg" },
    { name: "Microsoft", src: "/img/brands/microsoft.svg" },
    { name: "Netflix", src: "/img/brands/netflix.svg" },
    { name: "Sony", src: "/img/brands/sony.svg" },
    { name: "Verizon", src: "/img/brands/verizon.svg" },
];

export const TrustedBy = () => {
    return (
        <div className="py-8 sm:py-12 bg-black overflow-hidden relative">
            <Container>
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 sm:gap-4">
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
                        <span className="text-xs sm:text-sm md:text-md font-bold tracking-[0.2em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 uppercase">
                            TRUSTED BY INDUSTRY LEADERS
                        </span>
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
                    </div>
                </div>

                <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                    {/* Gradient Masks for Blur Effect */}
                    <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Track */}
                    <div className="marquee-container">
                        <div className="marquee-track">
                            {/* First set */}
                            {brands.map((brand, index) => (
                                <div
                                    key={`a-${index}`}
                                    className="marquee-item"
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain invert"
                                    />
                                </div>
                            ))}
                            {/* Second set (duplicate for seamless loop) */}
                            {brands.map((brand, index) => (
                                <div
                                    key={`b-${index}`}
                                    className="marquee-item"
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain invert"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                }
                .marquee-track {
                    display: flex;
                    gap: 3rem;
                    width: max-content;
                    animation: scroll 25s linear infinite;
                }
                .marquee-item {
                    position: relative;
                    height: 1.75rem;
                    width: 5rem;
                    flex-shrink: 0;
                    opacity: 0.5;
                    transition: opacity 0.3s;
                }
                .marquee-item:hover {
                    opacity: 1;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 1.5rem));
                    }
                }
                @media (min-width: 640px) {
                    .marquee-track {
                        gap: 6rem;
                    }
                    .marquee-item {
                        height: 2.5rem;
                        width: 8rem;
                    }
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-50% - 3rem));
                        }
                    }
                }
            `}</style>
        </div>
    );
};
