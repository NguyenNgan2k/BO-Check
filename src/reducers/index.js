import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import priceBoard from '../containers/bang-gia/reducer';
import socket from "../containers/socket/reducer";
import client from "../containers/client/reducer";
import stockDetail from "../containers/stock-detail/reducer";

const IndexReducer = combineReducers({
    priceBoard,
    socket,
    client,
    stockDetail,
    form,
});
export default IndexReducer;