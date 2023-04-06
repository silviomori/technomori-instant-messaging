import React from 'react';

import './styles.css';
import { UserProfile } from 'types/UserProfile';

type Props = {
  userProfile: UserProfile;
};

const FriendCard = ({ userProfile }: Props) => {
  return (
    <div className="card mb-3 border-0 rounded-3">
      <div className="d-flex g-0 p-3">
        <img
          src={userProfile.profileImgUrl}
          className="avatar-img-48 me-2"
          alt="..."
        />

        <div className="card-body p-0">
          <div className="card-title m-0 d-flex align-items-center justify-content-between">
            <h5 className="friend-card-title">{userProfile.name}</h5>
          </div>
          <div className="card-text d-flex align-items-center justify-content-between">
            <span className="friend-card-text">{'last seen 3 days ago'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
