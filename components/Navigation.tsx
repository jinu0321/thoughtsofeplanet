"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                            href="/"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            모든 에세이
                        </Link>
                        <Link
                            href="/?filter=translated"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            번역 에세이
                        </Link>
                        <Link
                            href="/?filter=korean-only"
                            className="text-gray-300 hover:text-white transition-colors"
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
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                        >
                            모든 에세이
                        </Link>
                        <Link
                            href="/?filter=translated"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                        >
                            번역 에세이
                        </Link>
                        <Link
                            href="/?filter=korean-only"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                        >
                            한글 에세이
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
