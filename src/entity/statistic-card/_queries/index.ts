import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getStatistic } from "../_actions/get-statistic";
import { getManagerPlan } from "../_actions/get-manager-plan";
import { postManagerPlan } from "../_actions/post-manager-plan";

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

export function usePostManagerPlan(data: FormData) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => postManagerPlan(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [managerPlan],
            });
        },
        onError: (error) => {
            console.error("Ошибка при отправке данных:", error);
        },
    });
}

export function useInvalidateManagerPlan() {
    const queryClient = useQueryClient();
    return () =>
        queryClient.invalidateQueries({
            queryKey: [managerPlan],
        });
}
