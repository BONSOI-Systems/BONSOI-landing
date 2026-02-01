import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | BONSOI Systems',
    description: 'Review the Terms of Service for using BONSOI Systems website and services. Understanding your rights and responsibilities.',
    keywords: 'terms of service, user agreement, legal terms, BONSOI terms',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/terms',
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
