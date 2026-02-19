import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | AI & Web3 Success Stories — BONSOI Systems',
    description: 'Explore BONSOI Systems\u2019 proven portfolio of AI, Web3, and full-stack development case studies. From fintech risk AI reducing fraud by 40% to DeFi platforms with $50M+ daily trading volume — real results for real businesses.',
    keywords: [
        'AI development case studies', 'Web3 portfolio', 'blockchain project examples',
        'full-stack development portfolio', 'software development success stories',
        'fintech AI case study', 'DeFi platform development', 'telemedicine app development',
        'e-commerce AI recommendation', 'supply chain blockchain case study',
        'AI chatbot development', 'real estate tokenization', 'BONSOI portfolio',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/case-studies',
    },
    openGraph: {
        title: 'Case Studies | BONSOI Systems — AI & Web3 Success Stories',
        description: 'Real case studies: fintech risk AI, DeFi platforms, telemedicine apps, e-commerce AI. See how BONSOI Systems builds solutions that deliver measurable results.',
        url: 'https://bonsoi.vercel.app/case-studies',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'BONSOI Systems Case Studies' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Case Studies | BONSOI Systems',
        description: 'Proven AI and Web3 development case studies — fintech, healthcare, DeFi, e-commerce and more. Real results from BONSOI Systems.',
    },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
