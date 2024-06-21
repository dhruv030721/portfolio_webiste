"use client";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import NavBar from "./NavBar";
import { HeroSection } from "./HeroSection";

export function HeroHighlightDemo() {
    return (
        <HeroHighlight>
            <NavBar />
            <HeroSection />
        </HeroHighlight>
    );
}
