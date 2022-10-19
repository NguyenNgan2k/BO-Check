import React, { useState, useEffect, useContext } from "react";
import { Button } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { usePrevious } from 'lib/useHook';
import { topInterestRequest } from 'containers/home/actions';
import { WebSocketContext } from 'containers/socket/webSocket';
import { makeGetTopInterest } from "lib/seletor";
import * as _ from 'lodash';
import { AiOutlineStar } from 'react-icons/ai'
import { numberFormat } from "utils";
import ChartLineStock from "./chartLineStock";
import { unsetRegSymbol } from "containers/socket/actions";
import { topInterestSuccess } from "containers/home/actions";

function CardTopChange(props) {
    const [tabActive, setTabActive] = useState('ckcs');
    const [socketRegis, setSocketRegis] = useState('');
    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);

    const { topInterest, unsetRegSymbol } = props;
    const prevTopInterest = usePrevious(topInterest);
    console.log(topInterest)
    console.log(prevTopInterest)

    useEffect(() => {
        if (tabActive === 'ckcs') {
            // load top interest
            dispatch(topInterestRequest());
        }
        else {
            dispatch(topInterestSuccess(null))
        }

    }, [tabActive]);

    console.log(!_.isEqual(topInterest, prevTopInterest))

    useEffect(() => {
        if (topInterest &&
            !_.isEqual(topInterest, prevTopInterest)) {
            handleLeaveData(socketRegis);
            unsetRegSymbol();
            handleRegisterData(_.map(topInterest, 'STOCK_CODE').join(','));
        }

        return () => {
            handleLeaveData(socketRegis);
            unsetRegSymbol();
        }
    }, [topInterest])

    const handleRegisterData = (symbol) => {
        const payload = {
            action: 'join',
            data: symbol,
        };

        setSocketRegis(symbol);
        console.log('regis data', JSON.stringify(payload))
        return ws.sendMessage(payload)
    }

    const handleLeaveData = (symbol) => {
        const payload = {
            action: 'leave',
            data: symbol
        }

        console.log('regis data', JSON.stringify(payload))
        return ws.sendMessage(payload)
    }


    return (
        <div style={{ marginTop: '60px' }} className='cardtop'>
            <div className="d-flex justify-content-between" >
                <div
                    style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                    }}
                >
                    Xu hướng thị trường
                </div>
                <div>
                    <Button
                        className="mr-3"
                        variant={tabActive === 'ckcs' ? 'primary' : 'info'}
                        onClick={() => setTabActive('ckcs')}
                    >
                        Chứng khoán CS
                    </Button>
                    <Button
                        className="mr-3"
                        variant={tabActive === 'traiphieu' ? 'primary' : 'info'}
                        onClick={() => setTabActive('traiphieu')}
                    >
                        Trái phiếu DN
                    </Button>
                    <Button
                        variant={tabActive === 'phaisinh' ? 'primary' : 'info'}
                        onClick={() => setTabActive('phaisinh')}
                    >
                        Phái sinh
                    </Button>
                </div>
            </div>
            <table className="w-100 mt-3" style={{ background: '#12211e' }}>
                <colgroup>
                    <col width='6.25%'></col>
                    <col width='31.25%'></col>
                    <col width='6.25%'></col>
                    <col width='18.75%'></col>
                    <col width='6.25%'></col>
                    <col width='6.25%'></col>
                    <col width='6.25%'></col>
                    <col width='12.5%'></col>
                </colgroup>
                <thead style={{ color: '#43605B', fontWeight: 'bold' }}>
                    <tr>
                        <td>#</td>
                        <td>Mã cổ phiếu</td>
                        <td>Giá</td>
                        <td>% thay đổi 1 ngày</td>
                        <td>Giá trần</td>
                        <td>TC</td>
                        <td>Giá sàn</td>
                        <td>Khối lượng</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        topInterest &&
                        !!topInterest.length &&
                        topInterest.map((item, index) => {
                            return (
                                <tr key={index} id={item.STOCK_CODE + 'sym'}>
                                    <td style={{ color: '#65817B' }}><AiOutlineStar size={15} /> {index + 1}</td>
                                    <td>
                                        {item.STOCK_CODE} <span style={{ color: '#65817B' }}> {item.STOCK_NAME}</span>
                                    </td>
                                    <td
                                        id={item.STOCK_CODE + 'lastPrice'}
                                        className={
                                            item.COLOR === 'green' ? 'i'
                                                : item.COLOR === 'red' ? 'd'
                                                    : item.COLOR === 'violet' ? 'c'
                                                        : item.COLOR === 'cyan' ? 'f'
                                                            : 'r'
                                        }
                                    >
                                        <span>{numberFormat(item.PRICE, 2, '0')}</span>
                                    </td>
                                    <td className={'d-flex ' + item.COLOR}>
                                        <span id={item.STOCK_CODE + 'change'} style={{ marginRight: '100px' }}>
                                            {item.PERCENT_CHANGE}%
                                        </span>
                                        <span><ChartLineStock record={item} /></span>
                                    </td>
                                    <td id={item.STOCK_CODE + 'ceil'} className="c">
                                        {numberFormat(item.PRICE, 2, '0')}
                                    </td>
                                    <td id={item.STOCK_CODE + 'floor'} className="f">
                                        {numberFormat(item.PRICE, 2, '0')}
                                    </td>
                                    <td id={item.STOCK_CODE + 'ref'} className="r">
                                        {numberFormat(item.PRICE, 2, '0')}
                                    </td>
                                    <td id={item.STOCK_CODE + 'lot'} className="lot">
                                        {numberFormat(item.KLGD, 2, '0')}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

const makeMapStateToProps = () => {
    const getTopInterest = makeGetTopInterest();

    const mapStateToProps = (state, props) => {

        return {
            topInterest: getTopInterest(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps, { unsetRegSymbol })(CardTopChange);