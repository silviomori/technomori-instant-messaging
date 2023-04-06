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
      <div className="d-flex flex-column flex-xl-row-reverse vh-100">
        <div className="hide-scrollbar w-100 h-100">
          <Home />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </NavigationContext.Provider>
  );
}

export default App;
