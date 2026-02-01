import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Transparent pricing for BONSOI Systems services. Choose from Starter, Professional, and Enterprise plans for AI/ML and software development.',
    keywords: 'pricing, plans, software development cost, AI development pricing, BONSOI pricing, enterprise plans',
    openGraph: {
        title: 'Pricing - BONSOI Systems',
        description: 'Transparent and flexible pricing plans for your technology needs.',
        url: 'https://bonsoi.vercel.app/pricing',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/pricing',
    },
};

export { default } from './page';
