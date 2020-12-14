import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostNavigatorBlock = styled(Responsive)`
  margin-top: 5rem;
  .navigator {
    border-top: 1px solid ${palette.gray[2]};
    display: flex;
    justify-content: space-between;
    margin:40px 0 0 0;
    list-style:none;
    /* padding:30px 100px; */
    padding-top:30px;
    padding-left:0;
  }
  li > a {
    background-color:${palette.kkw[1]};
    color:#fff;
    font-weight:600;
    padding: 7px 16px 8px;
    box-sizing:border-box;
    border-radius: 6px;
    font-size: 12px;
    opacity: .8;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  li + li > a {
    border-left: 0.5px solid ${palette.gray[2]};
    background-color:${palette.kkw[0]};
  }
`;

const PostNavigator = ({ post }) => {
  
  if(!post) {
      return null;
  }
  const {prevPost,nextPost} = post;
  return (
    <PostNavigatorBlock>
      <ul className="navigator">
        <li>{post.prevPost.length === 1 && <Link to={`/@${prevPost[0].user.nickname}/${prevPost[0]._id}`}>←{prevPost[0].title}</Link>}</li>
        <li>{post.nextPost.length === 1 && <Link to={`/@${nextPost[0].user.nickname}/${nextPost[0]._id}`}>{nextPost[0].title}→</Link>}</li>
      </ul>
    </PostNavigatorBlock>
  );
};

export default PostNavigator;
