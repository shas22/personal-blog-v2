'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-semibold text-neutral-800 dark:text-white">
                            Your Logo
                        </Link>
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center space-x-4">
                            <li>
                                <Link href="/blog" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4">
                        <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                            {/* <GitHub size={20} /> */}
                        </a>
                        <a href="https://twitter.com/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-white transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    © {currentYear} Shas. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;