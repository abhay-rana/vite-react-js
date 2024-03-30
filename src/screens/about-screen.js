import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoader } from '~/hook/useLoader';

import { FetchCounter, prom1 } from '~/actions/counter-actions';

import { IncreaseOne, IncreaseTwo } from '~/reducers/counter-reducer';

const AboutScreen = () => {
    const store = useSelector((state) => state.counter_store.counter);
    const [loader, startLoader, endLoader] = useLoader();
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
            <div className="bg-danger">AboutScreen</div>
            <ProductWrapper />
        </>
    );
};

const ProductWrapper = () => {
    const products = [1, 2, 3, 4];
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    async function addToWishlist(id) {
        return dispatch(FetchCounter());
    }
    return (
        <>
            <div className="flex flex-row gap-2 border border-red-500">
                {products.map((item, index) => (
                    <ProductCard
                        {...{ item, state, setState, addToWishlist }}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};

const ProductCard = ({ item, addToWishlist }) => {
    async function handleWishlist(id) {
        const a = await addToWishlist(id);
        console.log(a);
    }
    return (
        <>
            <div
                className="h-[50px] w-[100px] cursor-pointer border border-black"
                onClick={() => handleWishlist(item)}
                onKeyDown={() => handleWishlist(item)}
                role="presentation"
            >
                {item}
            </div>
        </>
    );
};

export default memo(AboutScreen);
