import { Progress } from "@radix-ui/themes";
import { ArrowUp } from "lucide-react";

export const ProgressBar = ({
    value,
    targetValue,
}: {
    value: number;
    targetValue: number;
}) => {
    const progressValue = Math.min((value / targetValue) * 100, 100);
    const isOverflow = value > targetValue;
    // const progressColor = isOverflow ? "bg-red-500" : "bg-blue-500";
    const overProgress = isOverflow
        ? Math.floor((targetValue / targetValue) * 100)
        : 100;

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <span>
                    {value} <ArrowUp className="inline" />
                </span>
                <span>{Math.round(progressValue)}%</span>
            </div>

            {isOverflow ? (
                <Progress value={progressValue} color="crimson" />
            ) : (
                <Progress
                    value={progressValue}
                    max={overProgress}
                    color="indigo"
                />
            )}
        </div>
    );
};
