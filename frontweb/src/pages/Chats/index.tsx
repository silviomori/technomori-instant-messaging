import ChatSummaryCard from 'components/ChatSummaryCard';
import SearchBar from 'components/SearchBar';

const Chats = () => {
  return (
    <div>
      <h2 className="fw-bold m-0">Chats</h2>
      <SearchBar />
      <ChatSummaryCard />
    </div>
  );
};

export default Chats;
