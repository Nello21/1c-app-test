"use client";

import { CardContainer } from "@/shared/components/cardContainer";
import { ChartPie } from "lucide-react";
import { useState } from "react";

export const CardsList = () => {
    const [cardsData, setCardsData] = useState([
        {
            value: 600,
            proceeds: 600,
            targetValue: 1000,
            currency: "₽",
        },
        {
            value: 4000,
            proceeds: 4000,
            targetValue: 5000,
            currency: "₽",
        },
        {
            value: 10000,
            proceeds: 10000,
            targetValue: 9000,
            currency: "₽",
        },
    ]);

    const handleEditTarget = (index: number, newTarget: number) => {
        const newData = [...cardsData];
        newData[index].targetValue = newTarget;
        setCardsData(newData);
    };

    return (
        <div className="max-w-[1300px] mx-auto mt-4">
            <header className="w-full h-16 bg-gray-100 flex items-center justify-center mb-6">
                <h1 className="flex text-xl font-bold uppercase">
                    Dashboard <ChartPie className="inline ml-2" />
                </h1>
            </header>
            <div className="grid gap-4 grid-cols-3">
                {cardsData.map((card, index) => (
                    <CardContainer
                        key={index}
                        value={card.value}
                        targetValue={card.targetValue}
                        proceeds={card.proceeds}
                        currency={card.currency}
                        onEdit={(newTarget) =>
                            handleEditTarget(index, newTarget)
                        }
                    />
                ))}
            </div>
        </div>
    );
};
