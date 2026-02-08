import type { Metadata } from "next";
import { Roboto, Kalam } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "1 Click Onboarding Install Pack",
  description:
    "Streamline your client onboarding with the 1 Click Client Onboarding Install Pack. Install in 30 minutes, save hours every week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${kalam.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
