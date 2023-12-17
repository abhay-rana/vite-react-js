import { memo } from 'react';
import { useLocation } from 'wouter';

import Routes from '~/routes/routes';

import Container from '~/components/container/container';

const App = () => {
    const [location, setLocation] = useLocation('');
    console.log('location');
    return (
        <>
            <Container>
                <Routes />
            </Container>
        </>
    );
};

export default memo(App);
