"use client";
import React from "react";
import { FlipWord } from "./FlipWord";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <div className="
            flex flex-col-reverse lg:flex-row 
            h-screen items-center 
            justify-center lg:justify-between 
             sm:px-8 lg:px-16 overflow-hidden
            space-y-8 gap-y-10 lg:space-y-0 
        ">
            {/* FlipWord Section */}
            <div className="
                w-full lg:w-[60%] 
                text-center lg:text-left 
                space-y-4 sm:space-y-6
            ">
                <FlipWord />
            </div>

            {/* Image Section */}
            <div className="
                relative flex justify-center items-center 
                h-[200px] w-[200px] 
                sm:h-[300px] sm:w-[300px] 
                lg:h-[350px] lg:w-[350px] 
                mt-6 lg:mt-0
            ">
                <Image
                    src="/Profile Photo.png"
                    alt="Profile Image"
                    className="
                        brightness-85 p-2 sm:p-3 
                        rounded-full drop-shadow-black-3xl z-10
                    "
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 350px"
                    style={{ objectFit: "cover" }}
                />

                {/* Animated Circle */}
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
                        strokeWidth="10"
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
