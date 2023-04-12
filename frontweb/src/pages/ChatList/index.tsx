import { useContext, useEffect, useState } from 'react';

import SearchBar from 'components/SearchBar';
import ChatSummaryCard from 'components/ChatSummaryCard';
import { ChatDescription } from 'types/Chat';
import { AppContext } from 'AppContext';

const ChatList = () => {
  const { chatDescriptions, setActiveChat } = useContext(AppContext);

  return (
    <div className="d-flex flex-column w-100">
      <div className="mb-3">
        <h2 className="fw-bold m-0">Chats</h2>
        <SearchBar />
      </div>

      <div className="hide-scrollbar">
        {chatDescriptions &&
          chatDescriptions.map((chat) => {
            return (
              <a
                key={chat.id}
                onClick={() => {
                  setActiveChat(chat.id);
                }}
              >
                <ChatSummaryCard chatDescription={chat} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ChatList;
