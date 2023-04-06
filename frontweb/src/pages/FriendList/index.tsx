import { useEffect, useState } from 'react';

import FriendCard from 'components/FriendCard';
import SearchBar from 'components/SearchBar';
import { UserProfile } from 'types/UserProfile';

const FriendList = () => {
  const [friendList, setFriendList] = useState<UserProfile[]>();
  useEffect(() => {
    fetch('http://localhost:8080/users').then((res) => {
      res.json().then((res) => setFriendList(res));
    });
  }, []);

  return (
    <div className="d-flex flex-column w-100">
      <div className="mb-3">
        <h2 className="fw-bold m-0">Friends</h2>
        <SearchBar />
      </div>

      <div className="hide-scrollbar">
        {friendList &&
          friendList.map((friend) => {
            console.log(friend);
            return (
              <div key={friend.id}>
                <FriendCard userProfile={friend} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FriendList;
