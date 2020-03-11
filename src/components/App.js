import React, { Fragment } from 'react';
import 'normalize.css';
import user from '../data/users.json';
import statistic from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import UserCard from './userCard/UserCard';
import StataCard from './Statistic/Stata';
import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionsTable from './Transactions/Transactions';

const App = () => (
  <Fragment>
    <UserCard user={user} />
    <StataCard title="Upload stats" statistic={statistic} />
    <FriendList>
      <FriendListItem friends={friends} />
    </FriendList>
    <TransactionsTable transactions={transactions} />
  </Fragment>
);

export default App;
