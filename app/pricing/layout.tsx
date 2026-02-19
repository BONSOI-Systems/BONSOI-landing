import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing | Transparent Plans for AI & Software Development — BONSOI Systems',
    description: 'View BONSOI Systems\u2019 transparent, flexible pricing for AI/ML development, Web3 blockchain, and full-stack engineering. Starter from $199/mo, Growth at $1,499/mo, and custom Enterprise plans. No hidden fees.',
    keywords: [
        'AI development pricing', 'software development cost', 'machine learning development price',
        'Web3 development cost', 'blockchain project pricing', 'full-stack development pricing',
        'enterprise software pricing', 'software development packages', 'custom software quote',
        'affordable AI development', 'BONSOI pricing plans', 'tech company pricing',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/pricing',
    },
    openGraph: {
        title: 'Pricing | BONSOI Systems — Transparent AI & Software Development Plans',
        description: 'Simple, transparent pricing for AI/ML, Web3, and full-stack development. Starter at $199, Growth at $1,499, and Enterprise custom. No hidden fees.',
        url: 'https://bonsoi.vercel.app/pricing',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'BONSOI Systems Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing | BONSOI Systems',
        description: 'Transparent pricing for AI/ML, Web3, and full-stack development projects. Starter, Growth, and Enterprise plans available.',
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
