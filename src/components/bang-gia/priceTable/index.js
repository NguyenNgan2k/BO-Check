import React, { memo, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { makeGetAllStock, makeGetCategorySelected, makeGetPart, makeGetSocketStatus, } from "../../../lib/seletor";
import { usePrevious } from "../../../lib/useHook";
import * as _ from 'lodash';
import { getCodeByNameIndex } from "../../../utils";
import { WebSocketContext } from "../../../containers/socket/webSocket";
import { WindowContext } from '../../../containers/windowActive';


import TblGroup from "./layout/TblGroup";
import { useState } from "react";

import { getStockByIdRequest } from "../../../containers/bang-gia/actions";
import { useDispatch } from "react-redux";
import { setRegSymbol, unsetRegSymbol } from "../../../containers/socket/actions";

function PriceTable(props) {
    const {
        catalogSelected,
        allStock,
        regSym,
        unsetRegSymbol,
        partSnap,
        socketReady,
        serverStatus
    } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isPt, setIsPt] = useState(null);

    const prevCatalogSelected = usePrevious(props.catalogSelected);
    const prevAllStock = usePrevious(props.allStock);
    const prevServerStatus = usePrevious(serverStatus);

    const dispatch = useDispatch()

    const ws = useContext(WebSocketContext);
    const wc = useContext(WindowContext)
    const { windowIsActive } = wc;
    const preWindowIsActive = usePrevious(windowIsActive);

    // clear snapshot

    useEffect(() => {
        if (
            serverStatus &&
            serverStatus !== prevServerStatus &&
            serverStatus === 'on' &&
            prevServerStatus === 'off' &&
            socketReady
        ) {
            const _regSym = regSym;
            unsetRegSymbol();
            _handleRegisData(_regSym);
        }
    }, [serverStatus]);

    useEffect(() => {

        if (catalogSelected &&
            ((allStock && !_.isEqual(allStock, prevAllStock)) ||
                !_.isEqual(catalogSelected, prevCatalogSelected) ||
                !_.isEqual(catalogSelected.path, prevCatalogSelected.path))
        ) {
            fetchCategoryData(catalogSelected)
        }
    }, [catalogSelected, allStock])

    const fetchCategoryData = () => {
        console.log(catalogSelected)
        if (catalogSelected.type === 'group') {
            setIsLoading(true);
            return fetchGroup(catalogSelected.name, catalogSelected.groupName);
        }
    }

    const fetchGroup = (name, grName) => {
        name = name === 'HOSE' ? 'HSX' : name;
        console.log(name, grName)
        if (name === grName) {
            console.log('chay vo')
            //get all group 
            setIsLoading(true);
            const params = getCodeByNameIndex(grName);
            dispatch(getStockByIdRequest(params));
        }
        const symbolGr =
            grName === 'HSX'
                ? _.map(
                    _.filter(
                        allStock,
                        (o) => o.post_to === 'HOSE' || o.post_to === 'STO'
                    ),
                    'stock_code'
                )
                : grName === 'HNX'
                    ? _.map(
                        _.filter(
                            allStock,
                            (o) => o.post_to === 'HNX' || o.post_to === 'STX'
                        ),
                        'stock_code'
                    )
                    : _.map(
                        _.filter(
                            allStock,
                            (o) => o.post_to === 'UPCOM' || o.post_to === 'UPX'
                        ),
                        'stock_code'
                    );

        //hủy đăng ký cũ
        _handleLeaveData(regSym)
        //clear realtime đã lưu
        unsetRegSymbol();
        //đang ký realtime
        _handleRegisData(symbolGr.join(','));
        setIsPt(null);
    }

    const _handleLeaveData = (symbol) => {
        if (symbol) {
            const payload = {
                action: 'leave',
                data: symbol,
            };
            return ws.sendMessage(payload)
        }
    };

    const _handleRegisData = (symbol) => {
        const { setRegSymbol } = props;
        const payload = {
            action: 'join',
            data: symbol,
        };
        setRegSymbol(symbol)
        return ws.sendMessage(payload)
    }
    console.log(partSnap)
    return (
        <>
            {
                !isPt && catalogSelected && catalogSelected.type === 'group'
                && (<TblGroup partSnap={partSnap} />)
            }


        </>
    );
};

const makeMapStateToProps = () => {
    const getCatalogSelected = makeGetCategorySelected();
    const getAllStock = makeGetAllStock();
    const getPart = makeGetPart();
    const getSocketStatus = makeGetSocketStatus();

    const mapSateToProps = (state, props) => {
        return {
            catalogSelected: getCatalogSelected(state, props),
            allStock: getAllStock(state),
            regSym: state.socket.regSym,
            partSnap: getPart(state),
            socketReady: state.socket.socketReady,

            serverStatus: getSocketStatus(state),
        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps, {
    setRegSymbol,
    unsetRegSymbol,

})(memo(PriceTable));