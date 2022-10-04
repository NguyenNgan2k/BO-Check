import {
    CATEGORY_SET,
    SETTING_SET,
    SYMBOL_ACTIVE_SET,
    SYMBOL_SCROLL
} from "./constants"

const initialSate = {
    category: null,
    categoryRequesting: false,
    categorySuccessful: false,
    categoryErrors: [],

    symbolActive: null,
    symbolScroll: null,

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

        case SYMBOL_ACTIVE_SET:
            return {
                ...state,
                symbolActive: action.data,
            };
        case SYMBOL_SCROLL:
            return {
                ...state,
                symbolScroll: action.symbol,
            };

        default:
            return state;

    }
};
export default reducer;