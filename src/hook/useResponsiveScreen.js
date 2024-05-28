import { useEffect, useState } from 'react';

// Define breakpoints for mobile, tablet, and desktop
const breakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
};

const getDeviceType = (width) => {
    if (width <= breakpoints.mobile) return 'mobile';
    if (width <= breakpoints.tablet) return 'tablet';
    return 'desktop';
};

const getOrientation = () => {
    if (
        typeof window !== 'undefined' &&
        window.screen &&
        window.screen.orientation
    ) {
        return window.screen.orientation.type.includes('portrait')
            ? 'portrait'
            : 'landscape';
    }
    return 'unknown';
};

// Debounce function to limit the rate of function execution
const debounce = (function_, delay) => {
    let timeoutId;
    return (...arguments_) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            function_(...arguments_);
        }, delay);
    };
};

const useResponsiveScreen = (debounceDelay = 200) => {
    const [screenInfo, setScreenInfo] = useState({
        deviceType: getDeviceType(window.innerWidth),
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: getOrientation(),
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setScreenInfo({
                deviceType: getDeviceType(window.innerWidth),
                width: window.innerWidth,
                height: window.innerHeight,
                orientation: getOrientation(),
            });
        }, debounceDelay);

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [debounceDelay]);

    return screenInfo;
};

export default useResponsiveScreen;
