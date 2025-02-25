// TOMORROW: WILL BE SHOWN THE DAY AFTER THAT. ELSE RETURN NULL

export interface Question {
  question: string;
  options: string[];
  answer?: number; // 1,2,3,4 TOMORROW
  date: string;
  explanation?: string; // TOMORROW
  difficulty?: string; // TOMORROW
}

export interface User {
  name: string; // INPUT
  regNo: string; // INPUT
  username: string; // INPUT
  points: number; // OUTPUT
  rank: number; // OUTPUT
}
