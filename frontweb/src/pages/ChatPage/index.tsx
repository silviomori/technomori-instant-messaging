import './styles.css';

import { AppContext } from 'AppContext';
import { useContext, useEffect, useRef } from 'react';

import ChatPageBodyNoMessages from './ChatPageBodyNoMessages';
import ChatPageBodyNotSelected from './ChatPageBodyNotSelected';
import ChatPageTitleBar from './ChatPageTitleBar';
import ChatPageWriteMessage from './ChatPageWriteMessage';
import { useAuth0 } from '@auth0/auth0-react';

const ChatPage = () => {
  const { user } = useAuth0();

  const { activeChat, messagesActiveChat } = useContext(AppContext);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the end of the chat window whenever messages change
  useEffect(() => {
    chatWindowRef?.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messagesActiveChat]);

  return (
    <div className="container d-flex flex-column">
      {activeChat ? (
        <>
          <ChatPageTitleBar />
          <div className="hide-scrollbar h-100" ref={chatWindowRef}>
            {messagesActiveChat?.map((msg) => {
              const isMessageMine = msg.user.email === user?.email;
              return (
                <div
                  className={`d-flex mt-4 align-items-end ${
                    isMessageMine ? 'flex-row-reverse' : ''
                  }`}
                  key={msg.id}
                >
                  <img
                    src={msg.user.profileImgUrl}
                    alt="#"
                    className="avatar-img-48"
                  />
                  <div
                    className={`d-flex flex-column ${
                      isMessageMine ? 'align-items-end me-3' : 'ms-3'
                    }`}
                  >
                    <div
                      className={`card mt-2 chat-page-body-message ${
                        isMessageMine ? 'chat-page-body-message-out' : ''
                      }`}
                      style={{ width: 'fit-content' }}
                      key={msg.id}
                    >
                      <span>{msg.text}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {!messagesActiveChat && (
              <div className="h-100">
                <ChatPageBodyNoMessages />
              </div>
            )}
          </div>

          <ChatPageWriteMessage />
        </>
      ) : (
        <ChatPageBodyNotSelected />
      )}
    </div>
  );
};

export default ChatPage;
