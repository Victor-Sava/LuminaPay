import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "luminaPay - 第四方支付平台",
  description: "为您提供全方位的支付解决方案，支持虚拟货币",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
