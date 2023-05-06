import { Route, Switch } from 'wouter';

import AboutScreen from '~/screens/about-screen';
import ContactScreen from '~/screens/contact-screen';
import ErrorScreen from '~/screens/container/404';
import HomeScreen from '~/screens/home-screen';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={HomeScreen} />
            <Route path="/components" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/contact" component={ContactScreen} />

            {/* if none of the route is matched */}
            <Route component={ErrorScreen} />
        </Switch>
    );
};

export default Routes;
