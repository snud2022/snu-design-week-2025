export interface ProgramEvent {
  month: string; // "Dec"
  day: string; // "05"
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
