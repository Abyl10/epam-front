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

export interface IReadingTask {
  id: number;
  text: string;
  audio_url: string;
  question: string;
  ideal_answer: string;
  level: number;
  solved: boolean;
  path: string;
}

export interface IGrammarTask {
  id: number;
  question: string;
  answers: {
    answers: string[];
  };
  correct_answer: string;
  level: number;
  solved: boolean;
  path: string;
}

export interface IVocabularyTask {
  id: number;
  question: string;
  answers: {
    answers: string[];
  };
  correct_answer: string;
  level: number;
  solved: boolean;
  path: string;
}

export interface ILecture {
  id: number;
  title: string;
  text: string;
  level: number;
}

export interface ILearningQuestionsByLevel {
  reading_task: IReadingTask[];
  grammar_task: IGrammarTask[];
  vocabulary_task: IVocabularyTask[];
  lectures: ILecture[];
  level_description: string;
  minimal_level_name: string;
}

export interface IChatReport {
  id: number;
  report_data: {
    vocabulary: {
      score: number;
      comments: string[];
    };
    contextual_understanding: {
      score: number;
      comments: string[];
    };
    communication_effectiveness: {
      score: number;
      comments: string[];
    };
  };
  datetime: string;
}

export interface ILesson {
  id: number;
  lesson: number;
  question: string;
  answers: {
    answers: string[];
  };
  correct_answer: string;
}

export interface ILearningProgramByLevel {
  lessons: {
    id: number;
    level: number;
    markdown: string;
  }[];
  tasks_done: number;
  tasks_total: number;
}
