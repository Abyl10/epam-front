import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademicBeginnerLectures } from "../components/academic-beginner/lectures";
import { useEffect, useState } from "react";
import { getLearningProgramByLevel } from "@/api/learning";
import { ILearningProgramByLevel } from "@/ts/types";
import { tasks } from "@/consts/levels";
import { AcademicBeginnerQuestions } from "../components/academic-beginner/questions";

export const AcademicBeginner = () => {
  const [data, setData] = useState<ILearningProgramByLevel>();

  useEffect(() => {
    getLearningProgramByLevel(1).then((data) => setData(data));
  }, []);

  return (
    <div className="max-h-[600px] overflow-y-auto">
      <DrawerHeader>
        <DrawerTitle>Академический Казахский I</DrawerTitle>
        <DrawerDescription>Уровень: Сарбаз +</DrawerDescription>
      </DrawerHeader>
      <div className="p-2">
        <h4 className="mb-2 font-bold">Описание:</h4>
        <p className="text-sm">
          Academic Kazakh I — это начальный уровень специализированной
          программы, предназначенной для изучающих казахский язык в
          академическом контексте. Этот уровень направлен на формирование
          твердой основы базовой грамматики, улучшение навыков чтения и развитие
          способности поддерживать длительные и содержательные разговоры с
          искусственным интеллектом. Программа идеально подходит для студентов,
          исследователей или профессионалов, готовящихся к академической
          деятельности в казахскоязычной среде.
        </p>
      </div>
      <div className="p-2">
        <Tabs defaultValue="questions" className="w-full mb-2">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="questions">
              Задания
            </TabsTrigger>
            <TabsTrigger className="w-full" value="lectures">
              Уроки
            </TabsTrigger>
          </TabsList>
          <TabsContent value="questions">
            <AcademicBeginnerQuestions beginner_tasks={tasks} />
          </TabsContent>
          <TabsContent value="lectures">
            <AcademicBeginnerLectures data={data?.lessons} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
