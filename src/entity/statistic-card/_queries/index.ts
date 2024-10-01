import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStatistic } from "../_actions/get-statistic";
import { getManagerPlan } from "../_actions/get-manager-plan";

const statistic = "statistic";
const managerPlan = "managerPlan";

export function useGetStatistic() {
    return useQuery({
        queryKey: [statistic],
        queryFn: () => getStatistic(),
    });
}

export function useGetManagerPlan() {
    return useQuery({
        queryKey: [managerPlan],
        queryFn: () => getManagerPlan(),
    });
}

export function useInvalidateManagerPlan() {
    const queryClient = useQueryClient();
    return () =>
        queryClient.invalidateQueries({
            queryKey: [managerPlan],
        });
}
