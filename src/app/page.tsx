"use client";

import { CardsList } from "@/features/statistic-cards/cards-list";

// import { useGetStatistic } from "@/entity/statistic-card/_queries";

export default function Home() {
    // const { data, isError, isLoading } = useGetStatistic();

    // if (isLoading) return <div>Loading</div>;
    // if (isError) return <div>Error</div>;

    // return <div className="flex flex-col">Дата: {data}</div>;

    return (
        <div className="p-4 flex items-center">
            <CardsList />
        </div>
    );
}
