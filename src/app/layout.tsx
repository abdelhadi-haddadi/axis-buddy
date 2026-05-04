import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const spaceBold = localFont({
  src: "./fonts/SpaceGrotesk-Bold.ttf",
  variable: "--font-space-bold",
  weight: "700",
});

const spaceRegular = localFont({
  src: "./fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-regular",
  weight: "400",
});

const spaceLight = localFont({
  src: "./fonts/SpaceGrotesk-Light.ttf",
  variable: "--font-space-light",
  weight: "300",
});

const spaceSemiBold = localFont({
  src: "./fonts/SpaceGrotesk-SemiBold.ttf",
  variable: "--font-space-semibold",
  weight: "600",
});

const spaceMedium = localFont({
  src: "./fonts/SpaceGrotesk-Medium.ttf",
  variable: "--font-space-medium",
  weight: "500",
});

export const metadata: Metadata = {
  title: "QA Engine | Web Development & QA Automation Agency",
  description:
    "QA Engine is a modern web development and QA automation agency. We build scalable web applications, optimize performance, and ensure high-quality software through advanced testing and automation solutions.",
  authors: [
    {
      name: "QA Engine",
      url: "https://qaengine.dev",
    },
  ],
  keywords: [
    "QA Engine",
    "web development",
    "frontend development",
    "backend development",
    "full stack development",
    "React development",
    "Next.js development",
    "Laravel development",
    "QA automation",
    "software testing",
    "end-to-end testing",
    "Playwright testing",
    "Cypress testing",
    "automation testing",
    "bug fixing",
    "performance optimization",
    "API development",
    "SaaS development",
    "startup development",
    "web agency",
    "dev agency",
    "quality assurance",
    "test automation",
    "scalable applications",
    "clean architecture",
    "modern web apps",
  ],
  creator: "QA Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` 
          ${spaceBold.className}
          ${spaceLight.className} 
          ${spaceMedium.className} 
          ${spaceRegular.className} 
          ${spaceSemiBold.className} 
          antialiased
        `}
      >
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></Script>
        <div
          className="
            overflow-clip inset-0 -z-10 h-full w-full bg-transparent bg-[size:14px_24px]
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
          "
        >
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="default"
            disableTransitionOnChange
          >
            <MaxWidthWrapper>
              <Header />
              {children}
              <Footer />
            </MaxWidthWrapper>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
