import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostNavigatorBlock = styled(Responsive)`
  margin-top: 5rem;
  .navigator {
    width:100%;
    border-top: 1px solid ${palette.gray[2]};
    margin:40px 0 0 0;
    list-style:none;
    /* padding:30px 100px; */
    padding-top:30px;
    padding-left:0;
  }
  ul {
    display:flex;
    justify-content: space-between;
    @media (max-width:780px) {
      flex-direction: column-reverse;
    }
  }
  li {
    flex: 1 1 0%;
    width:50%;
    height:64px;
    line-height:64px;
    text-align:center;
    background-color:${palette.kkw[1]};
    border-radius: 6px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    @media (max-width:780px) {
      width:100%;
      flex: initial;
      padding:0 1rem;
      box-sizing:border-box;
    }
  }
  li > a {
    width:100%;
    height:100%;
    display:block;
    color:#fff;
    flex: 1 1 0%;
    font-weight:600;
    font-size: 16px;
  }
  li + li {
    margin-left:3rem;
    background-color:${palette.kkw[0]};
    @media (max-width:780px) {
      width:100%;
      flex: initial;
      margin-left:0;
      margin-bottom:1rem;
    }
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
      {post.prevPost.length === 1 && <li> <Link to={`/@${prevPost[0].user.nickname}/${prevPost[0]._id}`}>←{prevPost[0].title}</Link></li>}
      {post.nextPost.length === 1 &&<li> <Link to={`/@${nextPost[0].user.nickname}/${nextPost[0]._id}`}>{nextPost[0].title}→</Link></li>}
      </ul>
    </PostNavigatorBlock>
  );
};

export default PostNavigator;
