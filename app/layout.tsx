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


// JSON-LD Schema for Organization / Professional Service
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "BONSOI Systems",
  "url": siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteUrl}/logo.png`,
    "width": 512,
    "height": 512
  },
  "image": `${siteUrl}/img/hero.png`,
  "description": "BONSOI Systems is a leading enterprise technology partner specializing in AI/ML solutions, Web3 blockchain development, full-stack engineering, cloud infrastructure, and mobile application development for businesses worldwide.",
  "foundingDate": "2024",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Web3 Development",
    "Blockchain Technology",
    "Full-Stack Development",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Digital Transformation"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9628525211",
      "contactType": "customer service",
      "email": "bonsoisystems@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "sameAs": [
    "https://github.com/BONSOI-Systems",
    "https://www.linkedin.com/company/bonsoi-systems/",
    "https://x.com/BonsoiSystems",
    "https://www.instagram.com/bonsoisystems/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "priceRange": "$99 - Custom",
  "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
  "currenciesAccepted": "USD, INR"
};

// JSON-LD Schema for Website with Search Action
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BONSOI Systems",
  "url": siteUrl,
  "description": "Enterprise AI/ML, Web3, and Full-Stack development solutions by BONSOI Systems.",
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// JSON-LD Schema for Services (ItemList)
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BONSOI Systems Services",
  "description": "Enterprise technology solutions including AI/ML development, Web3 blockchain, full-stack engineering, and cloud services.",
  "url": `${siteUrl}/services`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "AI & Machine Learning Solutions",
        "description": "Custom AI/ML solutions including predictive analytics, natural language processing, computer vision, and intelligent automation systems that transform business operations.",
        "provider": { "@type": "Organization", "name": "BONSOI Systems" },
        "url": `${siteUrl}/services`,
        "serviceType": "AI Development"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Web3 & Blockchain Development",
        "description": "Decentralized applications (dApps), smart contracts, DeFi protocols, and blockchain integration services built for security and scalability.",
        "provider": { "@type": "Organization", "name": "BONSOI Systems" },
        "url": `${siteUrl}/services`,
        "serviceType": "Blockchain Development"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Full-Stack Development",
        "description": "End-to-end web and mobile application development using modern tech stacks including Next.js, React, Node.js, and cloud-native architectures.",
        "provider": { "@type": "Organization", "name": "BONSOI Systems" },
        "url": `${siteUrl}/services`,
        "serviceType": "Software Development"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Cloud & DevOps",
        "description": "Cloud architecture design, migration to AWS/GCP/Azure, CI/CD pipelines, container orchestration, and DevOps automation for scalable infrastructure.",
        "provider": { "@type": "Organization", "name": "BONSOI Systems" },
        "url": `${siteUrl}/services`,
        "serviceType": "Cloud Services"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter, with seamless backend integration.",
        "provider": { "@type": "Organization", "name": "BONSOI Systems" },
        "url": `${siteUrl}/services`,
        "serviceType": "Mobile Development"
      }
    }
  ]
};

// JSON-LD FAQ Schema (enables rich FAQ snippets in Google search results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does BONSOI Systems offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BONSOI Systems offers a comprehensive suite of technology services including AI/ML development, Web3 blockchain solutions, full-stack web and mobile development, cloud infrastructure & DevOps, data analytics, and custom enterprise software. We serve startups, SMBs, and large enterprises across all industries."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to build an AI solution with BONSOI Systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing starts at $199 for MVP/starter projects and scales to $1,499+ for growth-stage solutions with advanced AI/ML integration. Enterprise projects are priced custom based on scope and complexity. We offer flexible payment plans including milestone-based billing. Contact us for a free consultation and quote."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom AI or Web3 application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Development timelines vary by project complexity. A typical MVP takes 4 to 8 weeks, while a full-scale enterprise application can take 3 to 6 months. We follow an agile development process with weekly sprints and client check-ins to ensure timely delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Does BONSOI Systems work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, BONSOI Systems serves clients globally across 20+ countries. We have experience working with businesses in the USA, UK, UAE, Australia, Singapore, Germany, and more. Our team operates in IST (Indian Standard Time) with flexible hours for international collaboration."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies does BONSOI Systems use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with a modern, battle-tested tech stack: Python, TensorFlow, PyTorch for AI/ML; Solidity, Ethereum, Polygon for Web3; Next.js, React, Node.js for full-stack; AWS, GCP, Azure for cloud; and React Native and Flutter for mobile. We always select the best tool for your specific use case."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with BONSOI Systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started is easy. Visit our contact page, fill out the project inquiry form, or schedule a free 30-minute consultation call with our team. We will discuss your requirements, suggest the best technical approach, and provide a detailed proposal within 48 hours."
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
