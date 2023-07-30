import user from '../assets/user.json';
import stats from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { styled } from 'styled-components';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <Wrapper>
      <Profile {...user} />
      <Statistics stats={stats} title="Document type stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000000b2;
  padding: 0;
  margin: 0;
  color: white;
`;

// const Button = styled.button`
//   background-color: #3498db;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: ${({ theme }) => {
//     return theme.radius.default;
//   }};
//   cursor: pointer;
//   box-shadow: ${({ theme }) => theme.shadows.default};
// `;
