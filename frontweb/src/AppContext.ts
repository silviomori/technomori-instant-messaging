import React from 'react';
import { ChatDescription } from 'types/Chat';
import { Message } from 'types/Message';
import { UserProfile } from 'types/UserProfile';

export enum Tabs {
  NEW_CHAT,
  FRIENDS,
  CHATS,
  NOTIFICATION,
  SUPPORT,
  SWITCHER,
  SETTINGS,
  PROFILE,
}

type AppContextType = {
  userProfile: UserProfile | undefined;
  setUserProfile: (profile: UserProfile) => void;
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
  activeChat?: number;
  setActiveChat: (id: number) => void;
  chatDescriptions?: ChatDescription[];
  setChatDescriptions: (chats: ChatDescription[]) => void;
  messagesActiveChat: Message[] | undefined;
  setMessagesActiveChat: (messages: Message[]) => void;
};

export const AppContext = React.createContext<AppContextType>({
  userProfile: undefined,
  setUserProfile: () => {},
  activeTab: Tabs.CHATS,
  setActiveTab: () => {},
  activeChat: undefined,
  setActiveChat: () => {},
  chatDescriptions: undefined,
  setChatDescriptions: () => {},
  messagesActiveChat: undefined,
  setMessagesActiveChat: () => {},
});
