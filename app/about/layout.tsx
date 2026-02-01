import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about BONSOI Systems - our mission, vision, values, and the team behind industry-leading AI/ML and Full-Stack development solutions.',
    keywords: 'about BONSOI, company, team, mission, vision, AI company, software development company',
    openGraph: {
        title: 'About BONSOI Systems',
        description: 'Learn about our mission to transform businesses through cutting-edge technology and innovation.',
        url: 'https://bonsoi.vercel.app/about',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/about',
    },
};

export { default } from './page';
