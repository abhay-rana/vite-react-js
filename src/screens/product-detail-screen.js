import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { memo } from 'react';
import { useParams } from 'wouter';

const ProductDetailScreen = () => {
    const { id } = useParams();
    console.log(id);
    async function getProductDetail() {
        const { data } = await axios.get(
            `https://dummyjson.com/products/${id}`
        );
        return data;
    }
    const { data, error, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: getProductDetail,
    });

    console.log({ data, isLoading, error });

    return (
        <>
            <div>ProductDetailScreen</div>
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    {key}:{value}
                </div>
            ))}
        </>
    );
};

export default memo(ProductDetailScreen);
