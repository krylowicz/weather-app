import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import ContextWrapper from "./components/ContextWrapper/ContextWrapper";
import Layout from "./components/Layout/Layout";
import CurrentCity from "./components/CurrentCity/CurrentCity";
import FiveDayView from "./views/FiveDayView/FiveDayView";
import OneDayView from "./views/OneDayView/OneDayView";
import Navigation from "./components/Navigation/Navigation";

const Root = () => (
    <ContextWrapper>
        <GlobalStyle />
        <Layout>
            <BrowserRouter>
            <Navigation />
                <>
                    <Route exact path="/" component={FiveDayView} />
                    <Route exact path="/one-day" component={OneDayView} />
                </>
            </BrowserRouter>
        </Layout>
            <CurrentCity />
    </ContextWrapper>
);

export default Root;