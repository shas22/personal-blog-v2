import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { headers } from 'next/headers';
import { ChevronRight } from 'lucide-react';

export default async function BlogPage() {
    const posts = await getPosts();
    const headersList = headers();
    const fullUrl = headersList.get("x-url") || "";

    let currentPath;
    try {
        const url = new URL(fullUrl);
        currentPath = url.pathname;
        currentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    } catch (error) {
        console.error("Error parsing URL:", error);
        currentPath = '/blog';
    }

    return (
        <div className="container max-w-4xl py-6 lg:py-10 px-5">
            <div className="flex flex-col items-start gap-4 md:flex md:justify-between md:gap-8">
                <div className="flex-1 space-y-1 w-full">
                    <h1 className="pl-4 font-raleway text-2xl font-bold">Shas</h1>
                    <h3 className="pl-4 font-maison text-base opacity-50">All my thoughts and learnings</h3>
                    <div className="space-y-0 w-full">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`${currentPath}/${post.slug}`}
                                className="block w-full"
                            >
                                <div className="w-full p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-neutral-700 hover:shadow-lg cursor-pointer border border-transparent hover:border-slate-700 flex justify-between group">
                                    <span>{post.title}</span>
                                    <ChevronRight className="opacity-100 transition-opacity duration-300 md:opacity-0 sm:group-hover:opacity-100" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}