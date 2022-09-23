import {
    call,
    put,
    takeLatest,
    all,
    takeEvery,
    join,
} from 'redux-saga/effects';
import { handleApiErrors } from '../../lib/api-errors';
import {
    INDEX_REQUESTING,
    WORLD_INDEX_REQUESTING,
} from './containers';
import {
    indexRequestSuccess,
    indexRequestError,

    worldIndexRequestSuccess,
    worldIndexRequestError
} from './actions';
import {
    _processMapDataIndex
} from '../../utils';

const priceUrl = `${process.env.REACT_APP_PRICE_URL}`;

function handleRequest(request) {
    return request
        .then(handleApiErrors)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            throw error;
        });
}

function indexRequestApi(data) {
    const url = `${priceUrl}/getlistindexdetail/${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function* indexRequestFlow({ data }) {
    try {
        const indexs = yield call(indexRequestApi, data);
        let indexList = [];
        indexs &&
            !!indexs.length &&
            indexs.forEach((element) => {
                indexList.push(_processMapDataIndex(element));
            });
        yield put(indexRequestSuccess(indexList));
    } catch (error) {
        yield put(indexRequestError(error));
    }
}


function* priceboardWatcher() {
    yield all([
        takeLatest(INDEX_REQUESTING, indexRequestFlow),
        //takeLatest(WORLD_INDEX_REQUESTING, worldIndexRequestFlow),
    ]);
}

export default priceboardWatcher;