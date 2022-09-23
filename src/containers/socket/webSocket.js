import { doc } from "prettier";
import React, { createContext, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { render } from "react-dom";
import io from "socket.io-client";


import { w3cwebsocket as W3CWebSocket } from "websocket";
import { hmsToSeconds, log } from "../../utils";
import { element } from "prop-types";

import {
    receive1101,
    socketReady,
    serverOff,
    receive3211,
    receive3220,
    receiveReregister,
    receive3210,
} from './actions';
// import {
//     _process3210,
//     _process3220,
//     _process3250,
//     _process9100,
// } from '../utils/priceboard';

const socketUrl = `${process.env.REACT_APP_SOCKET_URL}`;

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children, store }) => {
    let socket;
    let ws;
    let countPing = 0;
    let interval, timer;
    let renderQueue = [], mounted = false;

    const dispatch = useDispatch();

    useEffect(() => {
        // window.addEventListener('hashchange', handleChange);   //thay đổi  link hash
        document.addEventListener('visibilitychange', handleActivity)  //chuyển sang tab khác hoặc ẩn tab

        const d = new Date();


    }, [])
    function handleActivity() {
        console.log('clear queue')
        renderQueue = []
    }

    // function handleChange() {
    //     const pathname = window.location.hash;
    //     const d = new Date();
    //     const diffSecond = hmsToSeconds(d.getHours() + ':' + d.getHours() + ':' + d.getSeconds()) - hmsToSeconds('15:00:00');
    //     if (pathname.indexOf('/bang-gia') > -1 && diffSecond < 0) {
    //         if (!timer) timer = setInterval(processUpdateCell, 5 * 10);
    //     } else {
    //         if (timer) {
    //             clearInterval(timer);
    //             timer = undefined;
    //         }
    //         renderQueue = []
    //     }
    // }

    // const processUpdateCell = () => {
    //     mounted = true;
    //     const _processData = renderQueue.splice(0, 10)
    //     mounted = false;
    //     _processData.forEach(element => {
    //         if (element.id === 3220) _process3220(element)
    //         if (element.id === 3210) _process3210(element)
    //         if (element.id === 3250) _process3250(element)
    //     })
    // }

    const processTimeIndex = (msg1101) => {
        const time = msg1101.time;
        const diffSecond = hmsToSeconds(time) - hmsToSeconds('15:00:00');
        if (diffSecond > 0) {
            if (timer) {
                clearInterval(timer);
                timer = undefined;
            }
            renderQueue = [];
        }
    }

    const sendMessage = (message) => {
        if (!socket) return;
        if (message.action === 'join') {
            //phát dữ liệu
            socket.emit('regs', JSON.stringify(message), (dt) => {
                dispatch(socketReady());
                if (dt === 'OK') {
                    dispatch({ type: 'REGISTER_OK' });
                } else {
                    dispatch({ type: 'REGISTER_NOT_OK' });
                }
            }
            );
        } else {
            socket.emit('regs', JSON.stringify(message));
        }
    };

    const reconnectTrigger = () => {
        if (socket) socket.connect()
    }

    const init = () => {
        if (socket) {
            socket = null
        }
        if (!socket) {
            if (interval) clearInterval(interval);
            socket = io.connect(socketUrl, {
                autoConect: false,
                reconnection: false,
            })
            //Tiếp nhận và lắng nghe 
            socket.on('connect', () => {
                log('connected');
                dispatch(socketReady());
            });

            socket.on('reconnect', () => {
                log('reconnect');
                dispatch(socketReady());
            });

            socket.on('disconnect', () => {
                log('disconnect');
                // log(socket)
                dispatch(serverOff());
                init();
            });

            socket.on('reconnect_failed', () => {
                log('reconnect_failed');
                dispatch(serverOff());
            });

            socket.on('reconnect_error', () => {
                log('reconnect_error');
                dispatch(serverOff());
            });
            socket.on('public', (msg) => {
                const payload = msg.data;
                const _st = store.getState().socket.regTrade;
                switch (payload.id) {
                    case 6666:
                        dispatch(receiveReregister(true));
                        break;
                    case 1101:
                        processTimeIndex(payload);    //sau 15h clear
                        dispatch(receive1101(payload));  //luu data
                        break;
                    case 3210:
                        if (!mounted) renderQueue.push(payload)
                        if (payload.sym === _st) {
                            dispatch(receive3210)
                        }
                        break;
                    case 3220:
                    case 3223:
                        if (!mounted) renderQueue.push(payload)
                        if (payload.sym.startsWith('VN30') || payload.sym === _st) {
                            dispatch(receive3220(payload));
                        }
                    case 3250:
                        if (!mounted) renderQueue.push(payload);
                        break;
                        break;
                    // case 9100:
                    //     _process9100(payload);
                    //     break;
                    default:
                        break;
                }
            });

        }

    }


    ws = {
        socket: socket,
        sendMessage,             //Gửi tin nhắn đến máy chủ và thêm nó vào danh sách tin nhắn
        reconnectTrigger,
        init,                   //Để khởi tạo tất cả các biến và cũng khởi tạo socket và thêm listeners vào socket
    }

    return (
        <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
    );
};

