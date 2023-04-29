import React, { memo } from 'react';

import Routes from '~/routes';

import Container from '~/screens/container/container';

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
