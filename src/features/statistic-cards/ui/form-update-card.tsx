"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useFormCreateManagerPlan } from "../model/use-form-update-card";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plan } from "@/entity/statistic-card/_domain/types";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

interface FormUpdateCard {
    data: Plan;
    planCurrent: number;
    planType: "day_plan" | "week_plan" | "month_plan";
}

export function FormUpdateCard({
    data,
    planType,
    planCurrent,
}: FormUpdateCard) {
    const { createManagerPlan, form } = useFormCreateManagerPlan({
        data,
        planType,
        planCurrent,
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <SquarePen
                    className="ml-2 cursor-pointer text-gray-dark"
                    size={18}
                />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle>
                        Изменить план на{" "}
                        {planType === "day_plan"
                            ? "день"
                            : planType === "week_plan"
                            ? "неделю"
                            : "месяц"}
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    {form.formState.errors.root && (
                        <Alert variant="destructive">
                            <AlertTitle className="font-semibold text-xl">
                                Ошибка
                            </AlertTitle>
                            <AlertDescription className="text-xl">
                                {form.formState.errors.root.message}
                            </AlertDescription>
                        </Alert>
                    )}
                    <form onSubmit={createManagerPlan} className="grid gap-1">
                        <FormField
                            control={form.control}
                            name={planType}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Число заявок"
                                            {...field}
                                            className={cn("", {
                                                "border-red-600 bg-red-50":
                                                    form.formState.errors.root,
                                            })}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                className="bg-blue-dark text-white"
                            >
                                Сохранить
                            </Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
