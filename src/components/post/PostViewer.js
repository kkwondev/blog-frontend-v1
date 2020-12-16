import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  padding-top: 4rem;
`;

const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 2rem;
    font-weight:800;
    letter-spacing: -2px;
    margin: 0;
    padding-left:15px;
    padding-right:0;
    padding-bottom:0;
    line-height:1.05;
    border-style: solid;
    border-image: linear-gradient(180deg, ${palette.kkw[0]}, ${palette.kkw[1]})
      1 100%;
    border-image-slice: 1;
    border-image-width: 0 0 0 8px;
    box-sizing:border-box;
    font-family: 'Catamaran', sans-serif;
    margin-bottom: 10px;
    font-kerning:normal;
    @media (max-width: 780px) {
    font-size: 1.2rem;
  }
  }
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  color: ${palette.gray[8]};
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트 입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류발생!</PostViewerBlock>;
  }
  if (loading || !post) {
    return null;
  }
  const { thisPost } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{thisPost.title}</h1>
        <SubInfo
          username={
            !thisPost.user.nickname ? '닉네임 없음' : thisPost.user.nickname
          }
          publishedDate={thisPost.publishedDate}
          hasMarginTop
        />
        <Tags tags={thisPost.tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: thisPost.body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
