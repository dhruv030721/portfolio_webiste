import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Caveat } from "next/font/google";
import { GeistSans } from "geist/font/sans";


const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
})

export function FlipWord() {


    const words = ["<Programmer/>", "<Developer/>", "<Designer/>", "<Avid_Learner/>"];

    return (
        <div className={`flex flex-col items-start ${caveat.className}`}>
            <div className="flex flex-col ">
                <h1 className={`text-neutral-400 text-[2.5rem]`}>Hello  🙏, {"It's"} me</h1>
                <span className={`text-white font-Playwrite font-bold text-[4rem]  ${caveat.className}`}>Dhruv Godhani</span>
            </div>
            <div className={` font-ubantu text-[4rem] font-normal text-neutral-600  dark:text-neutral-400  ${caveat.className}`}>
                And {"I'm a"}&nbsp;
                <span className="ml-2">
                    <FlipWords words={words} />
                </span>
                <br />
            </div>
        </div>
    );
}
