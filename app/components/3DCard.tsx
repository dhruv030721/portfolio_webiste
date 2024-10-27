"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ image, title, description, link }: any) {
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="
                    bg-gray-50 relative group/card 
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                    dark:bg-black dark:border-white/[0.2] 
                    border-black/[0.1] 
                    w-full max-w-sm sm:max-w-md lg:max-w-lg
                    h-auto 
                    rounded-xl p-4 sm:p-6 
                    border transition-transform duration-300 ease-in-out
                "
            >
                {/* Card Title */}
                <CardItem
                    translateZ="50"
                    className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>

                {/* Card Description */}
                <CardItem
                    as="p"
                    translateZ="60"
                    className="
                        text-neutral-500 text-sm sm:text-base 
                        max-w-full mt-2 
                        dark:text-neutral-300
                    "
                >
                    {description}
                </CardItem>

                {/* Card Image */}
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="
                            h-48 sm:h-60 lg:h-64 
                            w-full object-cover 
                            rounded-xl group-hover/card:shadow-xl 
                            transition-shadow duration-300 ease-in-out
                        "
                        alt="thumbnail"
                    />
                </CardItem>

                {/* Explore Link */}
                <div className="flex justify-between items-center mt-8 sm:mt-12 lg:mt-16">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={link}
                        target="__blank__"
                        className="
                            px-3 py-2 sm:px-4 sm:py-2 
                            rounded-xl 
                            bg-black dark:bg-white dark:text-black 
                            text-white text-xs sm:text-sm font-bold 
                            hover:scale-105 transition-transform duration-300
                        "
                    >
                        Explore it
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
