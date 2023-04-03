import React, { useContext } from 'react';

import './styles.css';

import { NavigationContext, Tabs } from 'NavigationContext';

const Home = () => {
  const { activeTab } = useContext(NavigationContext);

  return (
    <div className="home-container d-flex w-100">
      <aside className="home-container-sidebar">
        <div>
          {activeTab === Tabs.CHATS && <h1>Chats</h1>}
          {activeTab === Tabs.FRIENDS && <h1>Friends</h1>}
          {activeTab === Tabs.NEW_CHAT && <h1>New Chat</h1>}
          {activeTab === Tabs.NOTIFICATION && <h1>Notification</h1>}
          {activeTab === Tabs.PROFILE && <h1>Profile</h1>}
          {activeTab === Tabs.SETTINGS && <h1>Settings</h1>}
          {activeTab === Tabs.SUPPORT && <h1>Support</h1>}
          {activeTab === Tabs.SWITCHER && <h1>Switcher</h1>}
        </div>
      </aside>
      <main className="home-container-main">
        <h1>Content</h1>
      </main>
    </div>
  );
};

export default Home;
