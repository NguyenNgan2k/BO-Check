import { combineReducers } from "redux";

import priceBoard from '../containers/bang-gia/reducer';
import socket from "../containers/socket/reducer";
import client from "../containers/client/reducer";

const IndexReducer = combineReducers({
    priceBoard,
    socket,
    client,
});
export default IndexReducer;