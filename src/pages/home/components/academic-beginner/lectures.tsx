import { DrawerCard } from "@/components/drawer-card";
import { ILearningProgramByLevel } from "@/ts/types";
import { skill_division } from "@/consts/levels";
import { useNavigate } from "react-router-dom";

interface IAcademicBeginnerLecturesProps {
  data: ILearningProgramByLevel["lessons"] | undefined;
}

export const AcademicBeginnerLectures: React.FC<
  IAcademicBeginnerLecturesProps
> = ({ data }) => {
  const navigate = useNavigate();
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
            title={lecture.markdown.substring(0, 20) + "..."}
            description={lecture.markdown.substring(0, 50) + "..."}
            badgeStatus={lecture.level === 1 ? "Не начато" : "В процессе"}
            skillRequired={skill_division[lecture.level] + "+"}
            onClick={() => {
              navigate(`/lesson/${lecture.id}`);
            }}
          />
        ))}
    </div>
  );
};
