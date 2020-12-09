import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import favicon from './simbol.png';

const HeaderBlock = styled.div`
    position:fixed;
    width:100%;
    background:#fff;
    box-shadow:0px 2px 4px rgba(0,0,0,0.08);
`;

const Wrapper = styled(Responsive)`
    height:4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
        .logo {
            font-size:1.125rem;
            font-weight:800;
            color:#fff;
        }
        .right {
            display:flex;
            align-items:center;
        }
        img {
            width:25px;
        }
`;
const UserInfo = styled.div`
    font-weight:800;
    margin-right:1rem;
`;
const Spacer = styled.div`
    height:4rem;
`;

const Header = ({user,onLogout}) => {
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo"><img src={favicon} alt="logo"/></Link>
                    {user ? (
                        <div className="right">
                            <UserInfo>{user.nickname}</UserInfo>
                            <Button onClick={onLogout} cyan>로그아웃</Button>
                        </div>
                    ):(
                        <div className="right">
                        <Button to="/login" cyan>로그인</Button>
                    </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
}

export default Header;