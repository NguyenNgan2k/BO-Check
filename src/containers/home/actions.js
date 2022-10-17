import {
    TOP_INTEREST_REQUESTING,
    TOP_INTEREST_REQUEST_ERROR,
    TOP_INTEREST_REQUEST_SUCCESS,
} from './containers';

export const topInterestRequest = function topInterestRequest(data) {
    return {
        type: TOP_INTEREST_REQUESTING,
        data,
    };
};

export const topInterestSuccess = function topInterestSuccess(resData) {
    return {
        type: TOP_INTEREST_REQUEST_SUCCESS,
        resData,
    };
};

export const topInterestError = function topInterestError(error) {
    return {
        type: TOP_INTEREST_REQUEST_ERROR,
        error,
    };
};
