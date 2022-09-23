import {
    START_CHANNEL,
    STOP_CHANNEL,
    SOCKET_READY,
    REGISTER_SOCKET_DATA,
    LEAVE_SOCKET_DATA,
    RECEIVE_1101,
    REG_PRIVATE_SOCKET_DATA,
    REG_PRIVATE_SOCKET,
    SERVER_ON,
    SERVER_OFF,
    SET_REG_SYMBOL,
    UNSET_REG_SYMBOL,
    RECEIVE_3211,
    RECEIVE_3220,
    RECEIVE_3210,
} from './constants';

export function startSocketChanel() {
    return {
        type: START_CHANNEL,
    };
}

export function socketReady() {
    return {
        type: SOCKET_READY,
    };
}

export function serverOn() {
    return {
        type: SERVER_ON,
    };
}

export function serverOff() {
    return {
        type: SERVER_OFF,
    };
}

export function stopSocketChanel() {
    return {
        type: STOP_CHANNEL,
    };
}

export function setRegSymbol(symbol) {
    return {
        type: SET_REG_SYMBOL,
        symbol,
    };
}

export function unsetRegSymbol() {
    return {
        type: UNSET_REG_SYMBOL,
    };
}

export function regisSocketData(params) {
    return {
        type: REGISTER_SOCKET_DATA,
        params,
    };
}

export function leaveSocketData(params) {
    return {
        type: LEAVE_SOCKET_DATA,
        params,
    };
}

export function regPrivateData(params) {
    // log(REG_PRIVATE_SOCKET_DATA, params);
    return {
        type: REG_PRIVATE_SOCKET_DATA,
        params,
    };
}

export function regPrivateSocket(params) {
    // log(REG_PRIVATE_SOCKET, params);
    return {
        type: REG_PRIVATE_SOCKET,
        params,
    };
}

export function receiveReregister(resData) {
    return {
        type: 'RE_REGISTER',
        resData
    };
}

export function receive1101(resData) {
    return {
        type: RECEIVE_1101,
        resData,
    };
}

export function receive3211(resData) {
    return {
        type: RECEIVE_3211,
        resData,
    };
}

export function receive3220(resData) {
    return {
        type: RECEIVE_3220,
        resData,
    };
}

export function receive3210(resData) {
    return {
        type: RECEIVE_3210,
        resData,
    };
}
