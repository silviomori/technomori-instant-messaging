import { useContext, useEffect } from 'react';
import { AppContext } from 'AppContext';

import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from 'components/SearchBar';
import ChatSummaryCard from 'components/ChatSummaryCard';

const ChatList = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { chatDescriptions, setChatDescriptions, setActiveChat } =
    useContext(AppContext);

  // fetch chatDescriptions
  useEffect(() => {
    const getChatData = async () => {
      try {
        const token = await getAccessTokenSilently();
        fetch('http://localhost:8080/chats', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          res.json().then((res) => {
            setChatDescriptions(res);
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    getChatData();
  }, [getAccessTokenSilently, setChatDescriptions]);

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
