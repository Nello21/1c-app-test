import * as Progress from "@radix-ui/react-progress";
import { ArrowUp } from "lucide-react";

export const ProgressBar = ({
    value,
    planValue,
}: {
    value: number;
    planValue: number;
}) => {
    const progressValue = Math.min((value / planValue) * 100);
    const isOverflow = value >= planValue;
    const overflowValue = isOverflow ? ((value - planValue) / value) * 100 : 0;

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-lg font-semibold">
                    <ArrowUp className="inline text-green-light" />{" "}
                    <span className={isOverflow ? "text-green-light" : ""}>
                        {value}
                    </span>
                    зявок
                </span>
                <span>{Math.round(progressValue)}%</span>
            </div>

            <div className="relative">
                <Progress.Root
                    className="relative w-full bg-gray-light rounded-full h-2 overflow-hidden"
                    value={Math.min(progressValue, 100)}
                    style={{ width: "100%" }}
                >
                    <Progress.Indicator
                        className="bg-blue-dark h-full transition-transform"
                        style={{
                            transform: `translateX(-${100 - progressValue}%)`,
                        }}
                    />
                </Progress.Root>

                {isOverflow && (
                    <Progress.Root
                        className="absolute right-0 top-0 bg-red-500 h-full w-full rounded-full overflow-hidden"
                        value={Math.min(progressValue, 100)}
                    >
                        <Progress.Indicator
                            className=" bg-green-light h-full transition-transform"
                            style={{
                                transform: `translateX(-${`${overflowValue}`}%)`,
                            }}
                        />
                    </Progress.Root>
                )}
            </div>
        </div>
    );
};
