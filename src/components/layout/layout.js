import PropTypes from 'prop-types';
import { memo } from 'react';

import ErrorBoundary from '~/components/layout/error-boundary';

const Layout = ({ children }) => {
    return (
        <ErrorBoundary>
            {/* <Header /> */}
            {/* <Sidebar /> */}
            {children}
            {/* <Footer /> */}
        </ErrorBoundary>
    );
};

export default memo(Layout);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
