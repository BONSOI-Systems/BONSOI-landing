import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Our Mission, Vision & Team — BONSOI Systems',
    description: 'Learn about BONSOI Systems — a global enterprise technology partner founded in 2024 with a mission to democratize cutting-edge AI/ML, Web3, and software engineering. Meet our team and discover our core values.',
    keywords: [
        'about BONSOI Systems', 'AI company about', 'software development company about',
        'enterprise technology partner', 'AI startup India', 'tech company mission',
        'BONSOI team', 'software engineering company', 'digital transformation company India',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/about',
    },
    openGraph: {
        title: 'About BONSOI Systems | Mission, Vision & Team',
        description: 'Discover the story behind BONSOI Systems — our mission, values, and the expert team building the next generation of AI and enterprise software.',
        url: 'https://bonsoi.vercel.app/about',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'About BONSOI Systems' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About BONSOI Systems',
        description: 'Our mission, vision, team, and the story behind BONSOI Systems — a global AI and full-stack development company.',
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
