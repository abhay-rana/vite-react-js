import React, { memo } from 'react';

import Routes from '~/routes/routes';

import Container from '~/components/container/container';

const App = () => {
    return (
        <>
            <Container>
                <Routes />
            </Container>
        </>
    );
};

export default memo(App);
