"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchParams = useSearchParams();
    const currentFilter = searchParams.get("filter") || "all";

    return (
        <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all"
                    >
                        스타트업과 창업에 대한 통찰
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/?filter=all"
                            className={`px-3 py-1 rounded-md transition-all ${
                                currentFilter === "all"
                                    ? "text-white bg-blue-600/20 border-b-2 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            모든 에세이
                        </Link>
                        <Link
                            href="/?filter=translated"
                            className={`px-3 py-1 rounded-md transition-all ${
                                currentFilter === "translated"
                                    ? "text-white bg-blue-600/20 border-b-2 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            번역 에세이
                        </Link>
                        <Link
                            href="/?filter=korean-only"
                            className={`px-3 py-1 rounded-md transition-all ${
                                currentFilter === "korean-only"
                                    ? "text-white bg-blue-600/20 border-b-2 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            한글 에세이
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link
                            href="/?filter=all"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md transition-all ${
                                currentFilter === "all"
                                    ? "text-white bg-blue-600/20 border-l-4 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            모든 에세이
                        </Link>
                        <Link
                            href="/?filter=translated"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md transition-all ${
                                currentFilter === "translated"
                                    ? "text-white bg-blue-600/20 border-l-4 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            번역 에세이
                        </Link>
                        <Link
                            href="/?filter=korean-only"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md transition-all ${
                                currentFilter === "korean-only"
                                    ? "text-white bg-blue-600/20 border-l-4 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            한글 에세이
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
