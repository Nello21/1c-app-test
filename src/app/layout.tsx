import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AppProvider } from "./_providers";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WT-10",
    description: "WT-10",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.className} min-h-[100dvh] bg-gray-light`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
