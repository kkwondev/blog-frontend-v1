import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import Preparing from './Preparing';

const PostListBlock = styled(Responsive)`
  /* margin-top: 3rem; */
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity:1;
  transition:text-shadow 0.3s, opacity 0.5s;
  &:hover {
      opacity:0.5;
      text-shadow:1px 1px 1px ${palette.gray[6]}
    }
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 1.5rem;
    letter-spacing: -2px;
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    margin-top: 1rem;
  }
`;
const WriteButton = styled(Button) `
  position:fixed;
  width:42.75px;
  height:42.75px;
  line-height:39px;
  font-size:1.5rem;
  text-align:center;
  padding:0;
  bottom:30px;
  right:30px;
  border-radius:50%;
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
       <Link to={`/@${user.nickname}/${_id}`}><h2>{title}</h2></Link>
        <SubInfo
          username={!user.nickname ? '닉네임 없음' : user.nickname}
          publishedDate={new Date(publishedDate)}
        />
        <Tags tags={tags} />
        <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  return (
    <>
      <PostListBlock>
        <Preparing />
        <WritePostButtonWrapper>
          {showWriteButton && (
            <WriteButton cyan to="/write">
              +
            </WriteButton>
          )}
        </WritePostButtonWrapper>
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        )}
      </PostListBlock>
    </>
  );
};

export default PostList;
