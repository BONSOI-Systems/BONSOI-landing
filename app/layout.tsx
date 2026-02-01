import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Cinzel_Decorative, Blinker } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClarityAnalytics from "../components/ClarityAnalytics";
import { PopupWidget } from "../components/PopupWidget";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

const blinker = Blinker({
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  variable: '--font-blinker',
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Base URL for the site
const siteUrl = 'https://bonsoi.vercel.app';

// Comprehensive metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Basic metadata
  title: {
    default: "BONSOI Systems | Enterprise AI/ML & Full-Stack Solutions",
    template: "%s | BONSOI Systems",
  },
  description: "Leading provider of enterprise-grade AI/ML, Web3, and Full-Stack development solutions. Transform your business with cutting-edge technology and expert engineering.",
  keywords: [
    "AI solutions",
    "ML development",
    "Machine Learning",
    "Web3 development",
    "Blockchain solutions",
    "Full-Stack development",
    "Enterprise software",
    "Custom software development",
    "Digital transformation",
    "Cloud solutions",
    "DevOps services",
    "Mobile app development",
    "BONSOI Systems",
    "Software consulting",
    "Technology partner",
  ],
  authors: [{ name: "BONSOI Systems", url: siteUrl }],
  creator: "BONSOI Systems",
  publisher: "BONSOI Systems",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'BONSOI Systems',
    title: 'BONSOI Systems | Enterprise AI/ML & Full-Stack Solutions',
    description: 'Transform your business with cutting-edge AI/ML, Web3, and Full-Stack development solutions. Partner with BONSOI Systems for innovative technology solutions.',
    images: [
      {
        url: '/img/hero.png',
        width: 1200,
        height: 630,
        alt: 'BONSOI Systems - Enterprise Technology Solutions',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'BONSOI Systems | Enterprise AI/ML & Full-Stack Solutions',
    description: 'Transform your business with cutting-edge AI/ML, Web3, and Full-Stack development solutions.',
    images: ['/img/hero.png'],
    creator: '@bonsoisystems',
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
  },

  // Manifest
  manifest: '/manifest.json',

  // Verification
  verification: {
    google: 'your-google-verification-code',
  },

  // Alternate languages (if needed in future)
  alternates: {
    canonical: siteUrl,
  },

  // Category
  category: 'technology',
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BONSOI Systems",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "description": "Leading provider of enterprise-grade AI/ML, Web3, and Full-Stack development solutions.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9628525211",
    "contactType": "customer service",
    "email": "bonsoisystems@gmail.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://github.com/BONSOI-Systems",
    "https://www.linkedin.com/company/bonsoi-systems/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  }
};

// JSON-LD Schema for Website
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BONSOI Systems",
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// JSON-LD Schema for Services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BONSOI Systems Services",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "AI & Machine Learning Solutions",
      "description": "Custom AI/ML solutions including predictive analytics, NLP, computer vision, and intelligent automation.",
      "provider": {
        "@type": "Organization",
        "name": "BONSOI Systems"
      }
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Web3 & Blockchain Development",
      "description": "Decentralized applications, smart contracts, and blockchain integration services.",
      "provider": {
        "@type": "Organization",
        "name": "BONSOI Systems"
      }
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Full-Stack Development",
      "description": "End-to-end web and mobile application development with modern technologies.",
      "provider": {
        "@type": "Organization",
        "name": "BONSOI Systems"
      }
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Cloud & DevOps",
      "description": "Cloud architecture, migration, and DevOps automation services.",
      "provider": {
        "@type": "Organization",
        "name": "BONSOI Systems"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} ${cinzel.variable} ${blinker.variable}`}>
        <ThemeProvider attribute="class">
          <ClarityAnalytics />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
