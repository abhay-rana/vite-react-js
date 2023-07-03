import PropTypes from 'prop-types';
import React, { memo } from 'react';

import ErrorBoundary from '~/components/container/error-boundary';
import Footer from '~/components/container/footer';
import Header from '~/components/container/header';
import Sidebar from '~/components/container/sidebar';

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
