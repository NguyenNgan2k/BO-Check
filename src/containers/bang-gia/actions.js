import {
    INDEX_REQUESTING,
    INDEX_REQUEST_SUCCESS,
    INDEX_REQUEST_ERROR,
    WORLD_INDEX_REQUESTING,
    WORLD_INDEX_REQUEST_SUCCESS,
    WORLD_INDEX_REQUEST_ERROR,
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