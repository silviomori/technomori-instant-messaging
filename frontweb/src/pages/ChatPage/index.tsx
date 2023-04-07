import { NavigationContext } from 'NavigationContext';
import { useContext, useEffect, useState } from 'react';

import { Chat } from 'types/Chat';
import ChatPageBody from './ChatPageBody';
import ChatPageBodyNotSelected from './ChatPageBodyNotSelected';
import ChatPageTitleBar from './ChatPageTitleBar';

const ChatPage = () => {
  const { activeChat } = useContext(NavigationContext);
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    activeChat &&
      fetch(`http://localhost:8080/chats/${activeChat}`).then((res) => {
        res.json().then((res) => setChat(res));
      });
  }, [activeChat]);

  return (
    <div className="container d-flex flex-column">
      {activeChat ? (
        <>
          <ChatPageTitleBar />
          <div className="hide-scrollbar h-100">
            <ChatPageBody messages={chat?.messages} />
          </div>
        </>
      ) : (
        <ChatPageBodyNotSelected />
      )}
    </div>
  );
};

export default ChatPage;
