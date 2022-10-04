import { func } from 'prop-types';
import actions from 'redux-form/lib/actions';
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

    CLEAR_PART_REQUEST,

} from './containers';

const initialSate = {
    indexList: [],
    worldList: [],
    requesting: false,
    successful: false,
    errors: [],

    allStock: [],
    allStockRequesting: false,
    allStockSuccessful: false,
    allStockErrors: [],

    part: [],
    partRequesting: false,
    partSuccessful: false,
}


const reducer = function widgetReducer(state = initialSate, action) {
    switch (action.type) {
        case INDEX_REQUESTING:
            return {
                ...state, // ensure that we don't erase fetched ones
                requesting: true,
                successful: false,
                errors: [],
            };

        case INDEX_REQUEST_SUCCESS:
            // log(action);
            return {
                ...state,
                indexList: action.indexList, // replace with fresh list
                requesting: false,
                successful: true,
                errors: [],
            };

        case INDEX_REQUEST_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                errors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case WORLD_INDEX_REQUESTING:
            return {
                ...state, // ensure that we don't erase fetched ones
                requesting: true,
                successful: false,
                errors: [],
            };

        case WORLD_INDEX_REQUEST_SUCCESS:
            return {
                ...state,
                worldList: action.worldList, // replace with fresh list
                requesting: false,
                successful: true,
                errors: [],
            };

        case WORLD_INDEX_REQUEST_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                errors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case ALL_STOCK_REQUESTING:
            return {
                ...state,
                allStockRequesting: false,
                allStockSuccessful: false,
                allStockErrors: [],
            };

        case ALL_STOCK_REQUEST_SUCCESS:
            return {
                ...state,
                allStock: action.allStock,
                allStockRequesting: false,
                allStockSuccessful: true,
                allStockErrors: [],
            };

        case ALL_STOCK_REQUEST_ERROR:
            return {
                ...state,
                allStockRequesting: false,
                allStockSuccessful: false,
                allStockErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case GET_STOCK_BY_ID_REQUESTING:
            return {
                ...state,
                partIdRequesting: true,
                partIdSuccessful: false,
                partIdErrors: [],
            };

        case GET_STOCK_BY_ID_REQUEST_SUCCESS:
            return {
                ...state,
                partId: action.dataList,
                partIdRequesting: false,
                partIdSuccessful: true,
                partIdErrors: [],
                listEtf: [],
                lole: [],
                ptList: [],
                psSnapshot: [],
                tradeHisPs: null,
                ndataSnapshot: null,
                cwList: null,
                snapshotCW: [],
                // snapshot: [],
            };

        case GET_STOCK_BY_ID_REQUEST_ERROR:
            return {
                ...state,
                partId: [],
                partIdRequesting: false,
                partIdSuccessful: false,
                partIdErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case CLEAR_PART_REQUEST:
            return {
                ...state,
                part: [],
                partRequesting: false,
                partSuccessful: false,
            };

        default:
            return state;
    }
};
export default reducer;