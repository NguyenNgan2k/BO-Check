import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ChartTrend from "components/charts/ChartTrend";
import TopStock from "./TopStock";
import money from 'assets/image/icon/money-bag.195593e1.png'

const Container = styled.div`
    margin-top: 40px;
    padding-right:170px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 40px;
    height: auto;
`
const Card = styled.div`
    background: #12211e;
    border-radius: 2rem;
    padding: 32px;
    border: 1px solid #253734;
`
function TongQuan(props) {

    return (
        <Container>
            <Card style={{ gridColumn: '1/3' }}>
                <iframe
                    // ref={frameRef}
                    title="chart"
                    src={
                        'https://info.sbsi.vn/chartTHMS/?resolution=D&language=vi&theme=dark&symbol=VNINDEX'
                    }
                    scrolling="no"
                    width={'100%'}
                    height={'100% !important'}
                    frameBorder="no"
                ></iframe>
            </Card>
            <TopStock />
            <Card>
                <div className="d-flex justify-content-between mb-5">
                    <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Xu hướng ngành</div>
                    <select style={{ background: '#253734', border: '0', fontSize: '16px', color: '#EFF5F4', padding: '10px', fontWeight: 'bold', borderRadius: '12px' }}>
                        <option value='day'>1 ngày</option>
                        <option value='week'>1 tuần</option>
                        <option value='month'>1 tháng</option>
                    </select>
                </div>
                <ChartTrend />
            </Card>
            <Card>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Biến động thị trường</div>
                    <a style={{ color: '#FFA23A', fontSize: '12px' }}>Xem thêm</a>
                </div>

            </Card>
            <div>
                <div className="d-flex" style={{ background: '#25473b', borderRadius: '2rem', padding: '32px' }}>
                    <img style={{ width: '72px', height: '72px', marginRight: '20px' }} src={money} />
                    <div>
                        <div
                            style={{ color: '#33D49D ', fontSize: '24px', fontWeight: 'bold' }}
                        >
                            Nạp tiền vào quỹ
                        </div>
                        <div
                            style={{ color: '#8DA5A1', fontSize: '16px', fontWeight: '16px' }}
                        >
                            Tăng khả năng đầu tư và nhận thêm nhiều ưu đãi hấp dẫn nhất
                        </div>
                    </div>
                </div>
                <Card style={{ marginTop: '40px' }}>
                    <div className="d-flex justify-content-between align-items-center top">
                        <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Độ rộng thị trường</div>
                        <ul className="tab2 p-0 m-0 d-flex"  >
                            <li>
                                <a className="active">
                                    HNX
                                </a>
                            </li>
                            <li>
                                <a>
                                    HOSE
                                </a>
                            </li>

                        </ul>
                    </div>

                </Card>
            </div>
            <Card style={{ gridColumn: '1/3' }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Giao dịch khối ngoại</div>
                    <select style={{ background: '#253734', border: '0', fontSize: '16px', color: '#EFF5F4', padding: '10px', fontWeight: 'bold', borderRadius: '12px' }}>
                        <option value='day'>1 ngày</option>
                        <option value='week'>1 tuần</option>
                        <option value='month'>1 tháng</option>
                    </select>
                </div>
            </Card>
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

export default connect(makeMapStateToProps)(TongQuan);