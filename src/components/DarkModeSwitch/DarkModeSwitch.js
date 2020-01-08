import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from "../../hooks/DarkModeContext";

const Button = styled.button`
   border:none;
   width: 15px;
   height: 15px;
   font-size: 6rem;
   cursor: pointer;
   
   background-color: transparent;
   
   @media (max-width: 500px) {
    display: none;
   }
   
   &:focus {
      outline: none;
    }
`;

export default  () => {
    const {darkMode,  toggleDarkMode } = useContext(DarkModeContext);

    return (
        <Button onClick={toggleDarkMode}>
            {darkMode ? "🌝" : "🌚"}
        </Button>
    )
};