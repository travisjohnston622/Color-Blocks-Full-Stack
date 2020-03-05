import { combineReducers } from 'redux';
// imported reducers
import getSwatchesReducer from './swatchesReducer';
import getColorsReducer from './colorsReducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    getSwatchesReducer,
    getColorsReducer,
});

export default rootReducer;