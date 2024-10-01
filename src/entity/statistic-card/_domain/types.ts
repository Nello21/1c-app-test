export type Statistic = {
    count_day: number;
    sum_day: number;
    count_week: number;
    sum_week: number;
    count_month: number;
    sum_month: number;
};

export type Plan = {
    day_plan: number;
    week_plan: number;
    month_plan: number;
    data: Date;
};
