import {
    STOCK_DETAIL_REQUESTING,
    STOCK_DETAIL_REQUEST_SUCCESS,
    STOCK_DETAIL_REQUEST_ERROR,

    STOCK_MANAGEMENT_REQUESTING,
    STOCK_MANAGEMENT_REQUEST_SUCCESS,
    STOCK_MANAGEMENT_REQUEST_ERROR,

    COMPANY_INFO_REQUESTING,
    COMPANY_INFO_REQUEST_ERROR,
    COMPANY_INFO_REQUEST_SUCCESS,

    ASSOCIATE_REQUESTING,
    ASSOCIATE_REQUEST_SUCCESS,
    ASSOCIATE_REQUEST_ERROR,

    CDKT_REQUESTING,
    CDKT_REQUEST_SUCCESS,
    CDKT_REQUEST_ERROR,

    KQKD_REQUESTING,
    KQKD_REQUEST_SUCCESS,
    KQKD_REQUEST_ERROR,

    STOCK_NEWS_REQUESTING,
    STOCK_NEWS_REQUEST_SUCCESS,
    STOCK_NEWS_REQUEST_ERROR,

    STOCK_EVENTS_REQUESTING,
    STOCK_EVENTS_REQUEST_SUCCESS,
    STOCK_EVENTS_REQUEST_ERROR,

} from './constants';


export const stockDetailRequest = function stockDetailRequest(data) {
    return {
        type: STOCK_DETAIL_REQUESTING,
        data,
    };
};

export const stockDetailRequestSuccess = function stockDetailRequestSuccess(
    resData
) {
    return {
        type: STOCK_DETAIL_REQUEST_SUCCESS,
        resData,
    };
};

export const stockDetailRequestError = function stockDetailRequestError(error) {
    return {
        type: STOCK_DETAIL_REQUEST_ERROR,
        error,
    };
};

export const topMatchRequest = function topMatchRequest(data) {
    return {
        type: "TOP_MATCH_REQUESTING",
        data,
    };
};

export const topMatchRequestSuccess = function topMatchRequestSuccess(
    resData
) {
    return {
        type: "TOP_MATCH_REQUEST_SUCCESS",
        resData,
    };
};

export const topMatchRequestError = function topMatchRequestError(error) {
    return {
        type: "TOP_MATCH_REQUEST_ERROR",
        error,
    };
};

export const stockManagementRequest = function stockManagementRequest(data) {
    return {
        type: STOCK_MANAGEMENT_REQUESTING,
        data,
    };
};

export const stockManagementRequestSuccess = function stockManagementRequestSuccess(
    resData
) {
    return {
        type: STOCK_MANAGEMENT_REQUEST_SUCCESS,
        resData,
    };
};

export const stockManagementRequestError = function stockManagementRequestError(
    error
) {
    return {
        type: STOCK_MANAGEMENT_REQUEST_ERROR,
        error,
    };
};

export const companyInfoRequest = function companyInfoRequest(data) {
    return {
        type: COMPANY_INFO_REQUESTING,
        data,
    };
};

export const companyInfoRequestSuccess = function companyInfoRequestSuccess(
    resData
) {
    return {
        type: COMPANY_INFO_REQUEST_SUCCESS,
        resData,
    };
};

export const companyInfoRequestError = function companyInfoRequestError(error) {
    return {
        type: COMPANY_INFO_REQUEST_ERROR,
        error,
    };
};

export const associateRequest = function associateRequest(data) {
    return {
        type: ASSOCIATE_REQUESTING,
        data,
    };
};

export const associateRequestSuccess = function associateRequestSuccess(
    resData
) {
    return {
        type: ASSOCIATE_REQUEST_SUCCESS,
        resData,
    };
};

export const associateRequestError = function associateRequestError(error) {
    return {
        type: ASSOCIATE_REQUEST_ERROR,
        error,
    };
};

export const cdktRequest = function cdktRequest(data) {
    return {
        type: CDKT_REQUESTING,
        data,
    };
};

export const cdktRequestSuccess = function cdktRequestSuccess(resData) {
    return {
        type: CDKT_REQUEST_SUCCESS,
        resData,
    };
};

export const cdktRequestError = function cdktRequestError(error) {
    return {
        type: CDKT_REQUEST_ERROR,
        error,
    };
};

export const kqkdRequest = function kqkdRequest(data) {
    return {
        type: KQKD_REQUESTING,
        data,
    };
};

export const kqkdRequestSuccess = function kqkdRequestSuccess(resData) {
    return {
        type: KQKD_REQUEST_SUCCESS,
        resData,
    };
};

export const kqkdRequestError = function kqkdRequestError(error) {
    return {
        type: KQKD_REQUEST_ERROR,
        error,
    };
};

export const stockNewsRequest = function stockNewsRequest(data) {
    return {
        type: STOCK_NEWS_REQUESTING,
        data,
    };
};

export const stockNewsRequestSuccess = function stockNewsRequestSuccess(
    resData
) {
    return {
        type: STOCK_NEWS_REQUEST_SUCCESS,
        resData,
    };
};

export const stockNewsRequestError = function stockNewsRequestError(error) {
    return {
        type: STOCK_NEWS_REQUEST_ERROR,
        error,
    };
};

export const stockEventsRequest = function stockEventsRequest(data) {
    return {
        type: STOCK_EVENTS_REQUESTING,
        data,
    };
};

export const stockEventsRequestSuccess = function stockEventsRequestSuccess(
    resData
) {
    return {
        type: STOCK_EVENTS_REQUEST_SUCCESS,
        resData,
    };
};

export const stockEventsRequestError = function stockEventsRequestError(error) {
    return {
        type: STOCK_EVENTS_REQUEST_ERROR,
        error,
    };
};
