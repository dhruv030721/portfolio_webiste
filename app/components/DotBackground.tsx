import React from "react";
import Navbar from "./NavBar";

export function DotBackgroundDemo({ children }: any) {
    return (
        <div className="h-full flex-col w-full bg-black bg-grid-white/[0.07] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <Navbar />
            {children}
        </div>
    );
}
