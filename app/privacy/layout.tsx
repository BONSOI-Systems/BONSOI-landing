import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | BONSOI Systems',
    description: 'Read our Privacy Policy to understand how BONSOI Systems collects, uses, and protects your personal data.',
    keywords: 'privacy policy, data protection, GDPR, user privacy, BONSOI privacy',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://bonsoi.vercel.app/privacy',
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
