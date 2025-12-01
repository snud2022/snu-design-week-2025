export interface ProgramEvent {
  date: string; // "Dec 05" or "Dec 06"
  time: string; // "18:00 - 21:00"
  title: {
    kr: string;
    en: string;
  };
  speakers?: {
    name: string;
  }[];
  description: {
    kr: string;
  };
  imageUrl?: string;
}
