import { all } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
//imported swatches sagas
import getSwatchesSaga from './getSwatchesSaga';
import deleteSwatchSaga from './deleteSwatchSaga'
//imported color sagas
import addColorSaga from './addColorSaga';

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
        deleteSwatchSaga(),
        addColorSaga(),
    ]);
}

export default rootSaga;