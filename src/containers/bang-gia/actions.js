import {
    INDEX_REQUESTING,
    INDEX_REQUEST_SUCCESS,
    INDEX_REQUEST_ERROR,

    WORLD_INDEX_REQUESTING,
    WORLD_INDEX_REQUEST_SUCCESS,
    WORLD_INDEX_REQUEST_ERROR,

    ALL_STOCK_REQUESTING,
    ALL_STOCK_REQUEST_SUCCESS,
    ALL_STOCK_REQUEST_ERROR,

    GET_STOCK_BY_ID_REQUESTING,
    GET_STOCK_BY_ID_REQUEST_SUCCESS,
    GET_STOCK_BY_ID_REQUEST_ERROR,

    TOP_CHANGE_BY_ID_REQUESTING,
    TOP_CHANGE_BY_ID_REQUEST_ERROR,
    TOP_CHANGE_BY_ID_REQUEST_SUCCESS,

    CLEAR_PART_REQUEST,

} from './containers'
export const indexRequest = function indexRequest(data) {
    return {
        type: INDEX_REQUESTING,
        data,
    }
}

export const indexRequestSuccess = function indexRequestSuccess(indexList) {
    return {
        type: INDEX_REQUEST_SUCCESS,
        indexList,
    };
};

export const indexRequestError = function indexRequestError(error) {
    return {
        type: INDEX_REQUEST_ERROR,
        error,
    };
};

export const worldIndexRequest = function worldIndexRequest() {
    return {
        type: WORLD_INDEX_REQUESTING,
    };
};

export const worldIndexRequestSuccess = function worldIndexRequestSuccess(
    worldList
) {
    return {
        type: WORLD_INDEX_REQUEST_SUCCESS,
        worldList,
    };
};

export const worldIndexRequestError = function worldIndexRequestError(error) {
    return {
        type: WORLD_INDEX_REQUEST_ERROR,
        error,
    };
};

export const allStockRequest = function allStockRequest() {
    return {
        type: ALL_STOCK_REQUESTING,
    };
};

export const allStockRequestSuccess = function allStockRequestSuccess(allStock) {
    return {
        type: ALL_STOCK_REQUEST_SUCCESS,
        allStock,
    };
};

export const allStockRequestError = function allStockRequestError(error) {
    return {
        type: ALL_STOCK_REQUEST_ERROR,
        error,
    };
};

export const getStockByIdRequest = function getStockByIdRequest(data) {
    return {
        type: GET_STOCK_BY_ID_REQUESTING,
        data,
    };
};

export const getStockByIdRequestSuccess = function getStockByIdRequestSuccess(dataList) {
    return {
        type: GET_STOCK_BY_ID_REQUEST_SUCCESS,
        dataList,
    };
};

export const getStockByIdRequestError = function getStockByIdRequestError(error) {
    return {
        type: GET_STOCK_BY_ID_REQUEST_ERROR,
        error,
    };
};

export const clearPartRequest = function clearPartRequest(data) {
    return {
        type: CLEAR_PART_REQUEST,
    };
};

export const topChangeByIdRequest = function topChangeByIdRequest(data) {
    return {
        type: TOP_CHANGE_BY_ID_REQUESTING,
        data,
    };
};

export const topChangeByIdSuccess = function topChangeByIdSuccess(resData) {
    return {
        type: TOP_CHANGE_BY_ID_REQUEST_SUCCESS,
        resData,
    };
};

export const topChangeByIdError = function topChangeByIdError(error) {
    return {
        type: TOP_CHANGE_BY_ID_REQUEST_ERROR,
        error,
    };
};
