import React, {Suspense, lazy, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import Header from "./сomponents/Header";
import Progress from "./сomponents/Progress";


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const MarketingApp = lazy(() => import('./сomponents/MarketingApp'));
const AuthApp = lazy(() => import('./сomponents/AuthApp'));


export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                      <Suspense fallback={<Progress />}>
                        <Switch>
                         <Route path="/auth">
                           <AuthApp onSignIn={() => setIsSignedIn(true)} />
                         </Route>
                         <Route path="/" component={MarketingApp} />
                        </Switch>
                      </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
