import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore our success stories and case studies showcasing real-world AI/ML and software development projects delivered by BONSOI Systems.',
    keywords: 'case studies, success stories, portfolio, AI projects, software development projects, client testimonials',
    openGraph: {
        title: 'Case Studies - BONSOI Systems',
        description: 'Real-world success stories and project showcases.',
        url: 'https://bonsoi.vercel.app/case-studies',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/case-studies',
    },
};

export { default } from './page';
