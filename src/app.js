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
