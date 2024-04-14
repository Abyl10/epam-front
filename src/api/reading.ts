import { api } from "@/api/api";
import {
  IReading,
  IReadingAnswersResponse,
  IReadingQuestions,
} from "@/ts/types";

export const getAllReading = async (): Promise<IReading[]> => {
  return api.get("/learning/reading/").then((res) => res.data);
};

// export const getReadingQuestionsById = async () => {
//     return api.get()
// }

export const getReadingById = async (
  id: number
): Promise<IReading & IReadingQuestions> => {
  return api.get(`/learning/reading/${id}`).then((res) => res.data);
};

// {
//     "answers" :[
//     {"id":1, "answer": "this is ans1"},
//     {"id":4, "answer": "this is ans1}
//     {"id":5 "answer": "this is aeaa}
//     {"id":6, "answer": "this is new"}
//     ]
//     }

interface IAnswer {
  id: number;
  answer: string;
}

// interface ISubmitAnswer {
//   answers: IAnswer[];
// }

export const checkReadingAnswers = async (
  answers: IAnswer[]
): Promise<IReadingAnswersResponse> => {
  return api.post("/learning/reading/task/", { answers }).then((res) => res.data);
};
