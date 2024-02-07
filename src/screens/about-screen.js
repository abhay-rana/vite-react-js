import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FetchCounter, prom1 } from '~/actions/counter-actions';

import { IncreaseOne, IncreaseTwo } from '~/reducers/counter-reducer';

const AboutScreen = () => {
    const store = useSelector((state) => state.counter_store.counter);
    const dispatch = useDispatch();

    function handleClick() {
        console.log('runs');
        dispatch(IncreaseOne());
        dispatch(IncreaseTwo());
        console.log('runs 1');
    }

    async function run() {
        const data = await prom1();
        console.log(data);
    }

    useEffect(() => {
        dispatch(FetchCounter());
    }, []);

    console.log('store', store);
    return (
        <>
            <div className="bg-primary">AboutScreen</div>
            <button onClick={handleClick}>click me </button>
        </>
    );
};

export default memo(AboutScreen);
