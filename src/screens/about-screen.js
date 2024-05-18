import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCounter } from '~/redux/actions/counter-actions';

const AboutScreen = () => {
    const store = useSelector((state) => state.counter_store.counter);

    const dispatch = useDispatch();

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
