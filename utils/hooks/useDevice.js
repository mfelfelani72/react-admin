import { useState, useEffect, useMemo } from 'react';

const useDevice = () => {
    // states
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // functions
    useEffect(() => {
        // Detect touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const deviceInfo = useMemo(() => {
        const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';

        let type;
        if (screenWidth < 540) {
            type = 'mobile';
        } else if (screenWidth >= 540 && screenWidth < 992) {
            type = 'ipad';
        } else {
            type = 'desktop';
        }

        return {
            type,
            orientation,
            screenWidth,
            screenHeight,
            isTouchDevice,
            isMobile: type === 'mobile',
            isIpad: type === 'ipad',
            isDesktop: type === 'desktop',
        };
    }, [screenWidth, screenHeight, isTouchDevice]);

    return deviceInfo;
};

export default useDevice;