
"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Github, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10">
                    <div className="col-span-2 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="tracking-tighter hover:opacity-80 transition-opacity">
                            <img src="/img/squarelogo.png" alt="BONSOI Systems" className="w-36 sm:w-44 md:w-52" />
                        </Link>
                        <p className="text-gray-400 mt-4 sm:mt-6 mb-1 sm:mb-2 text-sm sm:text-base">
                            Enterprise AI/ML, Web3, and Full-Stack development solutions that transform businesses worldwide.
                        </p>
                        <p className="text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm">
                            Serving clients globally · Based in India
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            <Link aria-label="GitHub" href="https://github.com/BONSOI-Systems" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link aria-label="LinkedIn" href="https://www.linkedin.com/company/bonsoi-systems/" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link aria-label="WhatsApp" href="https://chat.whatsapp.com/L11Rq3WgjrNLWmuYtpS7TV" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link aria-label="Twitter / X" href="https://x.com/BonsoiSystems" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link aria-label="Instagram" href="https://www.instagram.com/bonsoisystems/" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Product</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Company</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Legal</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">User Agreement</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                        © {new Date().getFullYear()} BONSOI Systems. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Built with precision. Designed for Impact.
                    </p>
                </div>
            </div>
        </footer>
    );
}
