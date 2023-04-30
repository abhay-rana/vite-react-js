import PropTypes from 'prop-types';

export const Button = ({
    primary,
    secondary,
    danger,
    upperCase,
    micro,
    small,
    large,
    text,
    link,
    border,
    warning,
    disabled,
    block,
    children = 'default children',
    rounded,
    success,
    className,
}) => {
    let extra_class =
        'round-none flex items-center justify-center relative focus:outline-none rounded-lg';
    if (!!upperCase) {
        extra_class += ' uppercase';
    }
    if (micro) {
        extra_class += ' h-5 px-6 text-xs';
    } else if (small) {
        extra_class += '  h-7  px-6 text-base';
    } else if (large) {
        extra_class += ' h-10  px-7';
    } else {
        extra_class += ' h-8 px-6 text-base';
    }
    if (text) {
        extra_class += ' text-gray-dark';
    } else {
        if (primary) {
            if (link) {
                extra_class += ' bg-transparent text-primary';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-primary border border-primary';
            } else {
                extra_class += ' bg-primary text-white';
            }
        } else if (secondary) {
            if (link) {
                extra_class += ' bg-transparent text-secondary';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-secondary border border-secondary';
            } else {
                extra_class += ' bg-secondary text-white';
            }
        } else if (warning) {
            if (link) {
                extra_class += ' bg-transparent text-warning';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-warning border border-warning';
            } else {
                extra_class += ' bg-warning text-white';
            }
        } else if (danger) {
            if (link) {
                extra_class += ' bg-transparent text-danger';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-danger border border-danger';
            } else {
                extra_class += ' bg-danger text-white';
            }
        } else if (success) {
            if (link) {
                extra_class += ' bg-transparent text-success';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-success border border-success';
            } else {
                extra_class += ' bg-success text-white';
            }
        } else {
            if (link) {
                extra_class += ' bg-transparent text-primary';
            } else if (border) {
                extra_class +=
                    ' bg-transparent text-gray-medium border border-gray-dark';
            } else {
                extra_class += ' bg-gray-lightest text-gray-medium';
            }
        }
    }
    if (block) {
        extra_class += ' w-full';
    } else {
        extra_class += ' block';
    }
    if (disabled) {
        extra_class += ' opacity-50 cursor-not-allowed';
    }
    if (rounded) {
        extra_class += ' rounded-full';
    }
    if (className) {
        extra_class += ` ${className}`;
    }

    return (
        <>
            <div className={extra_class}>{children}</div>
        </>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    secondary: PropTypes.bool,
    children: PropTypes.node,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    success: PropTypes.bool,
    link: PropTypes.bool,
    upperCase: PropTypes.bool,
    micro: PropTypes.bool,
    className: PropTypes.string,
    warning: PropTypes.bool,
    border: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.string,
};
