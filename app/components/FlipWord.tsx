import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
    const words = ["<Programmer/>", "<Developer/>", "<Designer/>", "<Avid_Learner/>"];

    return (
        <div className="flex justify-start ml-40 items-start">
            <div className="text-[3.5rem] font-ubantu font-normal text-neutral-600 dark:text-neutral-400">
                {"I'm a"}&nbsp;
                <span className="ml-2">
                    <FlipWords words={words} />
                </span>
                <br />
            </div>
        </div>
    );
}
