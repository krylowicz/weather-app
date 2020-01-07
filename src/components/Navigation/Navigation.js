import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  
  li {
      font-size: 1.5rem;
      
      &:not(:last-child) {
        margin-right: 20px;
      }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Link = styled(NavLink)`
  &.active {
    color: grey;
  }
`;

const Navigation = () => (
    <Wrapper>
        <Links>
            <li><Link exact to="/">five day forecast</Link></li>
            <li><Link exact to="/one-day">one day forecast</Link></li>
        </Links>
    </Wrapper>
);

export default Navigation;