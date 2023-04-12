import { UserProfile } from './UserProfile';

export type Message = {
  id: string;
  text: string;
  sentAt: string;
  user: UserProfile;
  chatId: number;
};

export type MessageInsert = {
  userId?: number;
  chatId?: number;
  text?: string;
};
