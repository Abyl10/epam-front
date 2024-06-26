import { api } from "./api";
import {
  IProfileLearning,
  ILearningQuestionsByLevel,
  ILearningProgramByLevel,
  ILearningLessonByIdResponse,
} from "@/ts/types";

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

export const getLearningProgramByLevel = async (
  level: number
): Promise<ILearningProgramByLevel> => {
  return await api
    .get(`/learning/program/${level}/`)
    .then((response) => response.data);
};

export const getLearningLessonById = async (
  lesson_id: string
): Promise<ILearningLessonByIdResponse> => {
  return await api
    .get(`/learning/lesson/${lesson_id}/`)
    .then((response) => response.data);
};

export const getCorrectAnswerToQuestion = async (
  id: string,
  answer: string
): Promise<{ correct: boolean }> => {
  return await api
    .post(`/learning/task/${id}/`, { answer })
    .then((response) => response.data);
};
