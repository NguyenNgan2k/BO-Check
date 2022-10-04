import { createSelector } from "reselect";
import { categoryDefault } from '../storages';
import * as _ from "lodash";

const getCategory = (state) => {
    if (
        !state.client ||
        !state.client.category ||
        !_.isArray(state.client.category) ||
        !state.client.category.length
    )
        return categoryDefault;

    return state.client.category;
};

// tìm kiếm có category nào trùng với categoryId
const getCatalogSelected = (state, props) => {
    const { categoryId } = props;
    const _category = getCategory(state);
    const _filter = _.find(_category, (o) => o && o.path && o.path.endsWith(categoryId));
    return _filter;
};

/************************************** MAKE GET ****************************************/

export const makeGetCategory = () =>
    createSelector([getCategory], (category) => category);

export const makeGetCategorySelected = () =>
    createSelector([getCatalogSelected], (symbol) => symbol)