// types/program.ts

export type ProgramTalk = {
  id: string;
  time: string;
  type: string;
  title: string;
  speakers?: string[];
  track?: string;
  description?: string;       // resumo curto
  bigDescription?: string;    // descrição longa
};

export type ProgramDay = {
  day: number;
  date: string;
  items: ProgramTalk[];
};
