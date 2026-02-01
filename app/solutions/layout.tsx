import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solutions',
    description: 'Industry-specific solutions for Healthcare, Finance, Retail, Manufacturing, Education, and more. Custom AI/ML and software solutions.',
    keywords: 'industry solutions, healthcare AI, fintech solutions, retail technology, manufacturing software, education platform, BONSOI solutions',
    openGraph: {
        title: 'Solutions - BONSOI Systems',
        description: 'Industry-specific technology solutions powered by AI/ML and modern software development.',
        url: 'https://bonsoi.vercel.app/solutions',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/solutions',
    },
};

export { default } from './page';
