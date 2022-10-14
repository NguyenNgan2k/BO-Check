import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
    topChangeByIdSuccess,
    topChangeByIdRequest
} from 'containers/bang-gia/actions';

import * as _ from 'lodash';

import tang from 'assets/image/icon/tang.png';
import giam from 'assets/image/icon/giam.png';

function TopStock(props) {
    const { topChangeById } = props;
    console.log(topChangeById)
    const [isTab, setIsTab] = useState('hnx');
    const [typeChange, setTypeChange] = useState('i')

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(topChangeByIdSuccess(null))
        };
    }, []);

    useEffect(() => {
        if (isTab) {
            handleGetTopChangeById()
        }
    }, [isTab]);


    useEffect(() => {
        if (typeChange) {
            handleGetTopChangeById()
        }
    }, [typeChange]);

    function handleGetTopChangeById() {
        const _data = `count=5&type=${typeChange}&catId=${isTab === 'hnx' ? '02' : isTab === 'upcom' ? '03' : '10'
            }`;
        dispatch(topChangeByIdRequest(_data));
    };

    return (
        <div style={{ background: '#12211e', borderRadius: '2rem', padding: '32px', border: '1px solid #253734' }}>
            <div className="d-flex justify-content-between mb-5">
                <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Top cổ phiếu</div>
                <select
                    style={{ background: '#253734', border: '0', fontSize: '16px', color: '#EFF5F4', padding: '10px', fontWeight: 'bold', borderRadius: '12px' }}
                    onChange={(e) => setTypeChange(e.target.value)}
                >
                    <option value='i'>Tăng giá</option>
                    <option value='d'>Giảm giá</option>
                </select>
            </div>
            <div className="top" style={{ margin: '24px 0' }}>
                <ul className="tab2 p-0 m-0 d-flex" >
                    <li>
                        <a
                            className={
                                (isTab === 'hnx') ? 'active' : ''
                            }
                            onClick={() => setIsTab('hnx')}>
                            HNX
                        </a>
                    </li>
                    <li>
                        <a
                            className={
                                (isTab === 'hose') ? 'active' : ''
                            }
                            onClick={() => setIsTab('hose')} >
                            HOSE
                        </a>
                    </li>
                    <li>
                        <a
                            className={
                                (isTab === 'upcom') ? 'active' : ''
                            }
                            onClick={() => setIsTab('upcom')} >
                            UPCOM
                        </a>
                    </li>
                </ul>
                <ul className="w-100 p-0 m-0 mt-4">
                    {
                        topChangeById &&
                        topChangeById.map((item, index) => {
                            return (
                                <li key={index} style={{ marginBottom: '28px' }} className="w-100 d-flex align-items-center ">
                                    <Link
                                        to={'/symbol/detail/' + item.STOCK_CODE}
                                        style={{ color: '#EFF5F4', fontSize: '24px', fontWeight: 'bold', marginRight: '28px' }}
                                    >
                                        {item.STOCK_CODE}
                                    </Link>
                                    <div
                                        style={{ color: '#EFF5F4', fontSize: '16px', marginRight: '28px', width: '400px' }}
                                    >   Ngành -
                                        <br />
                                        {item.STOCK_NAME}
                                    </div>
                                    <div
                                    >
                                        <div className={'top-trend-' + typeChange} style={{ width: '50px' }}>
                                            {
                                                typeChange === 'i' &&
                                                <img src={tang} style={{ height: '10px', marginRight: '5px', }} />
                                            }
                                            {
                                                typeChange === 'd' &&
                                                <img src={giam} style={{ height: '10px', marginRight: '5px' }} />
                                            }

                                            {item.PERCENT_CHANGE}%
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        </div >
    );
}


const makeMapStateToProps = () => {


    const mapStateToProps = (state) => {
        return {
            topChangeById: state.priceBoard.topChangeById,
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TopStock);