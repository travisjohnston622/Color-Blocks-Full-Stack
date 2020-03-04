import { all } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
//imported sagas
import getSwatchesSaga from './swatchesSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
function* rootSaga() {
    yield takeEvery('ADD_BLOCK', getSwatchesSaga)
    yield all([
        getSwatchesSaga(),
    ]);
}

export default rootSaga;