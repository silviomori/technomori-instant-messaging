import React, { useState, useEffect } from 'react';

import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import { AppContext, Tabs } from 'AppContext';
import Home from 'pages/Home';
import { ChatDescription } from 'types/Chat';
import { Message } from 'types/Message';
import Auth from 'pages/Auth';
import { useAuth0 } from '@auth0/auth0-react';
import { UserProfile } from 'types/UserProfile';

function App() {
  const { isAuthenticated } = useAuth0();

  const [userProfile, setUserProfile] = useState<UserProfile | undefined>();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.CHATS);
  const [activeChat, setActiveChat] = useState<number | undefined>(undefined);
  const [chatDescriptions, setChatDescriptions] = useState<
    ChatDescription[] | undefined
  >(undefined);
  const [messagesActiveChat, setMessagesActiveChat] = useState<
    Message[] | undefined
  >([]);
  const [eventSource, setEventSource] = useState<EventSource>();

  // subscribe to chat updates
  useEffect(() => {
    if (chatDescriptions) {
      const chatIds = chatDescriptions.map((chat: any) => chat.id);
      const newEventSource = new EventSource(
        `http://localhost:8080/messages/stream?chatIds=${chatIds}`,
      );
      setEventSource(newEventSource);

      return () => {
        newEventSource.close();
      };
    }
  }, [chatDescriptions]);

  // define the 'handleEvent' function used when a message arrives
  useEffect(() => {
    if (eventSource) {
      eventSource.onmessage = (event) => {
        const newMessage = JSON.parse(event.data);
        setChatDescriptions((previous) => {
          if (previous) {
            const chat = previous?.find((chat) => chat.id == newMessage.chatId);
            if (chat) {
              chat.latestMessage = newMessage;
            }
            return [...previous];
          }
        });

        if (activeChat == newMessage.chatId) {
          setMessagesActiveChat((previous) => {
            return previous ? [...previous, newMessage] : [newMessage];
          });
        }
      };
    }
  }, [eventSource, activeChat]);

  return (
    <AppContext.Provider
      value={{
        userProfile,
        setUserProfile,
        activeTab,
        setActiveTab,
        activeChat,
        setActiveChat,
        chatDescriptions,
        setChatDescriptions,
        messagesActiveChat,
        setMessagesActiveChat,
      }}
    >
      {isAuthenticated ? (
        <div className="d-flex flex-column flex-xl-row-reverse vh-100">
          <div className="hide-scrollbar w-100 h-100">
            <Home />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </AppContext.Provider>
  );
}

export default App;
