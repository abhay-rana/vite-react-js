import React from 'react';
import { Route, Router, Switch } from 'wouter';

import ErrorScreen from '~/screens/404';
import HomeScreen from '~/screens/home-screen';

const Routes = () => {
    return (
        <Router>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />

                    {/* if none of the route is matched */}
                    <Route component={ErrorScreen} />
                </Switch>
            </React.Suspense>
        </Router>
    );
};

export default Routes;
