import {
    TOP_CHANGE_BY_ID_REQUEST_ERROR,
    TOP_CHANGE_BY_ID_REQUEST_SUCCESS,
    TOP_INTEREST_REQUEST_ERROR,
    TOP_INTEREST_REQUEST_SUCCESS,
} from './containers';

const initialState = {
    topInterest: null,
    topChangeById: null,
};

const reducer = function widgetReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_INTEREST_REQUEST_ERROR:
            return {
                ...state,
                topInterest: null,
            };

        case TOP_INTEREST_REQUEST_SUCCESS:
            return {
                ...state,
                topInterest: action.resData,
            };

        default:
            return state;
    }
};

export default reducer;
