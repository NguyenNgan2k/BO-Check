import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeGetTopMatch } from "lib/seletor";
import { formatVolume10, formatDateTime } from "utils";
import PerfectScrollBar from 'react-perfect-scrollbar';

const Container = styled.div`
    padding: 16px;

`

function StockTradeHistory(props) {
    const { topMatch } = props
    return (
        <Container>
            <div style={{ color: '#EFF5F4', fontSize: '18px', fontWeight: 'bold' }}>Lịch sử khớp lệnh</div>
            <PerfectScrollBar style={{ height: '450px' }}>
                <table className="w-100">
                    <thead>
                        <tr style={{ color: '#8DA5A1' }}>
                            <th> Giá khớp (VNĐ)</th>
                            <th> Khối lượng</th>
                            <th className="text-right">Thời gian</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            topMatch &&
                            !!topMatch.length &&
                            topMatch.map((item, index) => {
                                if (!item) return null
                                return (
                                    <tr key={index}>
                                        <td className={'fz-12 ' + item.COLOR}>{item.LAST_PRICE}</td>
                                        <td className="fz-12 lot">{formatVolume10(item.LAST_VOL)}</td>
                                        <td className="fz-12 lot text-right">{formatDateTime(item.UPDATED_TIME)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </PerfectScrollBar>
        </Container>
    );
};

const makeMapStateToProps = () => {
    const getTopMatch = makeGetTopMatch();

    const mapStateToProps = (state, props) => {
        return {
            topMatch: getTopMatch(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(StockTradeHistory);