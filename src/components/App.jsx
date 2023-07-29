import user from '../assets/user.json';
import stats from '../assets/data.json';
import friends from '../assets/friends.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Document type stats" />
      <FriendList friends={friends} />
    </div>
  );
};

// function getCount(str) {
//   const pattern = /[aeiou]/gi;
//   return str.match(pattern).length ? str.match(pattern).length : '0';
// }

// console.log(getCount('q3gadhr65hx'));
// console.log(getCount(''));
