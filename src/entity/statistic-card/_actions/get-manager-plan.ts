"use server";

import { get } from "@/shared/services/transport";

export const getManagerPlan = async () => {
    const response = await get("GetMangerPlan");
    return response.data;
};
