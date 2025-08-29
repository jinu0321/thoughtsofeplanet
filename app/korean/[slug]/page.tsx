"use client";

import { getEssayBySlug } from "@/lib/essays";
import { KoreanOnlyEssay } from "@/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

interface FontSettings {
    fontSize: "small" | "medium" | "large";
}

export default function KoreanEssayPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const essay = getEssayBySlug(resolvedParams.slug);

    if (!essay || essay.type !== "korean-only") {
        notFound();
    }

    const koreanEssay = essay as KoreanOnlyEssay;

    const [settings, setSettings] = useState<FontSettings>({
        fontSize: "large",
    });

    useEffect(() => {
        const savedSettings = localStorage.getItem("korean-essay-settings");
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("korean-essay-settings", JSON.stringify(settings));
    }, [settings]);

    const getFontSizeClass = () => {
        switch (settings.fontSize) {
            case "small":
                return "text-sm";
            case "large":
                return "text-lg";
            default:
                return "text-base";
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    목록으로
                </Link>

                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        {koreanEssay.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400">
                        <span>{koreanEssay.date}</span>
                        <span>•</span>
                        <span>{koreanEssay.author}</span>
                    </div>
                </header>

                <div className="flex justify-end mb-6 gap-2">
                    <button
                        onClick={() =>
                            setSettings((prev) => ({
                                ...prev,
                                fontSize: "small",
                            }))
                        }
                        className={`px-3 py-1 rounded ${
                            settings.fontSize === "small"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-800 text-gray-300"
                        }`}
                    >
                        작게
                    </button>
                    <button
                        onClick={() =>
                            setSettings((prev) => ({
                                ...prev,
                                fontSize: "medium",
                            }))
                        }
                        className={`px-3 py-1 rounded ${
                            settings.fontSize === "medium"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-800 text-gray-300"
                        }`}
                    >
                        보통
                    </button>
                    <button
                        onClick={() =>
                            setSettings((prev) => ({
                                ...prev,
                                fontSize: "large",
                            }))
                        }
                        className={`px-3 py-1 rounded ${
                            settings.fontSize === "large"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-800 text-gray-300"
                        }`}
                    >
                        크게
                    </button>
                </div>

                <article
                    className={`prose prose-invert max-w-none ${getFontSizeClass()}`}
                >
                    <div className="space-y-6 text-gray-200 leading-relaxed">
                        {koreanEssay.content.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}
