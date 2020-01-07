import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const ListWrapper = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ListWrapper;