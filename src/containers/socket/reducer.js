import {
    SERVER_OFF,
    SERVER_ON,
    SOCKET_READY,
    SET_REG_SYMBOL,
    UNSET_REG_SYMBOL,
    RECEIVE_1101,
    RECEIVE_3211,
    RECEIVE_3220,
    Event,
    RECEIVE_3210,
} from './constants';

const initialState = {
    receive1101: {},
    receive3211: {},
    receive3220: {},
    receive3210: {},
    // channelStatus: 'off',
    serverStatus: 'unknown',
    socketReady: false,
    regPrivate: 'unknown',
    reRegister: false,

    algoSignal: false,
    receiveSignal: null,

    event: null,
    regSym: null,
    regTrade: null,
};

const reducer = function socketReducer(state = initialState, action) {
    switch (action.type) {
        /***************************** LOG_OUT ***************************/
        case 'LOG_OUT':
        case 'CLIENT_UNSET':
        case 'INVALID_SESSION':
            return {
                ...state,
                event: null,
            };

        /***************************** PRIVATE ***************************/

        case Event:
            return { ...state, event: action.resData };

        /***************************** PUBLIC ***************************/
        case SET_REG_SYMBOL:
            return {
                ...state,
                regSym: (state.regSym ? state.regSym + ',' : '') + action.symbol,
            };

        case 'RE_REGISTER':
            return {
                ...state,
                reRegister: action.resData,
            };

        case UNSET_REG_SYMBOL:
            return { ...state, regSym: '' };

        case "REG_TRADE_SYMBOL":
            return { ...state, regTrade: action.data };

        case SERVER_OFF:
            return { ...state, serverStatus: 'off' };

        case SERVER_ON:
            return { ...state, serverStatus: 'on' };

        case 'REGISTER_OK':
            return { ...state, regPrivate: 'ok', serverStatus: 'on' };

        case 'REGISTER_NOT_OK':
            return { ...state, regPrivate: 'not', serverStatus: 'off' };

        case SOCKET_READY:
            return { ...state, socketReady: true, serverStatus: 'on' };

        case RECEIVE_1101:
            return { ...state, receive1101: action.resData };

        case RECEIVE_3211:
            return { ...state, receive3211: action.resData };

        case RECEIVE_3220:
            return { ...state, receive3220: action.resData };

        case RECEIVE_3210:
            return { ...state, receive3210: action.resData };

        case 'ALGO_SIGNAL_READY':
            return { ...state, algoSignal: action.resData };

        case 'ALGO_SIGNAL_RECEIVE':
            return { ...state, receiveSignal: action.resData };

        default:
            return state;
    }
};

export default reducer;
