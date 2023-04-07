import { useEffect, useState } from 'react';

import SearchBar from 'components/SearchBar';
import ChatSummaryCard from 'components/ChatSummaryCard';
import { ChatDescription } from 'types/ChatDescription';

const ChatList = () => {
  const [chatList, setChatList] = useState<ChatDescription[]>();
  useEffect(() => {
    fetch('http://localhost:8080/chats').then((res) => {
      res.json().then((res) => setChatList(res));
    });
  }, []);

  return (
    <div className="d-flex flex-column w-100">
      <div className="mb-3">
        <h2 className="fw-bold m-0">Chats</h2>
        <SearchBar />
      </div>

      <div className="hide-scrollbar">
        {chatList &&
          chatList.map((chat) => {
            console.log(chat);
            return (
              <div key={chat.id}>
                <ChatSummaryCard chatDescription={chat} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChatList;
