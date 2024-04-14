import { api } from "@/api/api";
import { IReading } from "@/ts/types";

export const getAllReading = async (): Promise<IReading[]> => {
  return api.get("/learning/reading/").then((res) => res.data);
};


// export const getReadingQuestionsById = async () => {
//     return api.get()
// }