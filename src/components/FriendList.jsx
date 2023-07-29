import React from 'react';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <li key={id} className="item">
              <span className="status">{isOnline}</span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
