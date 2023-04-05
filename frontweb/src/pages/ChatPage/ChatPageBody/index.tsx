import './styles.css';

const chatData = [
  {
    msg_id: 1,
    user: {
      me: false,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg',
    },
    msgs: [
      {
        id: 1.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
      { id: 1.2, text: 'Send me the files please.' },
    ],
  },
  {
    msg_id: 2,
    user: {
      me: true,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/1.jpg',
    },
    msgs: [
      {
        id: 2.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
      { id: 2.2, text: 'filename.json' },
    ],
  },
  {
    msg_id: 3,
    user: {
      me: false,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/6.jpg',
    },
    msgs: [
      {
        id: 3.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
    ],
  },
  {
    msg_id: 4,
    user: {
      me: false,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg',
    },
    msgs: [
      {
        id: 4.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
    ],
  },
  {
    msg_id: 5,
    user: {
      me: true,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/1.jpg',
    },
    msgs: [
      {
        id: 5.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
    ],
  },
  {
    msg_id: 6,
    user: {
      me: false,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/7.jpg',
    },
    msgs: [
      {
        id: 6.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
      { id: 6.2, text: 'Send me the files please.' },
    ],
  },
  {
    msg_id: 7,
    user: {
      me: true,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/1.jpg',
    },
    msgs: [
      {
        id: 7.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
    ],
  },
  {
    msg_id: 8,
    user: {
      me: false,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/11.jpg',
    },
    msgs: [
      {
        id: 8.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
      { id: 8.2, text: 'Send me the files please.' },
    ],
  },
  {
    msg_id: 9,
    user: {
      me: true,
      user_avatar_src:
        'https://offsetcode.com/themes/messenger/2.2.0/assets/img/avatars/1.jpg',
    },
    msgs: [
      {
        id: 9.1,
        text: 'Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?',
      },
    ],
  },
];

const ChatPageBody = () => {
  return (
    <div>
      {chatData.map((chat) => {
        return (
          <div
            className={`d-flex mt-4 align-items-end ${
              chat.user.me ? 'flex-row-reverse' : ''
            }`}
            key={chat.msg_id}
          >
            <img
              src={chat.user.user_avatar_src}
              alt="#"
              className="avatar-img-48"
            />
            <div
              className={`d-flex flex-column ${
                chat.user.me ? 'align-items-end me-3' : 'ms-3'
              }`}
            >
              {chat.msgs.map((msg) => {
                return (
                  <div
                    className={`card mt-2 chat-page-body-message ${
                      chat.user.me ? 'chat-page-body-message-out' : ''
                    }`}
                    style={{ width: 'fit-content' }}
                    key={msg.id}
                  >
                    <span>{msg.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatPageBody;
