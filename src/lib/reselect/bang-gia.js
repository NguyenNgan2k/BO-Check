import { createSelector } from "reselect";

const indexList = (state) => state.priceBoard.indexList;
const worldList = (state) => state.priceBoard.worldList;

/***************************************** MAKE GET *************************************** */


export const makeGetIndexList = () =>
    createSelector([indexList], (list) => list);