import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { options } from '~/stories/card/constant';

const Card = ({
    children = 'Card Component',
    color = 'primary',
    sizes = 'sm',
}) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};

export default memo(Card);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes),
};
