import { getPosts, getPost } from '@/lib/posts';




export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='px-5'>

            <h1 className='font-raleway text-white text-3xl py-4'>{post.frontmatter.title}</h1>
            <article className='text-white prose leading-6 dark:prose-invert'>{post.content}</article>
        </div>
    )
}
