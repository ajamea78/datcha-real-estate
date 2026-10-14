import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Datcha Real Estate | Red Sea Luxury Architectural Brokerage",
  description:
    "More than properties. A lifestyle by the Red Sea. Prime land plots, sea-view apartments, luxury villas, and commercial real estate across Hurghada, El Gouna, Sahl Hasheesh, Makadi Bay, and Soma Bay.",
  keywords: [
    "Datcha Real Estate",
    "Hurghada Properties",
    "El Gouna Real Estate",
    "Sahl Hasheesh Villas",
    "Red Sea Luxury Homes",
    "Egypt Real Estate Investment",
  ],
  icons: {
    icon: "/logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#C0673F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
