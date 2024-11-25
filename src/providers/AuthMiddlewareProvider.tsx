"use client"
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

const AuthMiddlewareProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('dlawnet_token');
        const restrictedPaths = ['/dashboard','/admin'];

        const currentPath = window.location.pathname;

        if (!token && restrictedPaths.some(path => currentPath.startsWith(path))) {
            router.push('/auth/login');
        }
    }, [router]);

    return <>{children}</>;
};

export default AuthMiddlewareProvider;
