import {
  getCorrectAnswerToQuestion,
  getLearningLessonById,
} from "@/api/learning";
import MarkdownRenderer from "@/components/markdown-renderer";
import { Button } from "@/components/ui/button";
import { ILearningLessonByIdResponse } from "@/ts/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";

export const Lesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lessonData, setLessonData] = useState<ILearningLessonByIdResponse>();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ correct: boolean }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!id) {
    navigate("/");
  }

  useEffect(() => {
    if (id) {
      setLoading(true);
      getLearningLessonById(id).then((data) => {
        setLessonData(data);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={48} className="animate-spin" />
      </div>
    );
  }

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

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className="p-5 relative"
      style={{
        height: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
    >
      <button
        onClick={handleClick}
        className="absolute top-4 right-4 bg-white rounded-full p-3 text-[#613BE7] w-10 h-10 flex items-center justify-center"
        style={{ borderRadius: "10px" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#613BE7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#613BE7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <MarkdownRenderer
        markdownText={lessonData ? lessonData.markdown : ""}
      ></MarkdownRenderer>
      <div className="flex flex-col gap-4">
        {lessonData &&
          lessonData.tasks.map((question) => (
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
                <span className="font-bold">Question {index + 1}: </span>
                {item.correct ? (
                  <span className="text-green-500">Дұрыс</span>
                ) : (
                  <span className="text-red-500">Дұрыс емес</span>
                )}
              </p>
            </div>
          ))}

        {/* display the number of correct */}
        {submitted && (
          <p>
            {feedback.filter((item) => item.correct).length} /{" "}
            {lessonData && lessonData.tasks.length} Дұрыс
          </p>
        )}
        <Button onClick={() => navigate("/")} className="mt-5">
          Артқа қайту
        </Button>
      </div>
    </div>
  );
};

export default Lesson;
