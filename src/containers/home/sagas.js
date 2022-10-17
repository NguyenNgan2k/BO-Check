import { call, put, takeLatest, all } from 'redux-saga/effects';
import { handleApiErrors } from 'lib/api-errors';

import { TOP_INTEREST_REQUESTING } from './containers';
import { topInterestError, topInterestSuccess } from './actions';

const infoUrl = `${process.env.REACT_APP_INFO_URL}`;

function handleRequest(request) {
    return request
        .then(handleApiErrors)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            throw error;
        });
}

function topInterestRequestApi() {
    const url = `${infoUrl}/topStockInterested?count=5`;
    const request = fetch(url);

    return handleRequest(request);
}


function* topInterestRequestFlow() {
    try {
        console.log('check')
        const dataList = yield call(topInterestRequestApi);

        yield put(topInterestSuccess(dataList.data));
    } catch (error) {
        // console.log(error)
        yield put(topInterestError(error));
    }
}


function* dashboardWatcher() {
    yield all([
        takeLatest(TOP_INTEREST_REQUESTING, topInterestRequestFlow),
    ]);
}

export default dashboardWatcher;
