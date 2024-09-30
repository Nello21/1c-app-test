"use server";

import { post } from "@/shared/services/transport";

export const postManagerPlan = async (data: FormData) => {
    const response = await post("GetMangerPlan", data);
    return response.data;
};
