import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { numberFormat } from 'utils';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { BsArrowLeftRight, BsChevronDown } from 'react-icons/bs';
import { BiBarChartSquare } from 'react-icons/bi';
import { RiMoneyDollarBoxLine, RiSearchLine } from 'react-icons/ri';
import { Card } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeGetAllStock } from "lib/seletor";
import { useHistory } from "react-router";

const Info = styled.div`
    display:flex;
    border-bottom:1px solid #253734;
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
`

function SymbolSnapshot(props) {
    const { stockDetail, sym, allStock } = props;
    console.log(sym);
    console.log(allStock)
    const [showModal, setShowModal] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const history = useHistory();

    useEffect(() => {
        return () => {
            setTextSearch('');
            onSuggestionsClearRequested();
        };
    }, []);

    function onSuggestionsClearRequested() {
        setSuggestions([]);
    }

    useEffect(() => {
        setSuggestions(getSuggestions(textSearch));
    }, [textSearch]);

    const getSuggestions = (values) => {
        if (values === '') {
            return [];
        }

        const regex = new RegExp('^' + values, 'i');
        return allStock.filter((item) => regex.test(item.stock_code));
    }
    const _handleClick = (value) => {
        setShowModal(false);
        history.push(`/symbol/detail/${value}`);
    }
    return (
        <>
            {sym && <Info>
                <div style={{ width: '220px', position: 'relative' }}>
                    <div className="d-flex align-items-center">
                        <div className="fz-24 font-weight-bold" style={{ color: '#EFF5F4' }}>
                            {stockDetail.sym}
                        </div>
                        <div className="fz-12 ml-1" style={{ color: '#EFF5F4' }}>( {sym.post_to} )</div>
                        <BsChevronDown
                            color='#EFF5F4'
                            style={{ marginLeft: '100px' }}
                            onClick={() => setShowModal(!showModal)}
                        />
                        {
                            showModal && (
                                <Card
                                >
                                    <Card.Body>
                                        <div>
                                            <input
                                                placeholder="Mã cổ phiếu"
                                                type='text'
                                                value={textSearch}
                                                onChange={(e) => setTextSearch(e.target.value)}
                                            />
                                            <RiSearchLine
                                                color="#8DA5A1"
                                                size={20}
                                                style={{
                                                    position: 'absolute',
                                                    top: '48px',
                                                    left: '50px',
                                                }}
                                            />
                                        </div>
                                        {
                                            textSearch &&
                                            <PerfectScrollbar style={{ maxHeight: '350px' }}>
                                                <>
                                                    <div style={{ color: '#EFF5F4', margin: '24px 0', fontWeight: 'bold', fontSize: '14px' }}>Khuyến nghị</div>
                                                    <ul className="p-0 m-0">
                                                        {
                                                            suggestions &&
                                                            !!suggestions &&
                                                            suggestions.map((item, index) => {
                                                                return (
                                                                    <li key={index} style={{ margin: '0 0  24px 14px', cursor: 'pointer' }} onClick={() => _handleClick(item.stock_code)}>
                                                                        <div style={{ color: '#EFF5F4', fontWeight: 'bold', fontSize: '14px' }}>{item.stock_code}</div>
                                                                        <div style={{ color: '#8DA5A1', fontSize: '12px' }}>{item?.name_vn}</div>
                                                                    </li>
                                                                );
                                                            })
                                                        }
                                                    </ul>
                                                </>
                                            </PerfectScrollbar>
                                        }
                                        {
                                            !textSearch &&
                                            <PerfectScrollbar style={{ maxHeight: '350px' }}>
                                                <>
                                                    <div style={{ color: '#EFF5F4', margin: '24px 0', fontWeight: 'bold', fontSize: '14px' }}>Khuyến nghị</div>
                                                    <ul className="p-0 m-0">
                                                        <li style={{ margin: '0 0  24px 14px', cursor: 'pointer' }} onClick={() => _handleClick('STB')}>
                                                            <div style={{ color: '#EFF5F4', fontWeight: 'bold', fontSize: '14px' }}>STB</div>
                                                            <div style={{ color: '#8DA5A1', fontSize: '12px' }}>Ngân hàng TMCP Sài Gòn Thương Tín</div>
                                                        </li>
                                                        <li style={{ margin: '0 0  24px 14px', cursor: 'pointer' }} onClick={() => _handleClick('ROS')}>
                                                            <div style={{ color: '#EFF5F4', fontWeight: 'bold', fontSize: '14px' }}>ROS</div>
                                                            <div style={{ color: '#8DA5A1', fontSize: '12px' }}>CTCP Xây dựng FLC FAROS</div>
                                                        </li>
                                                    </ul>
                                                </>
                                            </PerfectScrollbar>
                                        }
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                    <div className="fz-12 font-weight-bold" style={{ color: '#D1E0DE' }}>{sym.name_vn}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-24 font-weight-bold" style={{ color: '#EFF5F4' }}>{numberFormat(stockDetail?.lastPrice, 2)}</div>
                    {
                        (stockDetail.change != 0) &&
                        <div
                            className={
                                'fz-12 ' +
                                (stockDetail?.change > 0
                                    ? 'i' : 'd')
                            }
                        >
                            {
                                `${stockDetail?.change > 0 ? '+' : '-'}${stockDetail?.change} /
                      ${stockDetail?.change > 0 ? '+' : '-'}${stockDetail?.changePc}%`
                            }
                        </div>
                    }
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-12 c"><FiArrowUp /> Giá trần</div>
                    <div className=" fz-14 text-center c">{numberFormat(stockDetail?.c, 2)}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-12 f"><FiArrowDown /> Giá sàn</div>
                    <div className=" fz-14 text-center f">{numberFormat(stockDetail?.f, 2)}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-12 r">
                        <BsArrowLeftRight /> Mở cửa
                    </div>
                    <div className=" fz-14 text-center r">{numberFormat(stockDetail?.r, 2)}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-12" style={{ color: '#8DA5A1' }}><BiBarChartSquare size="18px" className="mr-1" /> Tổng khối lượng</div>
                    <div className=" fz-14 text-center lot">{numberFormat(stockDetail?.lot)}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="fz-12" style={{ color: '#8DA5A1' }}><RiMoneyDollarBoxLine size="18px" className="mr-1" />Tổng giá trị GD</div>
                    <div className=" fz-14 text-center lot">{numberFormat(stockDetail?.lot * stockDetail?.avePrice)}</div>
                </div>
            </Info>}

        </>
    );
};

const makeMapStateToProps = () => {
    const getAllStock = makeGetAllStock();
    const mapStateToProps = (state, props) => {

        return {
            allStock: getAllStock(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(SymbolSnapshot);