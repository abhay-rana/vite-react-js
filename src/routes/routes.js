import React from 'react';
import { Route, Switch } from 'wouter';

import AuthScreen from '~/screens/auth-screen';

const HomeScreen = React.lazy(() => import('~/screens/home-screen'));
const AboutScreen = React.lazy(() => import('~/screens/about-screen'));
const ErrorScreen = React.lazy(() => import('~/components/container/404'));
// const DebounceScreen = React.lazy(() => import('~/components/container/404'));
const ContactScreen = React.lazy(() => import('~/screens/contact-screen'));

const Routes = () => {
    return (
        <Switch>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Route path="/" component={HomeScreen} />
                <Route path="/auth-screen" component={AuthScreen} />
                {/* <Route path="/debounce" component={DebounceScreen} /> */}
                <Route path="/about" component={AboutScreen} />
                <Route path="/contact" component={ContactScreen} />
                {/* if none of the route is matched */}
                <Route component={ErrorScreen} />
            </React.Suspense>
        </Switch>
    );
};

export default Routes;
