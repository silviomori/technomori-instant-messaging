import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from 'AppContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MessageInsert } from 'types/Message';

import './styles.css';

const ChatPageWriteMessage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { activeChat } = useContext(AppContext);
  const { register, handleSubmit, reset } = useForm<MessageInsert>();
  const onSubmit = async (msg: MessageInsert) => {
    msg = { ...msg, text: msg.text?.trim() };
    if (!msg.text) {
      reset({ text: '' });
      return;
    }
    msg.chatId = activeChat;
    msg.userId = 1;
    const msg_str = JSON.stringify(msg);
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch('http://localhost:8080/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: msg_str,
      });
      if (!response.ok) throw new Error(response.statusText);
      reset({ text: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      id="msgForm"
      onSubmit={handleSubmit(onSubmit)}
      className="chat-page-write-message-form rounded-pill p-2 mt-2 mb-3"
      data-emoji-form=""
    >
      <div className="row align-items-center gx-0">
        <div className="col-auto">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </button>
        </div>

        <div className="col">
          <div className="input-group">
            <textarea
              {...register('text')}
              name="text"
              className="form-control px-0"
              placeholder="Type your message..."
              data-autosize="true"
              style={{
                overflow: 'hidden',
                overflowWrap: 'break-word',
                resize: 'none',
                height: '47px',
              }}
            />

            <button className="text-body pe-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-smile"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="col-auto">
          <button className="btn btn-primary rounded-circle p-2 ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatPageWriteMessage;
