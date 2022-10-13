import React from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { stockDetailRequest, topMatchRequest } from "./actions";
import { useEffect } from "react";
import { replaceAll } from "utils";
import { useState } from "react";
import { makeGetStockDetail } from "lib/seletor";
import { makeGetAllStock } from "lib/seletor";
import * as _ from 'lodash';

import phone from 'assets/image/icon/phone.png'
import {
    Tabs,
    Tab
} from 'react-bootstrap';

import SymbolSnapshot from "components/stock-detail/SymbolSnapshot";
import StockTrade from "components/stock-detail/StockTrade";
import StockTradeHistory from "components/stock-detail/StockTradeHistory";
import TabHoSoDN from "components/stock-detail/TabHoSoDN";
import TabBCTC from "components/stock-detail/TabBCTC";
import TabTinTuc from "components/stock-detail/TabTinTuc";
import TabChiSoPT from "components/stock-detail/TabChiSoPT";

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border:1px solid #253734;
    margin-right: 170px;
    border-radius: 1rem;
`

function StockDetail(props) {

    const {
        match: {
            params: { sym },
        },
        stockDetail,
        allStock
    } = props;

    const dispatch = useDispatch();

    const [symbolTrading, setSymboTrading] = useState('');
    const [isModal, setIsModal] = useState(true)

    useEffect(() => {
        if (sym) {
            let _symbol = sym
                ? replaceAll(sym.toUpperCase(), ' ', '')
                : 'AAA';

            setSymboTrading(_symbol);
            dispatch(stockDetailRequest(_symbol));
            dispatch(topMatchRequest(_symbol));
        }

    }, [sym])

    const symbol = _.find(allStock, (o) => o.stock_code === symbolTrading);
    return (
        <>
            <Grid>
                <div style={{ gridColumn: '1/4', borderRight: '1px solid #253734' }}>
                    <SymbolSnapshot stockDetail={stockDetail} sym={symbol} />
                    <Tabs
                        defaultActiveKey="overview"
                        className="text-white"
                    >
                        <Tab eventKey="overview" title="Tổng quan" className="h-100">
                            <iframe
                                // ref={frameRef}
                                title="chart"
                                src={
                                    'https://info.sbsi.vn/chartTHMS/?resolution=D&language=vi&theme=dark&symbol=' +
                                    symbolTrading
                                }
                                scrolling="no"
                                width={'100%'}
                                height={'100% !important'}
                                frameBorder="no"
                            ></iframe>
                        </Tab>
                        <Tab eventKey="history" title="Hồ sơ doanh nghiệp">
                            <TabHoSoDN stockCode={symbolTrading} />
                        </Tab>
                        <Tab eventKey="finance" title="Báo cáo tài chính">
                            <TabBCTC stockCode={symbolTrading} />
                        </Tab>
                        <Tab eventKey="profile" title="Tin tức">
                            <TabTinTuc stockCode={symbolTrading} />
                        </Tab>
                        <Tab eventKey="news" title="Chỉ số phân tích">
                            <TabChiSoPT />
                        </Tab>
                    </Tabs>
                </div>
                <div>
                    <StockTrade stockDetail={stockDetail} />
                    <StockTradeHistory />
                </div>
                <div className="w-100 text-center" style={{ borderLeft: '1px solid #253734', marginTop: '160px' }}>
                    <div><img className="w-100" src={phone} /></div>
                    <div className="fz-14" style={{ color: '#65817B' }}>Bạn cần đăng nhập để bắt đầu đặt lệnh</div>
                    <div className="fz-16 mt-2" style={{ color: '#32daa9' }}><a>Đăng nhập</a></div>
                </div>
            </Grid>

        </>
    );
};

const makeMapStateToProps = () => {
    const getStockDetail = makeGetStockDetail();
    const getAllStock = makeGetAllStock()
    const mapStateToProps = (state, props) => {

        return {
            stockDetail: getStockDetail(state),
            allStock: getAllStock(state)
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(StockDetail);