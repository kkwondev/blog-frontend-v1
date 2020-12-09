import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock =styled.div`
    padding: 0 1rem;
    width:780px;
    margin:0 auto;

    @media (max-width:780px) {
        width:100%;
    }
`;
const Responsive = ({children, ...rest}) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
}
export default Responsive;