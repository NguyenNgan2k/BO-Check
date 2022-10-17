import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import priceBoard from '../containers/bang-gia/reducer';
import socket from "../containers/socket/reducer";
import client from "../containers/client/reducer";
import stockDetail from "../containers/stock-detail/reducer";
import home from 'containers/home/reducer';

const IndexReducer = combineReducers({
    priceBoard,
    socket,
    client,
    stockDetail,
    home,
    form,
});
export default IndexReducer;