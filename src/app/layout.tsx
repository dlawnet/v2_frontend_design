import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@app/providers";
import Header from "@app/features/landing-page/components/Header";

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
      </Providers>
      </body>
    </html>
  );
}
