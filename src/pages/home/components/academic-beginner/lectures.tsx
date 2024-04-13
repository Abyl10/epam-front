import { DrawerCard } from "@/components/drawer-card";
import { ILearningQuestionsByLevel } from "@/ts/types";
import { skill_division } from "@/consts/levels";

interface IAcademicBeginnerLecturesProps {
  data: ILearningQuestionsByLevel["lectures"] | undefined;
}

export const AcademicBeginnerLectures: React.FC<
  IAcademicBeginnerLecturesProps
> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      {data && data.length === 0 && (
        <div className="text-center text-sm text-gray-500">
          Нет доступных уроков
        </div>
      )}
      {data &&
        data.map((lecture) => (
          <DrawerCard
            key={lecture.id}
            title={lecture.title}
            description={lecture.text.substring(0, 50) + "..."}
            badgeStatus={lecture.level === 1 ? "Не начато" : "В процессе"}
            skillRequired={skill_division[lecture.level] + "+"}
          />
        ))}
    </div>
  );
};
