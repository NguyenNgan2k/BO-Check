import {
    CATEGORY_SET,
    SETTING_SET
} from "./constants"

const initialSate = {
    category: null,
    categoryRequesting: false,
    categorySuccessful: false,
    categoryErrors: [],

    setting: { indHid: [] },
}

const reducer = function clientReducer(state = initialSate, action) {
    switch (action.type) {
        case CATEGORY_SET:
            return {
                ...state,
                category: action.category,
            };

        case SETTING_SET:
            return {
                ...state,
                setting: action.setting,
            };

        default:
            return state;

    }
};
export default reducer;