import React, {useContext} from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../hooks/DarkModeContext";

const Wrapper = styled.div`
  width: 150px;
  height: 180px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Day = styled.p`
  text-transform: capitalize;
`;

const Icon = styled.div`
  margin: 20px 0;
  width: 80px;
  height: 80px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const TempDay = styled.p`
  color: ${({darkMode}) => (darkMode ? 'white' : 'black')};

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const TempNight = styled.p`
  color: grey;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListItem = ({ day, weatherIcon, tempDay, tempNight }) => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <Wrapper>
            <Day>{day}</Day>
            <Icon>
                <img src={weatherIcon} alt={'weather'}/>
            </Icon>
            <TempWrapper>
                {tempDay ? <TempDay darkMode={darkMode}>{tempDay}&#176;</TempDay> : null}
                {tempNight ? <TempNight>{tempNight}&#176;</TempNight> : null}
            </TempWrapper>
        </Wrapper>
    )
};

export default ListItem;