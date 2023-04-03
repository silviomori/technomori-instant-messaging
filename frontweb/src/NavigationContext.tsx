import React from 'react';

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

type NavigationContextType = {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
};

export const NavigationContext = React.createContext<NavigationContextType>({
  activeTab: Tabs.CHATS,
  setActiveTab: () => {},
});
