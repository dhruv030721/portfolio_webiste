"use client";
import React from "react";
import { FlipWord } from "./FlipWord";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <div className="
            flex flex-col-reverse
            lg:mt-32 mt-20 items-center 
            justify-between gap-y-20
            sm:px-8 lg:px-16 overflow-hidden
            lg:space-y-0 
        ">
            {/* FlipWord Section */}
            <div className="
                w-full lg:w-[60%] 
                text-center lg:text-left 
                space-y-4 sm:space-y-6
            ">
                <FlipWord />
            </div>

            {/* Image Section - REDUCED SIZE */}
            <div className="
                relative flex justify-center items-center 
                h-[200px] w-[200px] 
                sm:h-[200px] sm:w-[200px] 
                lg:h-[250px] lg:w-[250px] 
                mt-4 lg:mt-0
            ">
                {/* White glow effect - adjusted for smaller size */}
                <div className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[85%] h-[85%] 
                    rounded-full
                    bg-white/10
                    blur-xl
                    z-0
                "/>

                <Image
                    src="/Profile Photo 1.jpg"
                    alt="Profile Image"
                    className="
                        brightness-75 p-1.5 sm:p-2 
                        rounded-full drop-shadow-black-xl z-10
                    "
                    quality={90}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                    style={{ objectFit: "cover" }}
                    priority
                />

                {/* Animated Circle - adjusted for smaller container */}
                <motion.svg
                    className="absolute top-0 left-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22"
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </div>
        </div>
    );
}