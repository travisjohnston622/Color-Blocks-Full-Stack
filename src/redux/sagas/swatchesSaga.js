import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSwatches() {
    console.log('In GET swatches');
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/blocks'
        })
        yield put({
            type: 'SET_SWATCHES',
            payload: response.data
        });
    } catch (err) {
        console.log('Error fetching color blocks', err)
    }
}

function* getSwatchesSaga() {
    yield takeLatest('GET_SWATCHES', getSwatches);
}

export default getSwatchesSaga;