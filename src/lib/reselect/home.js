import { createSelector } from "reselect";


const getTopInterest = (state) => state.home.topInterest;

/***************************************** MAKE GET *************************************** */


export const makeGetTopInterest = () =>
    createSelector([getTopInterest], (topInterest) => topInterest);