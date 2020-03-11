import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FriendList.styled';

const FriendList = ({ children }) => <Wrapper> {children} </Wrapper>;

FriendList.propTypes = {
  children: PropTypes.object.isRequired,
};

export default FriendList;
