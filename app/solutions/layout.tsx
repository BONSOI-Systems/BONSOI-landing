import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industry Solutions | Fintech, Healthcare, E-Commerce & More — BONSOI Systems',
    description: 'BONSOI Systems delivers industry-specific AI and software solutions for fintech, healthcare, e-commerce, logistics, education, and enterprise. Custom technology built to solve real industry challenges and drive measurable ROI.',
    keywords: [
        'fintech AI solutions', 'healthcare AI development', 'e-commerce technology solutions',
        'logistics software development', 'education technology platform', 'enterprise AI solutions',
        'industry-specific AI', 'blockchain fintech', 'telemedicine platform development',
        'supply chain blockchain', 'digital banking development', 'LMS development',
        'ERP development', 'CRM software development', 'industry software solutions',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/solutions',
    },
    openGraph: {
        title: 'Industry Solutions | BONSOI Systems — AI for Fintech, Healthcare & More',
        description: 'Tailored AI and software solutions for fintech, healthcare, e-commerce, logistics, education, and enterprise. Built to solve your industry\'s unique challenges.',
        url: 'https://bonsoi.vercel.app/solutions',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'BONSOI Systems Industry Solutions' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Industry Solutions | BONSOI Systems',
        description: 'Industry-specific AI and software solutions for fintech, healthcare, e-commerce, logistics, education, and enterprise by BONSOI Systems.',
    },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
