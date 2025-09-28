import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Palia Scheduler",
  description: "Create your own schedule of palia activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
