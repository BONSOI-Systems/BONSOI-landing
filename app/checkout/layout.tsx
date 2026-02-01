import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Checkout | BONSOI Systems',
    description: 'Secure checkout for BONSOI Systems services.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
