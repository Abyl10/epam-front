import { api } from "./api";
import { IChatReport } from "@/ts/types";

export const getChatReports = async (): Promise<IChatReport[]> => {
  return await api.get("/learning/chat/reports/").then((res) => res.data);
};
