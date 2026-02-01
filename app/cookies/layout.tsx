import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | BONSOI Systems',
    description: 'Understand how BONSOI Systems uses cookies and similar technologies to improve your browsing experience.',
    keywords: 'cookie policy, cookies, tracking, user experience, BONSOI cookies',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/cookies',
    },
};

export default function CookiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
