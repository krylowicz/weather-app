import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const Wrapper = styled.div`
  width: calc(100vw - 110px);
  position: absolute;
  top: 25px;
  left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  
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
        <DarkModeSwitch />
    </Wrapper>
);

export default Navigation;