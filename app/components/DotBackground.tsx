import React from "react";
import Navbar from "./NavBar";

export function DotBackgroundDemo({ children }: any) {
    return (
        <div className="h-full flex-col w-full dark:bg-black bg-white dark:bg-dot-white/[0.13] bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <Navbar />
            {children}
        </div>
    );
}
