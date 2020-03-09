import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => (
  <div class="profile">
    <div class="description">
      <img src={user.avatar} alt={user.alt} class="avatar" />
      <p class="name"> {user.name} </p> <p class="tag">@{user.tag} </p>
      <p class="location"> {user.location} </p>
    </div>
    <ul class="stats">
      <li>
        <span class="label"> Followers </span>
        <span class="quantity"> {user.stats.followers} </span>
      </li>
      <li>
        <span class="label"> Views </span>
        <span class="quantity"> {user.stats.views} </span>
      </li>
      <li>
        <span class="label"> Likes </span>
        <span class="quantity"> {user.stats.likes} </span>
      </li>
    </ul>
  </div>
);

UserCard.defaultProps = { alt: 'user avatar' };
UserCard.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    alt: PropTypes.string,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};

export default UserCard;
