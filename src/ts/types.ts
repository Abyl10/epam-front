// {
//     "user_data": {
//         "id": 1,
//         "username": "elamirkad",
//         "email": "user@example.com"
//     },
//     "reading_exp": 2000,
//     "speaking_exp": 3000,
//     "grammar_exp": 1000,
//     "vocabulary_exp": 0,
//     "writing_exp": 0,
//     "total_experience": 6000,
//     "total_level": {
//         "level": 6,
//         "title": "Рубасы"
//     }
// }

export interface IUserData {
  id: number;
  username: string;
  email: string;
}

export interface IProfileLearning {
  user_data: IUserData;
  reading_exp: number;
  speaking_exp: number;
  grammar_exp: number;
  vocabulary_exp: number;
  writing_exp: number;
  total_experience: number;
  total_level: {
    level: number;
    title: string;
  };
}
