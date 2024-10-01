"use client";

import { CardsList } from "@/features/statistic-cards/cards-list";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center p-[20px]">
            <div className="max-w-[1300px] w-full">
                <CardsList />
            </div>
        </div>
    );
}
