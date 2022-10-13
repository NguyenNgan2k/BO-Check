import { call, put, takeLatest, all } from 'redux-saga/effects';
import { handleApiErrors } from 'lib/api-errors';
import { _processMapDataCS } from 'utils';

import {
    STOCK_DETAIL_REQUESTING,
    STOCK_MANAGEMENT_REQUESTING,
    COMPANY_INFO_REQUESTING,
    ASSOCIATE_REQUESTING,
    CDKT_REQUESTING,
    KQKD_REQUESTING,
    STOCK_NEWS_REQUESTING,
    STOCK_EVENTS_REQUESTING,
} from './constants';

import {
    stockDetailRequestSuccess,
    stockDetailRequestError,

    topMatchRequestSuccess,
    topMatchRequestError,

    stockManagementRequestSuccess,
    stockManagementRequestError,

    companyInfoRequestSuccess,
    companyInfoRequestError,

    associateRequestSuccess,
    associateRequestError,

    cdktRequestSuccess,
    cdktRequestError,

    kqkdRequestSuccess,
    kqkdRequestError,

    stockNewsRequestSuccess,
    stockNewsRequestError,

    stockEventsRequestSuccess,
    stockEventsRequestError,
} from './actions'
import { dataTool } from 'echarts';

const priceUrl = `${process.env.REACT_APP_PRICE_URL}`;
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

function stockDetailRequestApi(data) {
    const url = `${priceUrl}/getliststockdata/${data.toUpperCase()}`;
    const request = fetch(url);

    return handleRequest(request);
}

function topMatchRequestApi(data) {
    const url = `${infoUrl}/listLsStockTrade?sc=${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function stockManageRequestApi(data) {
    const url = `${infoUrl}/stockMangement.pt?symbol=${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function companyInfoRequestApi(data) {
    const url = `${infoUrl}/companyInfo.pt?symbol=${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function associateRequestApi(data) {
    const url = `${infoUrl}/associate.pt?symbol=${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function* stockDetailRequestFlow({ data }) {
    try {

        const dataList = yield call(stockDetailRequestApi, data);

        let symbol;
        if (dataList && !!dataList.length) {
            symbol = _processMapDataCS(dataList[0]);
        }
        yield put(stockDetailRequestSuccess(symbol));
    } catch (error) {
        yield put(stockDetailRequestError(error));
    }
}

function* topMatchRequestFlow(action) {
    try {
        const { data } = action;
        const res = yield call(topMatchRequestApi, data)
        yield put(topMatchRequestSuccess(res.data));
    } catch (error) {
        yield put(topMatchRequestError(error));
    }
}

function* stockManageRequestFlow(action) {
    try {
        const { data } = action;
        const events = yield call(stockManageRequestApi, data);

        yield put(stockManagementRequestSuccess(events));
    } catch (error) {
        yield put(stockManagementRequestError(error));
    }
}

function* companyInfoRequestFlow(action) {
    try {
        const { data } = action;
        const events = yield call(companyInfoRequestApi, data);

        yield put(companyInfoRequestSuccess(events));
    } catch (error) {
        yield put(companyInfoRequestError(error));
    }
}

function* associateRequestFlow(action) {
    try {
        const { data } = action;
        const associate = yield call(associateRequestApi, data);

        yield put(associateRequestSuccess(associate));
    } catch (error) {
        yield put(associateRequestError(error));
    }
}

function reportRequestApi(data) {
    const url = `${infoUrl}/stockReport.pt?${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function* cdktRequestFlow(action) {
    try {

        const { data } = action;
        const dataList = yield call(reportRequestApi, data);
        yield put(cdktRequestSuccess(dataList));

    } catch (error) {
        yield put(cdktRequestError(error));
    }
}

function* kqkdRequestFlow(action) {
    try {
        const { data } = action;
        const dataList = yield call(reportRequestApi, data);

        yield put(kqkdRequestSuccess(dataList));
    } catch (error) {
        yield put(kqkdRequestError(error));
    }
}

function reportNewsRequestApi(data) {
    const url = `${infoUrl}/stockNews.pt?symbol=${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function* stockNewsRequestFlow(action) {
    try {
        const { data } = action;
        const news = yield call(reportNewsRequestApi, data);

        yield put(stockNewsRequestSuccess(news));
    } catch (error) {
        yield put(stockNewsRequestError(error));
    }
}

function stockEventsRequestApi(data) {
    const url = `${infoUrl}/stockEvents.pt?${data}`;
    const request = fetch(url);
    return handleRequest(request);
}

function* stockEventsRequestFlow(action) {
    try {
        const { data } = action;
        const events = yield call(stockEventsRequestApi, data);

        yield put(stockEventsRequestSuccess(events));
    } catch (error) {
        yield put(stockEventsRequestError(error));
    }
}

function* stockDetailWatcher() {
    yield all([
        takeLatest(STOCK_DETAIL_REQUESTING, stockDetailRequestFlow),
        takeLatest("TOP_MATCH_REQUESTING", topMatchRequestFlow),
        takeLatest(STOCK_MANAGEMENT_REQUESTING, stockManageRequestFlow),
        takeLatest(COMPANY_INFO_REQUESTING, companyInfoRequestFlow),
        takeLatest(ASSOCIATE_REQUESTING, associateRequestFlow),
        takeLatest(CDKT_REQUESTING, cdktRequestFlow),
        takeLatest(KQKD_REQUESTING, kqkdRequestFlow),
        takeLatest(STOCK_NEWS_REQUESTING, stockNewsRequestFlow),
        takeLatest(STOCK_EVENTS_REQUESTING, stockEventsRequestFlow),
    ]);
}

export default stockDetailWatcher;
