import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IReading } from "@/ts/types";
import { getAllReading } from "@/api/reading";
import { DrawerCard } from "@/components/drawer-card";
import { skill_division } from "@/consts/levels";
import { Loader } from "lucide-react";

// Mocked data for books

export default function Reading() {
  const navigate = useNavigate();
  const [readings, setReadings] = useState<IReading[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllReading().then((data) => {
      setReadings(data);
      setIsLoading(false);
    });
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/book/${id}`); // Navigates to the page for the book with the given ID
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader
          size={48}
          className="
        animate-spin
        "
        />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="font-poppins font-medium text-2xl py-11">Библиотека</h1>
      <div className="flex flex-col gap-2">
        {readings.map((reading) => (
          <DrawerCard
            key={reading.id}
            title={reading.title}
            description={reading.description}
            skillRequired="Оқылым"
            badgeStatus={skill_division[reading.level]}
            onClick={() => handleCardClick(reading.id)}
          />
        ))}
      </div>
    </div>
  );
}
