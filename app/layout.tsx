import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Financial Calculator Station",
    template: "%s | Financial Calculator Station"
  },
  description:
    "Practical finance calculators for planning savings, investments, and long-term money decisions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
