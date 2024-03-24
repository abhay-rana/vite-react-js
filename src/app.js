import { memo } from 'react';

import Routes from '~/routes/routes';

import Layout from '~/components/layout/layout';

const App = () => {
    //! container actions fetches for third party and the subscriptions and event listeners
    return (
        <>
            <Layout>
                <Routes />
            </Layout>
        </>
    );
};

export default memo(App);

// const App = () => {
//     const [location, setLocation] = useLocation();
//     const store = useAppSelector((state) => ({
//         is_login: state.auth_store.is_login,
//     }));

//     useEffect(() => {
//         if (!store.is_login) {
//             setLocation('/login');
//         } else if (store.is_login && AUTH_ROUTES.includes(location)) {
//             setLocation('/home');
//         } else {
//             setLocation('/home');
//         }
//     }, [store.is_login]);

//     return (
//         <>
//             <Container is_login={store.is_login}>
//                 <Router>
//                     <Switch>
//                         {/* Two Stacks Based on the user authentications */}
//                         {!store.is_login ? <AuthRoutes /> : <MainRoutes />}
//                         {/* Common Routes */}
//                         <Route path="/login" component={'LoginScreen'} />
//                         {/* if none of the route is matched */}
//                         <Route component={ErrorScreen} />
//                     </Switch>
//                 </Router>
//             </Container>
//         </>
//     );
// };

// export default App;
