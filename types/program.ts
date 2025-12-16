
export type ProgramTalk = {
  id: string;
  time: string;
  type: string;
  title: string;
  speakers?: string[];
  track?: string;
  description?: string;       
  bigDescription?: string;    
};

export type ProgramDay = {
  items: ProgramTalk[];
};
