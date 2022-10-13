import { createSelector } from 'reselect';

import * as _ from 'lodash';

const getStockDetail = (state) => state.stockDetail.stockDetail;
const getTopMatch = (state) => state.stockDetail.topMatch;
const getStockManage = (state) => state.stockDetail.stockManage;
const getCompanyInfo = (state) => state.stockDetail.companyInfo;
const getAssociate = (state) => state.stockDetail.associate;
const getStockCDKT = (state) => state.stockDetail.cdkt;
const getStockKQKD = (state) => state.stockDetail.kqkd;
const getStockNews = (state) => state.stockDetail.stockNews;
const getStockEvents = (state) => state.stockDetail.stockEvents;

/************************************** MAKE GET ***************************************/

export const makeGetStockDetail = () =>
    createSelector([getStockDetail], (stockDetail) => stockDetail);

export const makeGetTopMatch = () =>
    createSelector([getTopMatch], (topMatch) => topMatch);

export const makeGetStockManage = () =>
    createSelector([getStockManage], (stockManage) => stockManage);

export const makeGetCompanyInfo = () =>
    createSelector([getCompanyInfo], (companyInfo) => companyInfo);

export const makeGetAssociate = () =>
    createSelector([getAssociate], (associate) => associate);

export const makeGetStockCDKT = () =>
    createSelector([getStockCDKT], (cdkt) => cdkt);

export const makeGetStockKQKD = () =>
    createSelector([getStockKQKD], (kqkd) => kqkd);

export const makeGetStockNews = () =>
    createSelector([getStockNews], (stockNews) => stockNews);

export const makeGetStockEvents = () =>
    createSelector([getStockEvents], (stockEvents) => stockEvents);