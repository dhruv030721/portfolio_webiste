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

            {/* GitHub Contribution Section */}
            <section className="w-full space-y-8">
                <div className="flex items-center gap-x-4">
                    <LottieAnimation json={github} classes="w-8 md:w-12" />
                    <h1 className={`text-xl md:text-2xl font-sans ${GeistSans.className}`}>
                        Contribution Graph
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-center mx-20">
                    {/* Calendar Container */}
                    <div className="w-80 lg:w-[70%] xl:w-4/5 border border-zinc-700 rounded-2xl p-4 md:p-6 overflow-x-auto">
                        <div className="min-w-[750px] md:min-w-0 scale-90 lg:scale-85 xl:scale-100 origin-left">
                            <GithubCalendar
                                username="dhruv030721"
                                year={year}
                                colorScheme="dark"
                                labels={labels}
                                fontSize={12}
                            />
                        </div>
                    </div>

                    {/* Year Selection */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:w-[30%] xl:w-1/5">
                        {years.map((value) => (
                            <button
                                key={value}
                                className={`px-4 py-2 md:px-6 md:py-3 border rounded-xl text-sm md:text-base transition-colors duration-200 hover:bg-zinc-800 ${year === value ? "border-green-600 bg-zinc-800/50" : "border-zinc-700"
                                    }`}
                                onClick={() => setYear(value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Projects Section */}
            <section className="w-full space-y-8">
                <div className="flex items-center gap-x-4">
                    <LottieAnimation json={live} classes="w-10 md:w-16" />
                    <h1 className={`text-xl md:text-3xl font-sans ${GeistSans.className}`}>
                        Live Projects
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    <ThreeDCardDemo
                        title="Level up your fitness 💪"
                        description="A fitness app to track daily goals and guide you."
                        image={levelupyourfitness}
                        link="https://levelup-your-fitness.vercel.app"
                        classes="w-full h-full"
                    />

                    <ThreeDCardDemo
                        title="Slice Master 🍕"
                        description="A fun project to explore pizza tracking."
                        image={slicemaster}
                        link="https://slice-master-henna.vercel.app"
                        classes="w-full h-full"
                    />
                </div>
            </section>
        </main>
    );
}