import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = ({history}) => {
    const { user } = useSelector(({user}) => ({user:user.user}));
    useEffect(()=> {
        if(!user) {
            alert('로그인이 필요합니다.')
            history.push('/login')
            return;
        }
    })
    return(
        <Responsive>
            <Helmet>
                <title>
                    글 작성 - KKWON
                </title>
            </Helmet>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButtonsContainer/>
            <Footer/>
        </Responsive>
    );
}

export default WritePage;