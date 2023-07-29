import propTypes from 'prop-types';
import React from 'react';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <li key={id} className={css.item}>
              <span
                className={css.status}
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              >
                {isOnline}
              </span>
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.array,
};
