import React, { Fragment } from 'react';
import user from './users.json';
import UserCard from './userCard/UserCard';

const App = () => (
  <Fragment>
    <UserCard user={user} />
  </Fragment>
);

export default App;
