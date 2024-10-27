import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Caveat } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
})

export function FlipWord() {
    const words = ["<Programmer/>", "<Developer/>", "<System_Designer/>", "<Avid_Learner/>"];

    return (
        <div className={`flex flex-col items-center sm:items-start w-full ${caveat.className} p-4`}>
            <div className="flex flex-col w-full">
                <h1 className={`
                    text-neutral-400 
                    text-center sm:text-left 
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[2.5rem]
                    leading-relaxed
                `}>
                    Hello  🙏, {"It's"} me
                </h1>
                <span className={`
                    text-white 
                    font-Playwrite 
                    font-bold 
                    text-center sm:text-left
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem]
                    ${caveat.className}
                    mt-2
                `}>
                    Dhruv Godhani
                </span>
            </div>
            <div className={`
                font-ubantu 
                text-neutral-600 dark:text-neutral-400
                font-normal 
                text-center sm:text-left
                text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]
                mt-6 sm:mt-4
                w-full
                ${caveat.className}
            `}>
                <span className="block sm:inline">And {"I'm a"}&nbsp;</span>
                <span className="block sm:inline mt-3 sm:mt-0 sm:ml-2">
                    <FlipWords words={words} />
                </span>
            </div>
        </div>
    );
}