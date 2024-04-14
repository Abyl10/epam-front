import {
  getCorrectAnswerToQuestion,
  getLearningLessonById,
} from "@/api/learning";
import { Button } from "@/components/ui/button";
import { ILesson } from "@/ts/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Lesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lessonData, setLessonData] = useState<ILesson[]>();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ correct: boolean }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  if (!id) {
    navigate("/");
  }

  useEffect(() => {
    if (id) {
      getLearningLessonById(id).then((data) => setLessonData(data));
    }
  }, []);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitAnswers = () => {
    const answerPromises = Object.entries(answers).map(
      ([questionId, answer]) => {
        return getCorrectAnswerToQuestion(id!, answer)
          .then((response) => ({
            questionId: parseInt(questionId, 10),
            correct: response.correct,
          }))
          .catch((error) => {
            console.error(
              "Error submitting answer for question:",
              questionId,
              error
            );
            return {
              questionId: parseInt(questionId, 10),
              correct: false,
              error: true,
            };
          });
      }
    );

    Promise.all(answerPromises).then((results) => {
      setFeedback(results);
      setSubmitted(true);
    });
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-4">
        {lessonData &&
          lessonData.map((question) => (
            <div key={question.id}>
              <h1 className="font-bold">{question.question}</h1>
              <div className="flex flex-col">
                {question.answers.answers.map((answer) => (
                  <label key={answer}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={answer}
                      checked={answers[question.id] === answer}
                      onChange={() => handleAnswerChange(question.id, answer)}
                    />
                    {answer}
                  </label>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-5">
        {!submitted && (
          <Button
            onClick={handleSubmitAnswers}
            disabled={Object.values(answers).some((a) => a === "")}
          >
            Submit Answers
          </Button>
        )}
      </div>
      <div className="mt-5">
        {submitted &&
          feedback.map((item, index) => (
            <div key={index + 1}>
              <p>
                Question {index + 1}: {item.correct ? "Correct" : "Incorrect"}
              </p>
            </div>
          ))}

        {/* display the number of correct */}
        {submitted && (
          <p>
            {feedback.filter((item) => item.correct).length} /{" "}
            {lessonData && lessonData.length} correct
          </p>
        )}
      </div>
    </div>
  );
};

export default Lesson;
