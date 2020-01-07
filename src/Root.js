import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import ContextWrapper from "./components/ContextWrapper/ContextWrapper";
import Layout from "./components/Layout/Layout";
import CurrentCity from "./components/CurrentCity/CurrentCity";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import FiveDayView from "./views/FiveDayView/FiveDayView";
import OneDayView from "./views/OneDayView/OneDayView";
import Navigation from "./components/Navigation/Navigation";

const Root = () => (
    <ContextWrapper>
        <GlobalStyle />
        <DarkModeSwitch />
        <Layout>
            <BrowserRouter>
            <Navigation />
                <>
                    <Route exact path="/" component={FiveDayView} />
                    <Route exact path="/one-day" component={OneDayView} />
                </>
            <CurrentCity />
            </BrowserRouter>
        </Layout>
    </ContextWrapper>
);

export default Root;