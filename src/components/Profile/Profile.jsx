import propTypes from 'prop-types';
// import css from './Profile.module.scss';
import {
  ProfileDiv,
  Description,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Label,
} from './ProfileStyle.jsx';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDiv>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};
