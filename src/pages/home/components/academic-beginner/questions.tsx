import { DrawerCard } from "@/components/drawer-card";
import { ILearningQuestionsByLevel } from "@/ts/types";

interface IAcademicBeginnerQuestionsProps {
  reading_questions: ILearningQuestionsByLevel["reading_task"] | undefined;
  grammar_questions: ILearningQuestionsByLevel["grammar_task"] | undefined;
  vocabulary_questions:
    | ILearningQuestionsByLevel["vocabulary_task"]
    | undefined;
}

export const AcademicBeginnerQuestions: React.FC<
  IAcademicBeginnerQuestionsProps
> = ({ reading_questions, grammar_questions, vocabulary_questions }) => {
  const isQuestionsEmpty =
    !reading_questions && !grammar_questions && !vocabulary_questions;
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      {isQuestionsEmpty && (
        <div className="text-center text-sm text-gray-500">
          Нет доступных заданий
        </div>
      )}
      {reading_questions &&
        reading_questions.map((question) => (
          <DrawerCard
            key={question.id}
            title={question.text}
            description={question.question}
            badgeStatus={question.solved ? "Сделано" : "Не начато"}
            skillRequired={"Навык чтения"}
          />
        ))}
      {grammar_questions &&
        grammar_questions.map((question) => (
          <DrawerCard
            key={question.id}
            title={question.question}
            badgeStatus={question.solved ? "Сделано" : "Не начато"}
            skillRequired={"Грамматика"}
          />
        ))}
      {vocabulary_questions &&
        vocabulary_questions.map((question) => (
          <DrawerCard
            key={question.id}
            title={question.question}
            badgeStatus={question.solved ? "Сделано" : "Не начато"}
            skillRequired={"Словарь"}
          />
        ))}
      {/* <DrawerCard
        title={"Чтение академических текстов"}
        description={
          "Каждое чтение сопровождается вопросами для самопроверки понимания прочитанного. 2 текста."
        }
        badgeStatus={"В процессе"}
        skillRequired={"Навык чтения"}
      />
      <DrawerCard
        title={"Чтение академических текстов"}
        description={
          "Каждое чтение сопровождается вопросами для самопроверки понимания прочитанного. 2 текста."
        }
        badgeStatus={"В процессе"}
        skillRequired={"Навык чтения"}
      />
      <DrawerCard
        title={"Чтение академических текстов"}
        description={
          "Каждое чтение сопровождается вопросами для самопроверки понимания прочитанного. 2 текста."
        }
        badgeStatus={"В процессе"}
        skillRequired={"Навык чтения"}
      /> */}
    </div>
  );
};
