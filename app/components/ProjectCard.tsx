"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ProjectCard({ image, title, description, link = "", images }: any) {
    return (
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl  hover:shadow-emerald-500/[0.1]  bg-black  border-white/[0.2] border-black/[0.1] w-full max-w-sm md:max-w-2xl lg:max-w-4xl h-auto rounded-xl p-4 sm:p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-lg sm:text-xl font-bold text-neutral-600  text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2  text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-40 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem 
                    translateZ="50" 
                    className="w-full mt-6 sm:mt-10"
                >
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {images.map((item: any, index: any) => (
                            <div key={index} className="flex-shrink-0">
                                <Image 
                                    src={item} 
                                    alt={`tech-${index}`} 
                                    width={100} 
                                    height={100} 
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </CardItem>
                {/* Uncomment if you want to include the Explore button
                <div className="flex justify-between items-center mt-6 sm:mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={link}
                        target="__blank__"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-black  bg-white  text-black text-white text-xs font-bold"
                    >
                        Explore it
                    </CardItem>
                </div> */}
            </CardBody>
        </CardContainer>
    );
}