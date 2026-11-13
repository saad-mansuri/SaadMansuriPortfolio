import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioShell } from "../components/PortfolioShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad Mansuri | Senior Fullstack Developer",
  description:
    "Personal portfolio of Saad Mansuri. Senior Fullstack Developer with 5+ years of experience engineering enterprise SaaS platforms, cybersecurity risk management tools, and reusable component architectures.",
  authors: [{ name: "Saad Mansuri" }],
  keywords: [
    "Saad Mansuri",
    "Senior Fullstack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Cybersecurity SaaS",
    "Frontend Architect",
    "Ahmedabad",
  ],
  openGraph: {
    type: "website",
    title: "Saad Mansuri | Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specializing in React.js, Next.js, TypeScript, and enterprise SaaS platforms in cybersecurity risk management.",
    siteName: "Saad Mansuri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mansuri | Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specializing in React.js, Next.js, TypeScript, and enterprise SaaS platforms in cybersecurity risk management.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saad Mansuri",
  jobTitle: "Senior Fullstack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "saadmansuri249@gmail.com",
  sameAs: [
    "https://linkedin.com/in/saad-mansuri-dev",
    "https://github.com/saad-mansuri",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Zustand",
    "Redux Toolkit",
    "Tailwind CSS",
    "Docker",
    "Cybersecurity Risk Management",
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
