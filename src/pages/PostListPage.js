import React from 'react';
import Profile from '../components/common/Profile';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Profile/>
            <PostListContainer/>
            <PaginationContainer/>
        </>
    );
}

export default PostListPage;