import {
    CATEGORY_SET,
    SETTING_SET
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