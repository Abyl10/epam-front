import { api } from "./api";
import { IProfileLearning, ILearningQuestionsByLevel } from "@/ts/types";

export const getLearningProfile = async (): Promise<IProfileLearning> => {
  return await api
    .get("/learning/experience/")
    .then((response) => response.data);
};

export const getLearningQuestionByLevel = async (
  level: number
): Promise<ILearningQuestionsByLevel> => {
  return await api
    .get(`/learning/questions/${level}/`)
    .then((response) => response.data);
};
