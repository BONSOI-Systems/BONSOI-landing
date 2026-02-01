import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | BONSOI Systems',
    description: 'Join the BONSOI Systems team. Explore career opportunities in AI/ML, Blockchain, and Full-Stack development. Remote-friendly, innovation-first culture.',
    keywords: 'careers, tech jobs, remote developer jobs, AI engineer jobs, blockchain developer jobs, software engineering careers, BONSOI careers',
    openGraph: {
        title: 'Careers at BONSOI Systems',
        description: 'Build the future with us. Explore exciting opportunities in AI/ML and Web3.',
        url: 'https://bonsoi.vercel.app/careers',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/careers',
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
