import PropTypes from 'prop-types';
import { forwardRef, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '~/stories/spinner';

export const Button = (
    {
        primary,
        secondary,
        danger,
        upperCase,
        micro,
        small,
        large,
        text,
        loader,
        link,
        style,
        tooltip,
        onClick,
        border,
        warning,
        disabled,
        block,
        children = 'default children',
        rounded,
        success,
        className,
    },
    ref
) => {
    const isDisabled = loader ? true : disabled ? true : false;
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
            <button
                onClick={onClick || null}
                disabled={isDisabled}
                className={twMerge(extra_class)}
                // ref={ref}
                title={tooltip}
                style={{ position: loader ? 'relative' : '', ...(style || {}) }}
            >
                <div className="flex flex-row items-center justify-center text-center">
                    {children}
                    {!loader ? null : micro ? (
                        <Spinner
                            className="absolute"
                            style={{
                                width: '12px',
                                height: '12px',
                                top: '4px',
                                right: '5px',
                            }}
                        />
                    ) : !loader ? null : small ? (
                        <Spinner
                            className="absolute"
                            style={{
                                width: '15px',
                                height: '15px',
                                top: '6px',
                                right: '5px',
                            }}
                        />
                    ) : large ? (
                        <Spinner
                            className="absolute"
                            style={{
                                width: '18px',
                                height: '18px',
                                top: '11px',
                                right: '5px',
                            }}
                        />
                    ) : (
                        <Spinner
                            className="absolute"
                            style={{
                                width: '16px',
                                height: '16px',
                                top: '8px',
                                right: '5px',
                            }}
                        />
                    )}
                </div>
            </button>
        </>
    );
};

export default memo(forwardRef(Button));

Button.propTypes = {
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    secondary: PropTypes.bool,
    children: PropTypes.node.isRequired,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    success: PropTypes.bool,
    link: PropTypes.bool,
    upperCase: PropTypes.bool,
    micro: PropTypes.bool,
    className: PropTypes.string,
    tooltip: PropTypes.string,
    warning: PropTypes.bool,
    border: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
    loader: PropTypes.bool,
    style: PropTypes.object,
};
