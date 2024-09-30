"use server";

import { get } from "@/shared/services/transport";

export const getStatistic = async () => {
    const response = await get("statistic_app");
    return response.data;
};
