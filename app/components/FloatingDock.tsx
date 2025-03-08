import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
    IconHome,
} from "@tabler/icons-react";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GiMechanicalArm } from "react-icons/gi";
import { FaStackOverflow } from "react-icons/fa";


export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Education",
            icon: (
                <HiMiniAcademicCap className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/education",
        },
        {
            title: "Experience",
            icon: (
                <MdWork className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/experience",
        },
        {
            title: "Projects",
            icon: (
                <GiMechanicalArm className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/projects",
        },
        {
            title: "Tech Stack",
            icon: (
                <FaStackOverflow className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/tech_stack",
        },

        {
            title: "Contact us",
            icon: (
                <IoIosContact className="h-full w-full text-neutral-500  text-neutral-300" />
            ),
            href: "/contact_us",
        },
    ];
    return (
        <div className="flex items-end justify-center w-full bottom-0 pb-10 fixed ">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
