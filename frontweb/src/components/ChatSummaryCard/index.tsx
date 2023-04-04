import './styles.css';

const ChatSummaryCard = () => {
  return (
    <div className="card chat-summary-card mb-3 border-0 rounded-3">
      <div className="d-flex g-0 p-3">
        <img
          src={require('assets/img/avatars/7.jpg')}
          className="avatar-img-48 me-2"
          alt="..."
        />

        <div className="card-body p-0">
          <div className="card-title d-flex align-items-center justify-content-between">
            <h5 className="chat-summary-card-title">William Wright</h5>
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
          <h6 className="mb-0">Bootstrap Community</h6>
        </div>

        <div className="avatar-group d-flex me-3 justify-content-end">
          <img
            src={require('assets/img/avatars/7.jpg')}
            alt="#"
            className="avatar-img-24"
          />

          <img
            src={require('assets/img/avatars/11.jpg')}
            alt="#"
            className="avatar-img-24"
          />

          <img
            src={require('assets/img/avatars/9.jpg')}
            alt="#"
            className="avatar-img-24"
          />

          <div className="avatar avatar-xs">
            <span
              className="d-flex flex-nowrap avatar-img-24 bg-primary align-items-center justify-content-center"
              style={{
                fontSize: 'xx-small',
                color: 'white',
              }}
            >
              +5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSummaryCard;
