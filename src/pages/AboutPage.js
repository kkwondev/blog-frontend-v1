import React from 'react';
import { Helmet } from 'react-helmet-async';
import Intro from '../components/about/Intro';
import Footer from '../components/common/Footer';

const AboutPage = () => {
    return(
        <>
        <Helmet>
            <title>강경원 소개 - KKWON</title>
        </Helmet>
       <Intro/>
       <Footer/>
       </>
    );
}

export default AboutPage;