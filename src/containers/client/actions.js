import {
    CATEGORY_SET,
    SETTING_SET,

    SYMBOL_ACTIVE_SET,
    SYMBOL_ACTIVE_UNSET,

    SYMBOL_SCROLL
} from "./constants"

export function setCategory(category) {
    return {
        type: CATEGORY_SET,
        category
    }
}

export function setSetting(setting) {
    return {
        type: SETTING_SET,
        setting,
    };
}

export const setSymbolActive = function setSymbolActive(data) {
    return {
        type: SYMBOL_ACTIVE_SET,
        data
    }
}

export const setSymbolScroll = function setSymbolScroll(symbol) {
    return {
        type: SYMBOL_SCROLL,
        symbol,
    };
};