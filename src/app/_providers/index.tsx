"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Theme } from "@radix-ui/themes";

export function AppProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Theme>{children}</Theme>
        </QueryClientProvider>
    );
}
