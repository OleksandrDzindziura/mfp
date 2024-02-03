import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import Header from "./сomponents/Header";
import MarketingApp from "./сomponents/MarketingApp";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
