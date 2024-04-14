import { DrawerCard } from "@/components/drawer-card";

interface IAcademicBeginnerTasks {
  id: number;
  text: string;
  description: string;
  badgeStatus: string;
  skillRequired: string;
}

interface IAcademicBeginnerQuestionsProps {
  beginner_tasks: IAcademicBeginnerTasks[];
}

export const AcademicBeginnerQuestions: React.FC<
  IAcademicBeginnerQuestionsProps
> = ({ beginner_tasks }) => {
  const isQuestionsEmpty = !beginner_tasks;
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      {isQuestionsEmpty && (
        <div className="text-center text-sm text-gray-500">
          Нет доступных заданий
        </div>
      )}
      {beginner_tasks &&
        beginner_tasks.map((question) => (
          <DrawerCard
            key={question.id}
            title={question.text}
            description={question.description}
            badgeStatus={question.badgeStatus}
            skillRequired={"Навык чтения"}
          />
        ))}
    </div>
  );
};
