"use client";
import React from "react";
import { FlipWord } from "./FlipWord";
import Image from "next/image";
import { motion } from "framer-motion";  // Corrected the import

export function HeroSection() {
    return (
        <div className="flex h-screen justify-between items-center relative overflow-hidden">
            <div className="w-[60%]">
                <FlipWord />
            </div>
            <div className="relative flex justify-center items-center">
                <Image
                    src="/Profile.png"
                    alt="Profile Image"
                    className="brightness-85 p-3 rounded-full drop-shadow-black-3xl z-10"
                    quality={100}
                    width={330}
                    height={330}
                />
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
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    ></motion.circle>
                </motion.svg>
            </div>
        </div>
    );
}
