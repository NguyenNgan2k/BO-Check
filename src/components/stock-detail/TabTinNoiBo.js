import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeGetStockNews } from "lib/seletor";
import PerfectScrollbar from 'react-perfect-scrollbar';
import tang from 'assets/image/icon/tang.png';
import giam from 'assets/image/icon/giam.png'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
`

function TabTinNoiBo(props) {
    const { stockNews } = props;
    return (
        <PerfectScrollbar style={{ height: '500px', marginTop: '40px' }}>
            <Container>
                {
                    stockNews && !!stockNews.length &&
                    stockNews.map((item, index) => {
                        return (
                            <div key={index} className='d-flex'>
                                <a href={item.URL} target="_blank"> <img
                                    src={item.imageUrl}
                                    style={{
                                        width: '150px',
                                        height: '100px',
                                        borderRadius: '12px',
                                        marginRight: '12px',
                                    }}
                                />
                                </a>
                                <div>
                                    <div
                                        style={{
                                            color: '#D1E0DE',
                                            fontSize: '12px',
                                            padding: '2px 6px',
                                            background: '#253734',
                                            borderRadius: '4px',
                                            width: '120px'
                                        }}
                                    >
                                        Đầu tư chứng khoán
                                    </div>
                                    <a href={item.URL} target="_blank"
                                        style={{ color: '#D1E0DE', fontSize: '18px', fontWeight: 'bold' }}
                                    >{item.Title}
                                    </a>
                                    <div className="text-white fz-12">
                                        <img className="pr-2" src={tang} alt="" />
                                        <span style={{ color: '#65817B' }}>{`${(Math.random() * 1000 + 1).toFixed(0)} Hữu ích`}</span>
                                        <img className="pr-2" src={giam} alt="" style={{ marginLeft: '20px' }} />
                                        <span style={{ color: '#65817B' }}>{`${(Math.random() * 1000 + 1).toFixed(0)} Chưa hữu ích`}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </Container>
        </PerfectScrollbar>
    );
};

const makeMapStateToProps = () => {
    const getStockNews = makeGetStockNews();
    const mapStateToProps = (state, props) => {

        return {
            stockNews: getStockNews(state)
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabTinNoiBo);