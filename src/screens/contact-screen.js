import React, { memo } from 'react';

import ContactComponent from '~/components/contact-component';
import Dispense from '~/components/dispense';

const ContactScreen = () => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="text-center text-18 font-bold">
                    Dispense Component
                </div>
                <div className="p-4">
                    <Dispense />
                </div>
            </div>
        </>
    );
};

export default memo(ContactScreen);
