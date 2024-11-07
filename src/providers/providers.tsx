"use client";
import React from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "@app/lib/react-query";
import AuthMiddlewareProvider from "./AuthMiddlewareProvider";
import {ThemeProvider} from "@app/providers/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthMiddlewareProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthMiddlewareProvider>

    );
}
