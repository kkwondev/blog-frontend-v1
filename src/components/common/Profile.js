import React from 'react';
import { Link } from 'react-router-dom';
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';
import me from './me.jpg';

const Wrapper = styled(Responsive)`

`;
const ProfileWrapper = styled.div`
    border-bottom:1px solid ${palette.gray[3]};
    padding:30px 0;
    box-sizing:border-box;
`;
const ProfileHead = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  line-height:1.05;
  padding-left: 20px;
  letter-spacing: -2px;
  color: #333;
  display: inline-block;
  box-sizing: border-box;
  border-style: solid;
  border-image: linear-gradient(180deg, ${palette.kkw[0]}, ${palette.kkw[1]}) 1
    100%;
  border-image-slice: 1;
  border-image-width: 0 0 0 8px;
  font-family: 'Catamaran', sans-serif;
  margin-bottom:20px;
  font-kerning: normal;
`;
const Author = styled.div`
  width: 100%;
  display: flex;
  .AuthorImg {
    width: 72px;
    height: 72px;
    background: url(${me}) no-repeat;
    background-size: cover;
    border-radius: 72px;
    margin-right: 20px;
  }
  .AuthorIntro span {
    background-color: ${palette.gray[3]};
    padding: 8px 3px;
    box-sizing: border-box;
    font-size: 0.8rem;
  }
  .AuthorIntro p {
    font-size: 0.8rem;
    color: ${palette.gray[6]};
    letter-spacing: -1px;
  }
  .AuthorIntro a {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${palette.kkw[1]};
    display:inline-block;
  }
  .AuthorIntro span:first-child {
    margin-right: 10px;
  }
  .AuthorIntro .about {
    background-color: ${palette.gray[1]};
    font-weight: 700;
    font-size: 1rem;
    padding: 8px;
    border-radius: 10px;
    color: ${palette.kkw[0]};
    animation: flutter 2s linear infinite;
    display: inline-block;
  }
  @keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const marginTop = {
  marginTop : '5rem'
}

const Profile = ({post}) => {
  return (
    <Wrapper style={!post ? marginTop : null}>
      <ProfileWrapper>
        {!post ? <ProfileHead>Kkwon's blog</ProfileHead> : null}
        <Author>
          <div className="AuthorImg"></div>
          <div className="AuthorIntro">
            <span>Written by</span>
            <Link to="/about">
              <span className="about">@Kkwon</span>
            </Link>
            <p>끈기있는, 노력하는</p>
            <a href="http://www.github.com/kkwoncokr" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </Author>
      </ProfileWrapper>
    </Wrapper>
  );
};
export default Profile;
