import { Message } from './Message';
import { UserProfile } from './UserProfile';

export type ChatDescription = {
  id: string;
  owner: UserProfile;
  name: string;
  purpose: string;
  openToPublic: string;
  users: UserProfile[];
};

export type Chat = {
  id: string;
  owner: UserProfile;
  name: string;
  purpose: string;
  openToPublic: string;
  users: UserProfile[];
  messages: Message[];
};
