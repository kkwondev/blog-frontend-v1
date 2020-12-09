import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostNavigatorBlock = styled(Responsive)`
  margin-top: 5rem;
  ul {
    width: 100%;
    height: 100px;
    border-top: 1px solid ${palette.gray[2]};
    display: flex;
    justify-content: center;
    justify-items: center;
    padding-left: 0;
  }
  li {
    width: 50%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    list-style: none;
  }
  li + li {
    border-left: 0.5px solid ${palette.gray[2]};
  }
`;

const PostNavigator = ({ post }) => {
  
  if(!post) {
      return null;
  }
  const {prevPost,nextPost} = post;
  return (
    <PostNavigatorBlock>
      <ul>
        <li>{post.prevPost.length === 1 && <Link to={`/@${prevPost[0].user.nickname}/${prevPost[0]._id}`}>←{prevPost[0].title}</Link>}</li>
        <li>{post.nextPost.length === 1 && <Link to={`/@${nextPost[0].user.nickname}/${nextPost[0]._id}`}>{nextPost[0].title}→</Link>}</li>
      </ul>
    </PostNavigatorBlock>
  );
};

export default PostNavigator;
