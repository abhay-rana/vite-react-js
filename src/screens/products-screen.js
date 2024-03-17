import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { memo } from 'react';
import { useLocation } from 'wouter';

const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
};

const ProductsScreen = () => {
    const [_, setLocation] = useLocation();
    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 10000,
    });
    console.log({ data, error, isLoading });

    function handleNavigation(id) {
        setLocation(`/product/${id}`);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <div>ProductsScreen</div>
            <div className="flex flex-row flex-wrap gap-3">
                {data.products.map((item) => (
                    <>
                        <div
                            className="flex h-[150px] w-[150px] flex-col gap-1 border-2"
                            onClick={() => handleNavigation(item.id)}
                        >
                            <img
                                src={item.thumbnail}
                                className="h-[100px] w-[100px]"
                                alt="products"
                            />
                            {item.title}
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default memo(ProductsScreen);
