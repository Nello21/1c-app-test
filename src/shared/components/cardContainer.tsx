import { ProgressBar } from "./progress-bar";
import { ArrowLeft } from "lucide-react";
import { Plan } from "@/entity/statistic-card/_domain/types";
import { FormUpdateCard } from "@/features/statistic-cards/ui/form-update-card";

interface CardProps {
    statistic: { count: number; sum: number };
    plan: Plan;
    planCurrent: number;
    title: string;
    planType: "day_plan" | "week_plan" | "month_plan";
}

export const CardContainer = ({
    statistic,
    plan,
    planCurrent,
    planType,
    title,
}: CardProps) => {
    return (
        <div className="flex flex-col w-full">
            <span className="uppercase text-xl sm:text-2xl font-semibold flex flex-row justify-between">
                <span className="text-nowrap">{title}</span>
                <div className="flex flex-row gap-1 items-center">
                    <ArrowLeft size={20} />
                    <ArrowLeft size={20} className="rotate-180" />
                </div>
            </span>
            <div className="flex flex-col w-full bg-white p-4 shadow-lg rounded-lg space-y-2">
                <div className="text-xl font-semibold">
                    <span
                        className={
                            statistic.count >= planCurrent
                                ? "text-green-light"
                                : ""
                        }
                    >
                        {statistic.count}
                    </span>{" "}
                    заявок
                </div>
                <div className="text-2xl font-semibold">{statistic.sum} ₽</div>
                <div className="flex mt-2 items-center font-semibold">
                    Цель за день:
                    <span className="text-green-light pl-2">
                        {planCurrent} заявок{" "}
                    </span>
                    <FormUpdateCard
                        data={plan}
                        planType={planType}
                        planCurrent={planCurrent}
                    />
                </div>

                <ProgressBar value={statistic.count} planValue={planCurrent} />
            </div>
        </div>
    );
};
