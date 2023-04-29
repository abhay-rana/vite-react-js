import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Button = ({ label = 'hello', action }) => {
    return (
        <>
            <button
                className="m-1 rounded-full bg-red-900 p-2 text-white"
                onClick={action}
            >
                {label}
            </button>
        </>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    action: PropTypes.func,
};

export default memo(Button);
