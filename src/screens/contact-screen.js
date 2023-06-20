import React, { memo } from 'react';

import ContactComponent from '~/components/contact-component';

const ContactScreen = () => {
    return (
        <>
            <div>ContactScreen</div>
            <React.Suspense fallback={<h1>Spinner....</h1>}>
                <ContactComponent />
            </React.Suspense>
        </>
    );
};

export default memo(ContactScreen);
