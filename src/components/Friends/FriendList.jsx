import propTypes from 'prop-types';
import React from 'react';
// import css from './Friends.module.scss';
import { Item, FriendListUl, Status } from './FriendsStyle.jsx';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <FriendListUl>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <Item key={id}>
              <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
                {isOnline}
              </Status>
              <img src={avatar} alt="User avatar" width="48" />
              <p>{name}</p>
            </Item>
          );
        })}
      </FriendListUl>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.array,
};
