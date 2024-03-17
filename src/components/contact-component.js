import React, { memo } from 'react';

import createAsyncResource from '~/scripts/wrap-promise';

const fetchPosts = createAsyncResource(() =>
    fetch('https://dummyjson.com/products').then((res) => res.json())
);

const ContactComponent = () => {
    //* INITIAL_FETCH
    const posts = fetchPosts.read();
    console.log('posts', posts);
    return (
        <>
            <div>ContactComponent</div>
            <h1>hello there abhay rana</h1>
        </>
    );
};

export default memo(ContactComponent);
