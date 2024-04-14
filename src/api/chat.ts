import { api } from "./api";

export const createChat = async (userId: number): Promise<{ id: string }> => {
  return await api
    .post("/learning/chat/create/", { user_id: userId })
    .then((res) => res.data);
};

export const sendPromptToChat = async (
  chad_id: string,
  prompt_kk: string
): Promise<{ response: string }> => {
  return await api
    .post(`/learning/chat/${chad_id}/`, { prompt_kk })
    .then((res) => res.data);
};
