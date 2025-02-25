export interface Question {
  question: string;
  options: string[];
  answer?: number;
  date: string;
  explanation?: string;
  difficulty?: string;
}

export interface Profile {
  username: string;
}
