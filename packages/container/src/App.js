import React from "react";
import MarketingApp from "./сomponents/MarketingApp";
import Header from "./сomponents/Header";
import { BrowserRouter } from "react-router-dom";
export default () => {
    return (
    <BrowserRouter>
        <div>
            <Header/>
            <MarketingApp />
        </div>
    </BrowserRouter>
    )
}