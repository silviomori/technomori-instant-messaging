import './styles.css';

import { NavigationContext } from 'NavigationContext';
import { useContext, useEffect, useRef, useState } from 'react';

import { Message } from 'types/Message';
import ChatPageBodyNoMessages from './ChatPageBodyNoMessages';
import ChatPageBodyNotSelected from './ChatPageBodyNotSelected';
import ChatPageTitleBar from './ChatPageTitleBar';

const ChatPage = () => {
  const { activeChat } = useContext(NavigationContext);
  // const [chat, setChat] = useState<Chat>();
  const [messages, setMessages] = useState<Message[] | null>(null);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeChat) {
      // fetch chat info and messages
      fetch(`http://localhost:8080/chats/${activeChat}`).then((res) => {
        res.json().then((res) => {
          // setChat(res);
          setMessages(res?.messages);
        });
      });

      // register eventSource to receive new messages
      const eventSource = new EventSource(
        `http://localhost:8080/messages/stream/${activeChat}`,
      );
      eventSource.onmessage = (event) => {
        const newMessage = JSON.parse(event.data);
        console.log('New message on ChatPage.useEffect: ' + newMessage);
        setMessages((previous) =>
          previous ? [...previous, newMessage] : [newMessage],
        );
      };

      // close the eventSource when unmount component
      return () => {
        eventSource.close();
      };
    }
  }, [activeChat]);

  // Scroll to the end of the chat window whenever messages change
  useEffect(() => {
    chatWindowRef?.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="container d-flex flex-column">
      {activeChat ? (
        <>
          <ChatPageTitleBar />
          <div className="hide-scrollbar h-100" ref={chatWindowRef}>
            {messages?.map((msg) => {
              return (
                <div
                  className={`d-flex mt-4 align-items-end ${
                    msg.user.id === 1 ? 'flex-row-reverse' : ''
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
                      msg.user.id === 1 ? 'align-items-end me-3' : 'ms-3'
                    }`}
                  >
                    <div
                      className={`card mt-2 chat-page-body-message ${
                        msg.user.id === 1 ? 'chat-page-body-message-out' : ''
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

            {!messages && (
              <div className="h-100">
                <ChatPageBodyNoMessages />
              </div>
            )}
          </div>
        </>
      ) : (
        <ChatPageBodyNotSelected />
      )}
    </div>
  );
};

export default ChatPage;
