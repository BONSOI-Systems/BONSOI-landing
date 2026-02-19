import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Free Consultation — BONSOI Systems',
    description: 'Get in touch with BONSOI Systems. Schedule a free 30-minute consultation, request a project quote, or ask about our AI/ML development, Web3, and full-stack services. We respond within 48 hours.',
    keywords: [
        'contact BONSOI Systems', 'get a free consultation', 'request project quote',
        'hire AI developers', 'hire Web3 developers', 'hire full-stack developers',
        'software development inquiry', 'AI development agency contact', 'schedule a call',
        'custom software quote', 'enterprise software contact',
    ],
    alternates: {
        canonical: 'https://bonsoi.vercel.app/contact',
    },
    openGraph: {
        title: 'Contact BONSOI Systems | Free Consultation',
        description: 'Start your project today. Contact our team for a free consultation on AI/ML, Web3, and full-stack development.',
        url: 'https://bonsoi.vercel.app/contact',
        type: 'website',
        siteName: 'BONSOI Systems',
        images: [{ url: 'https://bonsoi.vercel.app/img/hero.png', width: 1200, height: 630, alt: 'Contact BONSOI Systems' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact BONSOI Systems',
        description: 'Schedule a free consultation or request a quote for your AI/ML, Web3, or full-stack development project.',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
