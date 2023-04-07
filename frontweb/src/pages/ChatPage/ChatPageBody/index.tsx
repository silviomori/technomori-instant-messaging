import './styles.css';

import { Message } from 'types/Message';
import ChatPageBodyNoMessages from './ChatPageBodyNoMessages';

type Props = {
  messages?: Message[];
};

const ChatPageBody = ({ messages }: Props) => {
  return (
    <div className="h-100">
      {messages ? (
        messages.map((msg) => {
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
        })
      ) : (
        <div className="h-100">
          <ChatPageBodyNoMessages />
        </div>
      )}
    </div>
  );
};

export default ChatPageBody;
