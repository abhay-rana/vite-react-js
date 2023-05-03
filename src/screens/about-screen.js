import React, { memo } from 'react';

import CompOne from '~/components/comp-one';

const AboutScreen = () => {
    return (
        <>
            <div className="">AboutScreen</div>
            <CompOne />
        </>
    );
};

export default memo(AboutScreen);
