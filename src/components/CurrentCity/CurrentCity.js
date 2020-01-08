import React from 'react';
import styled from "styled-components";
import Constants from "../../utils/Constants";

const City = styled.p`
  text-transform: uppercase;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: grey;
  
  @media (max-width: 500px) {
    position: static;
    
  }
`;

const CurrentCity = () => (
    <City>{Constants.CITY}</City>
);

export default CurrentCity;