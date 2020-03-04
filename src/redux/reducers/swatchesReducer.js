const getSwatchesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SWATCHES':
            return action.payload;
        default:
            return state;
    }
}
export default getSwatchesReducer;