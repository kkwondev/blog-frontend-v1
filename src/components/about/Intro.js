import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const Wrapper = styled(Responsive)`
  width: 585px;
  padding-top: 3rem !important;
  letter-spacing: -1px;
  @media all and (max-width:585px) {
      width:100%;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 30px;
    padding-bottom: calc(0.40625rem - 1px);
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 20px;
    color: #333;
    font-family: Catamaran;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
    line-height: 1.2;
    border-bottom: 1px solid hsla(0,0%,0%,0.07);
  }
  p {
      font-size:1rem;
  }
  p.end {
    text-align:center;
    font-style:italic;
    margin:30px 0 0 0;
    font-size:0.8rem;
  }
  code {
    color: ${palette.kkw[1]};
    border: 1.4px solid ${palette.kkw[1]};
    padding: 0.11em 0.3em;
    margin: 0 0.4em;
    border-radius: 0.3em;
    white-space: normal;
    background: #fffbfe;
  }
  ol {
    line-height: 1.8;
  }
  li {
    margin-bottom:10px;
  }
  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 3rem;
    font-size: 1rem;
    line-height: 1.625rem;
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  }
  td,
  th {
    text-align: left;
    padding-left: 1.08333rem;
    padding-right: 1.08333rem;
    padding-top: 0.8125rem;
    padding-bottom: calc(0.8125rem - 1px);
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    box-sizing:border-box;
  }
  td:first-child {
    text-align: right !important;
    font-weight: bolder !important;
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  a {
    color: ${palette.kkw[0]};
    font-weight: 600;
    font-size:0.85rem;
  }
`;
const ProfileHead = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.05;
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
  margin-bottom: 20px;
  font-kerning: normal;
`;

const Intro = () => {
  return (
    <Wrapper>
      <ProfileHead>강경원 (kkwon)</ProfileHead>
      <p>
        <strong>
          저는<code>______</code> 프론트엔드 개발자입니다.
        </strong>
      </p>
      <ol>
        <li>성장하기 위해 노력하는</li>
        <li>배우는 것을 좋아하는</li>
        <li>팀원과 커뮤니케이션을 좋아하는</li>
        <li>효율적인 것을 좋아하는</li>
      </ol>
      <table>
        <thead>
          <tr>
            <th align="center"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <strong>Github</strong>
            </td>
            <td align="center">
              <a href="https://github.com/kkwoncokr">
                https://github.com/kkwoncokr
              </a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>Blog</strong>
            </td>
            <td align="center">
              <a href="http://kkwon.co.kr">http://kkwon.co.kr</a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>Contact</strong>
            </td>
            <td align="center">
              <a href="mailto:kkwoncokr@gmail.com">kkwoncokr@gmail.com</a>
            </td>
          </tr>
        </tbody>
      </table>
      <ProfileHead>Experiences</ProfileHead>
      <h2>Puples</h2>
      <table>
        <thead>
          <tr>
            <th align="center"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <strong>period</strong>
            </td>
            <td align="center">
              20.09 ~ <strong>current</strong>
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>position</strong>
            </td>
            <td align="center">
              <strong>Web Publisher</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Publish</h2>
      <ul>
        <li>미스 그랜드 코리아 <br/><a href="http://missgrandkorea.kr/index_update.php">(http://missgrandkorea.kr)</a></li>
        <li>선덕여왕 선발대회 <br/><a href="http://queenseonduk.kr/">(http://queenseonduk.kr/)</a></li>
        <li>미시즈 로얄 코리아 <br/><a href="http://mrsroyalkorea.kr/">(http://mrsroyalkorea.kr/)</a></li>
        <li>미스 글로벌 코리아 <br/><a href="http://www.missglobalkorea.kr/">(http://www.missglobalkorea.kr/)</a></li>
      </ul>
      <ProfileHead>ETC</ProfileHead>
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th align="center"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <strong>period</strong>
            </td>
            <td align="center">
              20.04 ~ 20.08
            </td>
          </tr>
          <tr>
            <td align="center">
              <strong>process</strong>
            </td>
            <td align="center">
              <strong>더조은컴퓨터학원 웹디자인 양성 과정</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Publish</h2>
      <ul>
        <li>한성백제박물관 <br/><a href="hhttp://kkwon.co.kr/project/han/index.html">(http://kkwon.co.kr/project/han/index.html)</a></li>
        <li>화평동 왕냉면 <br/><a href="http://kkwon.co.kr/project/hwa/index.html">(http://kkwon.co.kr/project/hwa/index.html)</a></li>
        <li>스터디 코드 <br/><a href="http://kkwon.co.kr/project/study/index.html">(http://kkwon.co.kr/project/study/index.html)</a></li>
      </ul>
      <p className="end">감사합니다.</p>
    </Wrapper>
  );
};

export default Intro;
