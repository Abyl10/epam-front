import { useEffect, useState } from "react";
import { checkReadingAnswers, getReadingById } from "@/api/reading";
import {
  IReading,
  IReadingAnswersResponse,
  IReadingQuestions,
} from "@/ts/types";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IAnswer {
  id: number;
  answer: string;
}

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reading, setReading] = useState<(IReading & IReadingQuestions) | null>(
    null
  );
  const [loading, setIsLoading] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<IAnswer[]>([]);
  const [answerResponse, setAnswerResponse] =
    useState<IReadingAnswersResponse>();
  const [isloadingans, setIsLoadingAns] = useState<boolean>(false);

  if (!id) {
    navigate("/reading");
  }

  useEffect(() => {
    setIsLoading(true);
    getReadingById(Number(id))
      .then((data) => {
        setReading(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader size={48} className="animate-spin" />
      </div>
    );
  }

  const handleInputChange = (id: number, answer: string) => {
    const newAnswers = userAnswers.filter((item) => item.id !== id);
    setUserAnswers([...newAnswers, { id, answer }]);
  };

  const handleSubmit = () => {
    // const newAnswers = {
    //   answers: userAnswers,
    // };
    setIsLoadingAns(true);
    checkReadingAnswers(userAnswers)
      .then((res) => {
        setIsLoadingAns(false);
        setAnswerResponse(res);
      })
      .catch((err) => {
        console.error(err);
        setIsLoadingAns(false);
      });
  };

  const handleClick = () => {
    navigate("/reading");
  };

  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
      className="
        article p-5 relative
      "
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
      <h1 className="font-bold text-xl mb-3">{reading?.title}</h1>
      <MarkdownRenderer markdownText={reading?.text_kz || ""} />
      <div className="mb-10"></div>
      <form>
        <Card className="p-5">
          <CardHeader className="text-left font-bold">
            Қайталауға арналған сұрақтар
          </CardHeader>
          <CardContent>
            {reading?.questions.map((question) => (
              <div key={question.id} className="">
                <div className="mb-10">
                  <Label htmlFor="answer" className="mb-1">
                    {question.question_kz}
                  </Label>
                  <Input
                    type="text"
                    id="answer"
                    onChange={(e) =>
                      handleInputChange(question.id, e.target.value)
                    }
                    placeholder="
                      Жауапты енгізіңіз
                    "
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="mt-5 flex justify-center">
          <Button
            type="button"
            onClick={handleSubmit}
            className="
               text-white px-5 py-2 rounded
            "
          >
            {isloadingans ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              "Жауаптарды тексеру"
            )}
          </Button>
        </div>
      </form>

      <div>
        <div>
          {answerResponse && (
            <div>
              <h1 className="font-bold text-xl mt-5">Жауаптардың нәтижесі</h1>
              <div>
                {answerResponse.scores.map((score, index) => (
                  <div key={index} className="mt-5">
                    <h2 className="font-bold text-lg">
                      Сұрақ {index + 1}:{" "}
                      {score === 1 ? (
                        <span className="text-green-500">"Дұрыс"</span>
                      ) : (
                        <span className="text-red-500">"Дұрыс емес"</span>
                      )}
                    </h2>
                    <p>{answerResponse.comments[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
