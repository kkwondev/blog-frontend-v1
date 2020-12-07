import React from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

&:disabled {
  background:${palette.gray[3]};
  color:${palette.gray[5]};
  cursor:not-allowed;
}

background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${props => 
    props.fullWidth &&
    css`
    padding:0.75rem 0;
    width:100%;
    font-size:1.125rem;
    `
  }
  ${props =>
  props.cyan &&
  css`
    background:${palette.cyan[5]};
    &:hover {
      background: ${palette.cyan[4]};
    }}
  `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;


const Button = props => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1:0}/>
  ) : (
    <StyledButton {...props}/>
  )
}



export default Button;