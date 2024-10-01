import { postManagerPlan } from "@/entity/statistic-card/_actions/post-manager-plan";
import { useInvalidateManagerPlan } from "@/entity/statistic-card/_queries";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plan } from "@/entity/statistic-card/_domain/types";

const createManagerPlanSchema = (planType: string) => {
    return z.object({
        [planType]: z.string().min(1, {
            message: "Обязательное поле",
        }),
    });
};

export const useFormCreateManagerPlan = ({
    data,
    planCurrent,
    planType,
}: {
    data: Plan;
    planCurrent: number;
    planType: string;
}) => {
    const invalidateManagerPlan = useInvalidateManagerPlan();

    const { mutate, isLoading } = useMutation({
        mutationFn: postManagerPlan,
        onSuccess: async (data) => {
            if (data.error) {
                form.setError("root", {
                    message: data.error.message ?? "Произошла ошибка",
                });
                return;
            }
            await invalidateManagerPlan();
        },
        onError: (error) => {
            const message =
                error instanceof Error ? error.message : "Произошла ошибка";
            form.setError("root", {
                message: message,
            });
        },
    });

    const schema = createManagerPlanSchema(planType);

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            [planType]: planCurrent.toString(),
        },
    });

    async function onSubmit(values: z.infer<typeof schema>) {
        const dayValue = parseFloat(values.day_plan);
        const weekVvalue = parseFloat(values.week_plan);
        const monthValue = parseFloat(values.month_plan);
        mutate({
            day_plan: planType === "day_plan" ? dayValue : data.day_plan,
            week_plan: planType === "week_plan" ? weekVvalue : data.week_plan,
            month_plan:
                planType === "month_plan" ? monthValue : data.month_plan,
            data: data.data,
        });
    }

    return {
        createManagerPlan: form.handleSubmit(onSubmit),
        form,
        isLoading,
    };
};
