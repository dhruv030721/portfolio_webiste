"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/components/ui/tracing-bream";

export function TracingBeamDemo({ data }: any) {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {data.map((item: any, index: any) => (
                    <div
                        key={`content-${index}`}
                        className="mb-16 relative hover:transform hover:scale-[1.02] transition-all"
                    >
                        {/* Timeline connector */}
                        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500/20 to-purple-500/20 -ml-6" />

                        {/* Content wrapper */}
                        <div className="pl-8 relative">
                            {/* Timeline dot */}
                            <div className="absolute -left-[10px] top-0">
                                <div className="h-5 w-5 rounded-full bg-gradient-to-br  ring-white dark:ring-gray-900" />
                            </div>

                            {/* Badge */}
                            <h2 className="inline-block bg-gradient-to-r border  text-white rounded-full text-sm px-4 py-1.5 mb-4 font-medium shadow-lg">
                                {item.badge}
                            </h2>

                            {/* Company and image wrapper */}
                            <div className="flex items-center gap-4 mb-4">
                                {item?.image && (
                                    <div className="relative">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} logo`}
                                            height={60}
                                            width={60}
                                            className="rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900"
                                        />
                                    </div>
                                )}
                                <p className={twMerge("text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-white")}>
                                    {item.title}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <div className="space-y-4">
                                    {React.Children.map(item.description, (child) => {
                                        if (React.isValidElement(child) && child.type === 'ul') {
                                            return (
                                                <ul className="space-y-3 list-none pl-0">
                                                    {React.Children.map(child.props.children, (li) => (
                                                        <li className="flex items-start group">
                                                            <span className="mr-2 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 group-hover:bg-purple-500 transition-colors" />
                                                            <span className="text-gray-700 dark:text-gray-300">
                                                                {React.Children.map(li.props.children, (content) => {
                                                                    if (React.isValidElement(content) && content.type === 'strong') {
                                                                        return (
                                                                            <span className="mx-1 rounded bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 font-semibold text-blue-900 dark:text-blue-100">
                                                                                {content.props.children}
                                                                            </span>
                                                                        );
                                                                    }
                                                                    return content;
                                                                })}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                        return child;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

export default TracingBeamDemo;