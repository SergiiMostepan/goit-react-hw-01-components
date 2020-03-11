import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Avatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsElement,
  Label,
  Quantity,
} from './UserCard.styled';

const UserCard = ({ user }) => (
  <Wrapper>
    <Description>
      <Avatar src={user.avatar} alt={user.name} />
      <Name>{user.name}</Name>
      <Tag>{'@' + user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>

    <Stats>
      <StatsElement>
        <Label>Followers</Label>
        <Quantity>{user.stats.followers}</Quantity>
      </StatsElement>
      <StatsElement>
        <Label>Views</Label>
        <Quantity>{user.stats.views}</Quantity>
      </StatsElement>
      <StatsElement>
        <Label>Likes</Label>
        <Quantity>{user.stats.likes}</Quantity>
      </StatsElement>
    </Stats>
  </Wrapper>
);

UserCard.defaultProps = {
  alt: 'user avatar',
};
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
