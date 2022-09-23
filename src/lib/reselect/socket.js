import { createSelector } from 'reselect';

const getReceive1101 = (state) => state.socket.receive1101;
const getReceive3211 = (state) => state.socket.receive3211;
const getReceive3220 = (state) => state.socket.receive3220;
const getReceive3210 = (state) => state.socket.receive3210;
const getEventOrder = (state) => state.socket.event;
const getSocketStatus = (state) => state.socket.serverStatus;

/*************************************** MAKE GET ***************************************/
export const makeGetEventOrder = () =>
    createSelector([getEventOrder], (event) => event);

export const makeGetSocketStatus = () =>
    createSelector([getSocketStatus], (serverStatus) => serverStatus);

export const makeGetReceive1101 = () =>
    createSelector([getReceive1101], (receive1101) => receive1101);

export const makeGetReceive3211 = () =>
    createSelector([getReceive3211], (receive3211) => receive3211);

export const makeGetReceive3220 = () =>
    createSelector([getReceive3220], (receive3220) => receive3220);

export const makeGetReceive3210 = () =>
    createSelector([getReceive3210], (receive3210) => receive3210);
