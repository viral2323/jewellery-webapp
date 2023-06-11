export const selectCategory = (payload) => {
    return {
        type: 'SELECT-CATEGORY',
        payload: payload
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT',
    };
};