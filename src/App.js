import React, {  useEffect } from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';

function App() {
  useEffect(()=> {
    const agent = navigator.userAgent.toLowerCase()
    if ( (navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) { 
      alert('Internet Explorer는 지원하지 않는 브라우저 입니다.\n다른 브라우저를 이용해주세요!')
      document.location.href = "https://www.google.co.kr/chrome/?brand=CHBD&gclid=Cj0KCQiA2uH-BRCCARIsAEeef3mZxJkisxMbHsGrJIZXM3xRwtxfW4VS6RoGf4sGaiY5Ckun7ynMda4aAqL9EALw_wcB&gclsrc=aw.ds";
    }
  },[])
  return (
    <>
      <Route component={PostListPage} path={['/@:nickname', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:nickname/:postId" />
      <Route component={AboutPage} path="/about"/>
    </>
  );
}

export default App;
