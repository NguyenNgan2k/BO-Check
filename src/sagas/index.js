import { all } from "redux-saga/effects";

import priceboardSaga from "../containers/bang-gia/sagas";
import StockDetailSaga from 'containers/stock-detail/sagas';

export default function* IndexSagas() {
    yield all([
        priceboardSaga(),
        StockDetailSaga(),
    ]);
}