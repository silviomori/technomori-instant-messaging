import React from 'react';

import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import { useState } from 'react';
import { NavigationContext, Tabs } from 'NavigationContext';
import Home from 'pages/Home';

function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CHATS);

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="d-flex flex-column-reverse flex-xl-row vh-100">
        <Navbar />
        <Home />
      </div>
    </NavigationContext.Provider>
  );
}

export default App;
