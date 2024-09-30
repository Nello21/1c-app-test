import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ProgressBar } from "./progress-bar";
import { SquarePen } from "lucide-react";
import { useState } from "react";

interface CardProps {
    value: number;
    proceeds: number;
    targetValue: number;
    currency: string;
    onEdit: (newTarget: number) => void;
}

export const CardContainer = ({
    value,
    proceeds,
    targetValue,
    currency,
    onEdit,
}: CardProps) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newTarget, setNewTarget] = useState(targetValue);

    const handleSave = () => {
        onEdit(newTarget);
        setOpenDialog(false);
    };

    return (
        <div className="flex flex-col p-4 shadow-lg rounded-md border max-w-[300px]">
            <div>{value} Заявок</div>
            <div className="text-2xl font-semibold">
                {proceeds} {currency}
            </div>
            <div className="flex mt-2 text-lg">
                Цель за день: {targetValue} заявок
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                        <SquarePen
                            className="ml-2"
                            onClick={() => setOpenDialog(true)}
                        />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Изменить план на день</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-4">
                            <input
                                type="number"
                                className="border rounded px-2 py-1"
                                value={newTarget}
                                onChange={(e) =>
                                    setNewTarget(Number(e.target.value))
                                }
                            />
                            <Button onClick={handleSave}>Сохранить</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <ProgressBar value={value} targetValue={targetValue} />
        </div>
    );
};
