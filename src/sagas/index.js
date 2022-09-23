import { all } from "redux-saga/effects";

import priceboardSaga from "../containers/bang-gia/sagas";
export default function* IndexSagas() {
    yield all([
        priceboardSaga(),
    ]);
}