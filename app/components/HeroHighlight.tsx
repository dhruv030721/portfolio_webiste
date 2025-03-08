"use client";
import live from "../../public/live.json";
import { HeroSection } from "./HeroSection";
import GithubCalendar from "react-github-calendar";
import { GeistSans } from "geist/font/sans";
import github from "../../public/github.json";
import { useState } from "react";
import { ThreeDCardDemo } from "./3DCard";
import levelupyourfitness from "../../public/levelupyourfitness.png";
import slicemaster from "../../public/slicemaster.png";
import LottieAnimation from "./LottieAnimation";

export function MainSection() {
    const [year, setYear] = useState(2024);
    const years = [2024, 2023];

    const labels = {
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        totalCount: "{{count}} activities in {{year}}",
        legend: { less: "Less", more: "More" },
    };

    return (
        <main className="container mx-auto px-4 md:px-6 lg:px-20 pb-20 space-y-16">
            {/* Hero Section */}
            <section className="w-full">
                <HeroSection />
            </section>
        </main>
    );
}