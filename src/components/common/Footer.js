import React from 'react';
import Responsive from './Responsive';
import styled from 'styled-components';

const Wrapper = styled(Responsive)`
    text-align:center;
    font-size:0.9rem;
    letter-spacing:-2px;
    color:#333;
    padding:10px 0 !important;
    box-sizing:border-box;
    a {
        color:#000;
        margin-left:5px;
        font-family: Catamaran;
    }
`;

const Footer = () => {
    return(
        <Wrapper>
            COPYLIGHT © 
                <a href="https://github.com/kkwoncokr/" target="_blank" rel="noreferrer">
                    @Kkwon
                </a>
        </Wrapper>
    );
}

export default Footer;