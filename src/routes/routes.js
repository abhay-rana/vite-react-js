import React from 'react';
import { Route, Router, Switch } from 'wouter';

// import ContactScreen from '~/screens/contact-screen';
import DebounceScreen from '~/screens/debounce-screen';
import ProductDetailScreen from '~/screens/product-detail-screen';
import ProductsScreen from '~/screens/products-screen';
import TaskDetailsScreen from '~/screens/test-screens/task-details-screen';
import TaskListScreen from '~/screens/test-screens/task-list-screen';

const HomeScreen = React.lazy(() => import('~/screens/home-screen'));
const AboutScreen = React.lazy(() => import('~/screens/about-screen'));
const ErrorScreen = React.lazy(() => import('~/screens/404'));

const Routes = () => {
    return (
        <Router>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/components" component={HomeScreen} />
                    <Route path="/debounce" component={DebounceScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route
                        path="/product/:id"
                        component={ProductDetailScreen}
                    />
                    {/* <Route path="/contact" component={ContactScreen} /> */}
                    {/*  */}
                    <Route path="/get" component={TaskListScreen} />
                    <Route
                        path="/task-details/:id"
                        component={TaskDetailsScreen}
                    />
                    {/* <Route
                        path="/task-edit/:id"
                        component={TaskEditCreateScreen}
                    /> */}

                    {/* if none of the route is matched */}
                    <Route component={ErrorScreen} />
                </Switch>
            </React.Suspense>
        </Router>
    );
};

export default Routes;
