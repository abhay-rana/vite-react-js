import { useState } from 'react';

//! for showing the loaders in the button or in the screens
const useLoader = (initial_state) => {
    const [loader, setLoader] = useState(initial_state);

    const startLoader = () => setLoader(true);
    const endLoader = () => setLoader(false);

    return [loader, startLoader, endLoader];
};

export default useLoader;
