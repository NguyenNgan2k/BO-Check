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
    ALL_STOCK_REQUESTING,
    GET_STOCK_BY_ID_REQUESTING,
} from './containers';
import {
    indexRequestSuccess,
    indexRequestError,

    worldIndexRequestSuccess,
    worldIndexRequestError,

    allStockRequestSuccess,
    allStockRequestError,

    getStockByIdRequestSuccess,
    getStockByIdRequestError
} from './actions';
import {
    _processMapDataIndex,
    _processMapDataCS
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

function allStockRequestApi() {
    const url = `${priceUrl}/getlistallstock`;
    const request = fetch(url);

    return handleRequest(request)
}

function* allStockRequestFlow() {
    try {
        const dataList = yield call(allStockRequestApi);
        yield put(allStockRequestSuccess(dataList));
    } catch (error) {
        yield put(allStockRequestError(error));
    }
}

function stockByIdRequestApi(data) {
    const url = `${priceUrl}/getliststockById/${data}`;
    const request = fetch(url);

    return handleRequest(request);
}

function* getStockByIdRequestFlow(action) {
    try {
        const { data } = action;
        const dataList = yield call(stockByIdRequestApi, data);

        let csData = [];
        dataList.forEach((item) => {
            let symbol = _processMapDataCS(item);
            csData.push(symbol);
        });
        yield put(getStockByIdRequestSuccess(csData));
    } catch (error) {
        put(getStockByIdRequestError(error));
    }

}

function* priceboardWatcher() {
    yield all([
        takeLatest(INDEX_REQUESTING, indexRequestFlow),
        //takeLatest(WORLD_INDEX_REQUESTING, worldIndexRequestFlow),
        takeLatest(ALL_STOCK_REQUESTING, allStockRequestFlow),
        takeLatest(GET_STOCK_BY_ID_REQUESTING, getStockByIdRequestFlow),
    ]);
}

export default priceboardWatcher;