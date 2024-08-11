"use client";
import live from "../../public/live.json";
import { HeroSection } from "./HeroSection";
import GithubCalendar from "react-github-calendar";
import { GeistSans } from 'geist/font/sans';
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
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        weekdays: [
            'Sun', // Sunday first!
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ],
        totalCount: '{{count}} activities in {{year}}',
        legend: {
            less: 'Less',
            more: 'More',
        },
    };

    return (
        <div className="">

            {/* Herosection Portion */}

            <HeroSection />

            {/* Github Contribution Portion  */}

            <div className="flex flex-col justify-center">
                <div className="mx-auto flex flex-col gap-y-14">
                    <div className="flex items-center gap-x-5">
                        <LottieAnimation json={github} classes="w-12" />
                        <h1 className={`text-start text-2xl font-sans ${GeistSans.className}`}>Contribution Graph</h1>
                    </div>
                    <div className="flex">
                        <div className="border border-zinc-700 rounded-2xl p-10">
                            <GithubCalendar username="dhruv030721" year={year} colorScheme="dark" labels={labels} />
                        </div>
                        <div className="flex-col flex gap-y-5 ml-5">
                            {years.map(value => (
                                <button
                                    key={value}
                                    className={`  ${year == value ? 'border-green-700' : 'border-zinc-700'}  px-8 py-3 border rounded-2xl`}
                                    onClick={() => setYear(value)}
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Live Projects Portion */}
            <div className="flex flex-col mt-10 pt-10">
                <div className="flex items-center gap-x-5">
                    <LottieAnimation json={live} classes="w-20" />
                    <h1 className={`text-start text-2xl font-sans ${GeistSans.className}`}>Live Projects</h1>
                </div>
                <div className="flex justify-between mt-5">
                    <ThreeDCardDemo title="Level up your fitnes 💪" description="It is a fitness app which helps you to track your daily fitness goal and guide you." image={levelupyourfitness} link="https://levelup-your-fitness.vercel.app" />
                    <ThreeDCardDemo title="Slice Master 🍕" description="It is a fitness app which helps you to track your daily fitness goal and guide you." image={slicemaster} link="https://slice-master-henna.vercel.app" />
                </div>
            </div>
        </div>
    );
}
