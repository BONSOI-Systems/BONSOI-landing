import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | BONSOI Systems',
    description: 'Insights, tutorials, and industry trends on AI/ML, Web3, Blockchain, and Full-Stack development from the experts at BONSOI Systems.',
    keywords: 'tech blog, AI insights, machine learning tutorials, web3 news, blockchain development, software engineering blog, BONSOI blog',
    openGraph: {
        title: 'BONSOI Systems Blog - Tech Insights & Trends',
        description: 'Expert insights on AI/ML, Web3, and emerging technologies.',
        url: 'https://bonsoi.vercel.app/blog',
        type: 'website',
        images: [
            {
                url: '/og-blog.png',
                width: 1200,
                height: 630,
                alt: 'BONSOI Systems Blog',
            },
        ],
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
