import { ChatDescription } from 'types/Chat';
import './styles.css';

type Props = {
  chatDescription: ChatDescription;
};

const ChatSummaryCard = ({ chatDescription }: Props) => {
  return (
    <div className="card chat-summary-card mb-3 border-0 rounded-3">
      <div className="d-flex g-0 p-3">
        <img
          src={chatDescription.owner.profileImgUrl}
          className="avatar-img-48 me-2"
          alt="..."
        />

        <div className="card-body p-0">
          <div className="card-title d-flex align-items-center justify-content-between">
            <h5 className="chat-summary-card-title">
              {chatDescription.owner.name}
            </h5>
            <span className="text-nowrap" style={{ fontSize: 'x-small' }}>
              12:45 PM
            </span>
          </div>
          <div className="card-text d-flex align-items-center justify-content-between">
            <span className="chat-summary-card-text">
              {
                "Hello! Yeah, I'm going to meet my friend of mine at the departments stores now."
              }
            </span>
            <span
              className="badge rounded-pill bg-primary"
              style={{ fontSize: 'xx-small' }}
            >
              3
            </span>
          </div>
        </div>
      </div>

      <div className="card-footer py-1 px-3 d-flex flex-nowrap align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            className="avatar-img-34 mx-2"
            src={require('assets/img/avatars/bootstrap-logo.png')}
            alt="Bootstrap Community"
          />
          <h6 className="mb-0">{chatDescription.name}</h6>
        </div>

        <div className="avatar-group d-flex me-3 justify-content-end">
          {chatDescription.users.slice(0, 3).map((user) => (
            <img
              src={user.profileImgUrl}
              alt="#"
              className="avatar-img-24"
              key={user.id}
            />
          ))}

          {chatDescription.users.length > 4 ? (
            <span
              className="d-flex flex-nowrap avatar-img-24 bg-primary align-items-center justify-content-center"
              style={{
                fontSize: 'xx-small',
                color: 'white',
              }}
            >
              +{chatDescription.users.length - 3}
            </span>
          ) : chatDescription.users.length === 4 ? (
            <img
              src={chatDescription.users.at(3)?.profileImgUrl}
              alt="#"
              className="avatar-img-24"
              key={chatDescription.users.at(3)?.id}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatSummaryCard;
