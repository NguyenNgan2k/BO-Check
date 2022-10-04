import { createSelector } from "reselect";

const indexList = (state) => state.priceBoard.indexList;
const worldList = (state) => state.priceBoard.worldList;
const getAllStock = (state) => state.priceBoard.allStock;
const getPart = (state) => {
    if (!state.priceBoard.partId) return null;
    return state.priceBoard.partId;
};

/***************************************** MAKE GET *************************************** */


export const makeGetIndexList = () =>
    createSelector([indexList], (list) => list);

export const makeGetAllStock = () =>
    createSelector([getAllStock], (allStock) => allStock);


export const makeGetPart = () =>
    createSelector([getPart], (part) => part);