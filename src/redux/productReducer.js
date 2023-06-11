
const initialState = {
        category: '',
        subCategory: ''
}
const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SELECT-CATEGORY':
            return {
                category: action.payload.category,
                subCategory: action.payload.subCategory,
            };
        default:
            return state;
    }
};

export default ProductReducer;