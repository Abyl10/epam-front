import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface IDrawerCardProps {
  title: string;
  skillRequired: string;
  description?: string;
  onClick?: () => void;
  badgeStatus?: string;
}

const badgeColors: Record<string, string> = {
  "В процессе": "bg-blue-500",
  Завершено: "bg-green-500",
  "Не начато": "bg-red-500",
  Сделано: "bg-green-500",
};

export const DrawerCard: React.FC<IDrawerCardProps> = ({
  title,
  description,
  badgeStatus,
  skillRequired,
  onClick,
}) => {
  const badgeColor = badgeColors[badgeStatus || ""];

  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center">
            <Icons.folder />
            <span className="ml-2">{skillRequired}</span>
          </div>
          {badgeStatus && (
            <Badge color={badgeColor} className={cn("text-white")}>
              {badgeStatus}
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
