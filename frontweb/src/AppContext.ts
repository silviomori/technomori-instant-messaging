import React from 'react';
import { ChatDescription } from 'types/Chat';
import { Message } from 'types/Message';

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
  activeTab: Tabs.CHATS,
  setActiveTab: () => {},
  activeChat: undefined,
  setActiveChat: () => {},
  chatDescriptions: undefined,
  setChatDescriptions: () => {},
  messagesActiveChat: undefined,
  setMessagesActiveChat: () => {},
});
