"use server";

import { post } from "@/shared/services/transport";

export const postManagerPlan = async (data: {
    day_plan: number;
    week_plan: number;
    month_plan: number;
    data: Date;
}) => {
    const response = await post("/PostManagerPlan", JSON.stringify(data));
    return response.data;
};
