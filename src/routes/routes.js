import React from 'react';
import { Route, Switch } from 'wouter';

const HomeScreen = React.lazy(() => import('~/screens/home-screen'));
const AboutScreen = React.lazy(() => import('~/screens/about-screen'));
const ErrorScreen = React.lazy(() => import('~/screens/container/404'));
const ContactScreen = React.lazy(() => import('~/screens/contact-screen'));

const Routes = () => {
    return (
        <Switch>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Route path="/" component={HomeScreen} />
                <Route path="/components" component={HomeScreen} />
                <Route path="/about" component={AboutScreen} />
                <Route path="/contact" component={ContactScreen} />

                {/* if none of the route is matched */}
                <Route component={ErrorScreen} />
            </React.Suspense>
        </Switch>
    );
};

export default Routes;
