import PropTypes from 'prop-types';
import React, { memo } from 'react';

import ErrorBoundary from '~/screens/container/error-boundary';
import Footer from '~/screens/container/footer';
import Header from '~/screens/container/header';
import Sidebar from '~/screens/container/sidebar';

const Container = ({ children }) => {
    return (
        <ErrorBoundary>
            {/* <Header /> */}
            {/* <Sidebar /> */}
            {children}
            {/* <Footer /> */}
        </ErrorBoundary>
    );
};

export default memo(Container);

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
