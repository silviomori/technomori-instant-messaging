import React, { useContext } from 'react';

import './styles.css';

import { NavigationContext, Tabs } from 'NavigationContext';
import ChatList from 'pages/ChatList';
import ChatPage from 'pages/ChatPage';
import FriendList from 'pages/FriendList';

const Home = () => {
  const { activeTab } = useContext(NavigationContext);

  return (
    <div className="home-container d-flex w-100 h-100">
      <aside className="home-container-sidebar p-4 pb-0">
        {activeTab === Tabs.CHATS && <ChatList />}
        {activeTab === Tabs.FRIENDS && <FriendList />}
        {activeTab === Tabs.NEW_CHAT && <h1>New Chat</h1>}
        {activeTab === Tabs.NOTIFICATION && <h1>Notification</h1>}
        {activeTab === Tabs.PROFILE && <h1>Profile</h1>}
        {activeTab === Tabs.SETTINGS && <h1>Settings</h1>}
        {activeTab === Tabs.SUPPORT && <h1>Support</h1>}
        {activeTab === Tabs.SWITCHER && <h1>Switcher</h1>}
      </aside>
      <main className="home-container-main">
        <ChatPage />
      </main>
    </div>
  );
};

export default Home;
