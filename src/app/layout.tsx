import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AppProvider } from "./_providers";
import "./globals.css";
import "@radix-ui/themes/styles.css";

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
            <body className={`${font.className} min-h-[100dvh]`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
