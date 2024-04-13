import React, { useEffect, useContext, createContext, useState } from "react";

import { IProfileLearning } from "@/ts/types";
import { getLearningProfile } from "@/api/learning";

export const initialUserData: IProfileLearning = {
  user_data: {
    id: 0,
    username: "",
    email: "",
  },
  reading_exp: 0,
  speaking_exp: 0,
  grammar_exp: 0,
  vocabulary_exp: 0,
  writing_exp: 0,
  total_experience: 0,
  total_level: {
    level: 0,
    title: "",
  },
};

type UserContextType = {
  user: IProfileLearning | null;
  setUser: (user: IProfileLearning) => void;
  logout: () => void;
  fetchUserProfile: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: initialUserData,
  setUser: () => {},
  logout: () => {},
  fetchUserProfile: () => {},
});

export const useUserContext = (): UserContextType => useContext(UserContext);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IProfileLearning | null>(null);

  const fetchUserProfile = () => {
    const token = localStorage.getItem("token");
    if (token) {
      getLearningProfile()
        .then((res) => {
          console.log(res);
          setUser(res)
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
