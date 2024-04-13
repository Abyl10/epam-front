import { api } from "./api";
import { IProfileLearning } from "@/ts/types";

export const getLearningProfile = async (): Promise<IProfileLearning> => {
  return await api
    .get("/learning/experience/")
    .then((response) => response.data);
};
