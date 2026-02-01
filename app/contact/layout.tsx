import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with BONSOI Systems. Schedule a consultation, request a quote, or ask questions about our AI/ML and software development services.',
    keywords: 'contact BONSOI, get quote, schedule consultation, software development inquiry, AI development contact',
    openGraph: {
        title: 'Contact BONSOI Systems',
        description: 'Get in touch with our team to discuss your project requirements.',
        url: 'https://bonsoi.vercel.app/contact',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/contact',
    },
};

export { default } from './page';
