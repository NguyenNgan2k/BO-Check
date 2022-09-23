import { func } from 'prop-types';
import actions from 'redux-form/lib/actions';
import {
    INDEX_REQUESTING,
    INDEX_REQUEST_SUCCESS,
    INDEX_REQUEST_ERROR,
    WORLD_INDEX_REQUESTING,
    WORLD_INDEX_REQUEST_SUCCESS,
    WORLD_INDEX_REQUEST_ERROR,
} from './containers';

const initialSate = {
    indexList: [],
    worldList: [],
    requesting: false,
    successful: false,
    errors: [],
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

        default:
            return state;
    }
};
export default reducer;