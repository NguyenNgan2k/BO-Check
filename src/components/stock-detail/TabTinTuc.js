import React from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import TabTinNoiBo from "./TabTinNoiBo";
import { useEffect } from "react";
import { stockNewsRequest, stockEventsRequest } from "containers/stock-detail/actions";
import { daysInMonth, formatDate } from "utils";
import TabLichSuKien from "./TabLichSuKien";

const Container = styled.div`
    padding: 16px;
`
const Span = styled.div`
background: #fff;
    width: 28px;
    height: 2px;
`

function TabTinTuc(props) {
    const [isTab, setIsTab] = useState('noi-bo');
    const dispatch = useDispatch();
    const { stockCode } = props;

    function getTinNoiBo() {
        dispatch(stockNewsRequest(stockCode))
    }

    useEffect(() => {
        if (isTab && stockCode)
            switch (isTab) {
                case 'noi-bo':
                    getTinNoiBo()
                    break;

                case 'lich-su':
                    getEvents()
                    break;

                default:
                    break;
            }

    }, [isTab, stockCode])

    function getEvents() {
        var dt = new Date();
        const _toDate = new Date(new Date(dt).setMonth(dt.getMonth() + 3));
        const _fromDate = new Date(new Date(dt).setMonth(dt.getMonth() - 3));
        const _toYear = _toDate.getFullYear();
        const _toMonth = _toDate.getMonth();
        const _fromYear = _fromDate.getFullYear();
        const _fromMonth = _fromDate.getMonth();

        const firstDay = new Date(_fromYear, _fromMonth, 1);
        const lastDay = new Date(
            _toYear,
            _toMonth,
            daysInMonth(_toMonth, _toYear)
        );

        const paramsEvents =
            'symbol=' +
            stockCode +
            '&from=' +
            formatDate(firstDay, '-') +
            '&to=' +
            formatDate(lastDay, '-');

        dispatch(stockEventsRequest(paramsEvents))
    }

    return (
        <Container >
            <ul className="tab2 p-0 m-0 d-flex">
                <li>
                    <a
                        className={
                            (isTab === 'noi-bo') ? 'active' : ''
                        }
                        onClick={() => setIsTab('noi-bo')}>
                        Tin nội bộ
                    </a>
                    {(isTab === 'noi-bo') && <Span />}
                </li>
                <li>
                    <a
                        className={
                            (isTab === 'lich-su') ? 'active' : ''
                        }
                        onClick={() => setIsTab('lich-su')} >
                        Lịch sự kiện
                    </a>
                    {(isTab === 'lich-su') && <Span />}
                </li>
                <li>
                    <a
                        className={
                            (isTab === 'tin-nganh') ? 'active' : ''
                        }
                        onClick={() => setIsTab('tin-nganh')} >
                        Tin ngành
                    </a>
                    {(isTab === 'tin-nganh') && <Span />}
                </li>
            </ul>
            {(isTab === 'noi-bo') && <TabTinNoiBo />}
            {(isTab === 'lich-su') && <TabLichSuKien />}
        </Container >
    );
};

const makeMapStateToProps = () => {

    const mapStateToProps = (state, props) => {

        return {

        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabTinTuc);