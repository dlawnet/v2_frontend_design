import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@app/providers";
import { AlertProvider } from '@app/providers/AlertContext';
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
        <AlertProvider>
          {children}
        </AlertProvider>
      </Providers>
      </body>
    </html>
  );
}
