import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendElement,
  Status,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

const FriendListItem = ({ friends }) =>
  friends.map(friend => (
    <FriendElement key={friend.id}>
      <Status isOnline={friend.isOnline} />
      <Avatar src={friend.avatar} alt="" width="48" />
      <FriendName> {friend.name} </FriendName>
    </FriendElement>
  ));

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
