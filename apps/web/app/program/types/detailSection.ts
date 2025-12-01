export interface ProgramSchedule {
  time: string;
  event: string;
}

export interface HiDaySection {
  title: {
    kr: string;
    en: string;
  };
  subtitle?: string;
  date: string;
  time: string;
  location: {
    kr: string;
    en?: string;
  };
  description: {
    kr: string;
    en?: string;
  };
  schedules: ProgramSchedule[];
}

export interface SpeakerDetail {
  name: string;
  nameEn?: string;
  time: string;
  subtitle: string;
  bio: string;
}

export interface TalkSession {
  date: string;
  title: string;
  speakers: SpeakerDetail[];
}

export interface TalkConcertSection {
  title: string;
  dateRange: string;
  location: {
    kr: string;
    en?: string;
  };
  sessions: TalkSession[];
}
