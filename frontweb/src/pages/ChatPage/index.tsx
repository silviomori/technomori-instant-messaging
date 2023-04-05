import ChatPageBody from './ChatPageBody';
import ChatPageTitleBar from './ChatPageTitleBar';

const ChatPage = () => {
  return (
    <div className="container d-flex flex-column">
      <ChatPageTitleBar />
      <div className="hide-scrollbar">
        <ChatPageBody />
      </div>
    </div>
  );
};

export default ChatPage;
