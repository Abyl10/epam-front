import { api } from "./api";
export interface IAuthResponse {
  username: string;
  tokens: {
    access: string;
    refresh: string;
  };
}

export const login = async (
  username: string,
  password: string
): Promise<IAuthResponse> => {
  return await api
    .post("/auth/login/", {
      username,
      password,
    })
    .then((response) => response.data);
};
