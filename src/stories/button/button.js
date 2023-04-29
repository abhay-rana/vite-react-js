import PropTypes from 'prop-types';

export const Button = ({ label = '' }) => {
    return (
        <>
            <div>{label}</div>
        </>
    );
};

Button.propTypes = {
    label: PropTypes.string.func,
};
