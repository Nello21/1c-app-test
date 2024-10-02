"use client";

import {
    useGetManagerPlan,
    useGetStatistic,
} from "@/entity/statistic-card/statistic-card";
import { CardContainer } from "@/shared/components/cardContainer";
import { Loader } from "@/shared/components/loader";
import { ChartPie } from "lucide-react";

export const CardsList = () => {
    const {
        data: statData,
        isError: isStatError,
        isLoading: isStatLoading,
    } = useGetStatistic();
    const {
        data: planData,
        isError: isPlanError,
        isLoading: isPlanLoading,
    } = useGetManagerPlan();

    if (isStatLoading && isPlanLoading) return <Loader />;
    if (isStatError && isPlanError) return <div>Error</div>;

    return (
        <div className="w-full space-y-6">
            <header className="w-full h-[5dvh] sm:h-[60px] bg-white flex items-center justify-between p-5 rounded-xl overflow-hidden">
                <h1 className="max-[450px]:text-[15px] max-[360px]:text-[12px] max-[300px]:text-[10px] text-[20px] sm:text-[30px] font-semibold uppercase text-nowrap space-x-1">
                    <span className="max-[400px]:text-[15px]">WT10</span>
                    <span className="text-gray-dark">
                        application analytics
                    </span>
                </h1>
                <ChartPie className="inline ml-2 text-gray-dark" size={24} />
            </header>
            <div className="flex flex-col sm:flex-row gap-4">
                {statData && planData && (
                    <>
                        <CardContainer
                            statistic={{
                                count: statData.count_day,
                                sum: statData.sum_day,
                            }}
                            plan={planData}
                            planCurrent={planData.day_plan}
                            title="за день"
                            planType="day_plan"
                        />
                        <CardContainer
                            statistic={{
                                count: statData.count_week,
                                sum: statData.sum_week,
                            }}
                            plan={planData}
                            planCurrent={planData.week_plan}
                            title="за неделю"
                            planType="week_plan"
                        />
                        <CardContainer
                            statistic={{
                                count: statData.count_month,
                                sum: statData.sum_month,
                            }}
                            plan={planData}
                            planCurrent={planData.month_plan}
                            title="за месяц"
                            planType="month_plan"
                        />
                    </>
                )}
            </div>
        </div>
    );
};
