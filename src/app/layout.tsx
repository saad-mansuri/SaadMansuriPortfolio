import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioShell } from "../components/PortfolioShell";
import { SITE_URL, BASE_PATH } from "../data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saad Mansuri | Senior Fullstack Developer",
    template: "%s | Saad Mansuri",
  },
  description:
    "Personal portfolio of Saad Mansuri. Senior Fullstack & Frontend Developer with 5+ years of experience engineering enterprise SaaS platforms, cybersecurity risk management architectures, and high-performance frontend ecosystems.",
  authors: [{ name: "Saad Mansuri", url: SITE_URL }],
  creator: "Saad Mansuri",
  publisher: "Saad Mansuri",
  keywords: [
    "Saad Mansuri",
    "Senior Fullstack Developer",
    "Senior Frontend Developer",
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Pinia",
    "Zustand",
    "Redux Toolkit",
    "Cybersecurity SaaS",
    "Frontend Architect",
    "Ahmedabad",
    "India",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Saad Mansuri | Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer with 5+ years of experience engineering enterprise cybersecurity SaaS platforms, dynamic survey engines, and high-performance design systems.",
    siteName: "Saad Mansuri Portfolio",
    images: [
      {
        url: `${SITE_URL}/images/saad-mansuri.webp`,
        width: 1200,
        height: 630,
        alt: "Saad Mansuri - Senior Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mansuri | Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specializing in React.js, Next.js, Vue.js, TypeScript, and enterprise SaaS platforms in cybersecurity risk management.",
    images: [`${SITE_URL}/images/saad-mansuri.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/favicon.ico`,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Saad Mansuri",
      jobTitle: "Senior Fullstack Developer",
      url: SITE_URL,
      image: `${SITE_URL}/images/saad-mansuri.webp`,
      description:
        "Senior Fullstack & Frontend Developer with 5+ years of experience engineering enterprise SaaS platforms in cybersecurity risk management.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      email: "saadmansuri249@gmail.com",
      telephone: "+91-9510103738",
      sameAs: [
        "https://linkedin.com/in/saad-mansuri-dev",
        "https://github.com/saad-mansuri",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Node.js",
        "Pinia",
        "Zustand",
        "Redux Toolkit",
        "Tailwind CSS",
        "Docker",
        "Cybersecurity Risk Management",
        "Enterprise SaaS Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Saad Mansuri Portfolio",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      description:
        "Official portfolio of Saad Mansuri - Senior Fullstack Developer specializing in React.js, Next.js, and cybersecurity SaaS.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sm-theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-white">
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
