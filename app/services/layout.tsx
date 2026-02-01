import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore our comprehensive range of services including AI/ML development, Web3 solutions, Full-Stack development, Cloud & DevOps, and more.',
    keywords: 'AI services, ML development, Web3 development, blockchain solutions, full-stack development, cloud services, DevOps, BONSOI services',
    openGraph: {
        title: 'Services - BONSOI Systems',
        description: 'AI/ML, Web3, Full-Stack development, and Cloud solutions to transform your business.',
        url: 'https://bonsoi.vercel.app/services',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/services',
    },
};

export { default } from './page';
