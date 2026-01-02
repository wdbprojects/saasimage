import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const nunitoSans = Nunito_Sans({variable:'--font-sans'});

/* const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
}); */

export const metadata: Metadata = {
  title: "SaasImage",
  description: "SaaS application that works on images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={nunitoSans.variable}>
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
