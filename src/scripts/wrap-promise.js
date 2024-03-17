function createAsyncResource(fetchFunction) {
    if (typeof fetchFunction !== 'function') {
        throw new Error('fetchFunction must be a function');
    }

    let status = 'pending';
    let result;
    let error;

    const suspender = fetchFunction().then(
        (data) => {
            status = 'success';
            result = data;
        },
        (error_) => {
            status = 'error';
            error = error_;
        }
    );

    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw error; // Throw the error for React Suspense to catch
            }
            return result; // Return the data if available
        },
    };
}

export default createAsyncResource;
