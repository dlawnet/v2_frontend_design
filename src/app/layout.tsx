import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@app/providers";
import Header from "@app/features/landing-page/components/Header";
import Footer from "@app/features/landing-page/components/Footer";

export const metadata: Metadata = {
  title: "DLAWNET",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className={""}
      >
      <Providers>
          {children}
          <Footer />
      </Providers>
      </body>
    </html>
  );
}
