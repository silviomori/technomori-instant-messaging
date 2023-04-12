import { Message } from './Message';
import { UserProfile } from './UserProfile';

export type ChatDescription = {
  id: number;
  owner: UserProfile;
  name: string;
  purpose: string;
  openToPublic: string;
  users: UserProfile[];
  latestMessage: Message;
};

export type Chat = {
  id: number;
  owner: UserProfile;
  name: string;
  purpose: string;
  openToPublic: string;
  users: UserProfile[];
  messages: Message[];
};
