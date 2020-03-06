import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* deleteSwatch(action) {
    console.log('In DELETE swatch', action.payload);
    try {
        yield axios({
            method: 'DELETE',
            url: '/api/blocks/' + action.payload,
            data: action.payload
        })

    } catch (err) {
        console.log('Error fetching color blocks', err)
    }
}

function* deleteSwatchSaga() {
    yield takeLatest('DELETE_SWATCH', deleteSwatch);
}

export default deleteSwatchSaga;