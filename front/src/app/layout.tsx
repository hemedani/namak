import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نمک: سفره‌ای از برکت حسین",
  description: "نظام حمایت غذایی مبتنی بر نذری برای خانواده‌های ایرانی",
  keywords: "نمک, حمایت غذایی, نذری, امام حسین, کمک به خانواده‌ها",
  authors: [{ name: "Namak Team" }],
  creator: "Namak Team",
  publisher: "Namak Team",
  openGraph: {
    title: "نمک: سفره‌ای از برکت حسین",
    description: "نظام حمایت غذایی مبتنی بر نذری برای خانواده‌های ایرانی",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "نمک: سفره‌ای از برکت حسین",
    description: "نظام حمایت غذایی مبتنی بر نذری برای خانواده‌های ایرانی",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
