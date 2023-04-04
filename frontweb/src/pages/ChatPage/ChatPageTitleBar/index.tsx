import './styles.css';

const ChatPageTitleBar = () => {
  return (
    <div className="sticky-top class chat-page-title-bar-container d-flex align-items-center justify-content-between">
      <img
        className="avatar-img-48 mx-2"
        src={require('assets/img/avatars/bootstrap-logo.png')}
        alt="Bootstrap Community"
      />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h6>Bootstrap Community</h6>
        <span>35 members, 3 online</span>
      </div>
      <div className="avatar-group d-flex me-3">
        <img
          src={require('assets/img/avatars/7.jpg')}
          alt="#"
          className="avatar-img-34"
        />

        <img
          src={require('assets/img/avatars/11.jpg')}
          alt="#"
          className="avatar-img-34"
        />

        <img
          src={require('assets/img/avatars/9.jpg')}
          alt="#"
          className="avatar-img-34"
        />

        <div className="avatar avatar-xs">
          <span
            className="d-flex flex-nowrap avatar-img-34 bg-primary align-items-center justify-content-center"
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
  );
};

export default ChatPageTitleBar;
