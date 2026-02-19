import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | AI, Web3 & Full-Stack Development — BONSOI Systems',
    description: 'Explore BONSOI Systems\u2019 enterprise technology services: custom AI/ML development, Web3 & blockchain solutions, full-stack engineering, cloud infrastructure, DevOps automation, and mobile app development. Scalable solutions built for growth.',
    keywords: [
        'AI development services', 'machine learning development company',
        'Web3 development agency', 'blockchain development services', 'smart contract development',
        'full-stack development company', 'cloud infrastructure services', 'DevOps automation',
        'mobile app development company', 'enterprise software development', 'custom AI solutions',
        'NLP development', 'computer vision solutions', 'digital transformation company',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/services',
    },
    openGraph: {
        title: 'Services | BONSOI Systems — AI, Web3 & Full-Stack Development',
        description: 'From AI/ML and blockchain to full-stack and cloud — BONSOI Systems delivers enterprise-grade technology services tailored to your business goals.',
        url: 'https://bonsoi.vercel.app/services',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'BONSOI Systems Services' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services | BONSOI Systems',
        description: 'Enterprise AI/ML, Web3, and Full-Stack development services. Custom solutions for businesses of all sizes.',
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
