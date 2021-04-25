import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Block = styled.section`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
    z-index:1000;
`;
const Content = styled.article`
  width: 500px;
  height: 300px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  letter-spacing: -1px;
  @media (max-width: 780px) {
    width: 100%;
  }
  & > h3 {
    width: 100%;
  }
  & > p {
    width: 100%;
  }
  .about {
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

const Preparing = () => {
    return (
      <>
        <Content>
          <div>
            <h2>KLOG(블로그)</h2>
            <span className="about">@Kkwon</span>
            <p>
              현재 블로그는 리뉴얼 중입니다. <br /> 블로그 리뉴얼은 진행상황은
              제{' '}
              <strong>
                {' '}
                <a href="https://github.com/kkwondev" target="_black">
                  github
                </a>
              </strong>
              에서 확인가능합니다.
            </p>
            <p>FRONDEND : react, typescript</p>
            <p>BACKEND : nestjs,typeorm,graphql</p>
          </div>
        </Content>
        <Block />
      </>
    );
}

export default Preparing;