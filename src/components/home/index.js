import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IndexIndicator from "components/bang-gia/indexIndicator";
import banner from 'assets/image/banner/baner.png';
import banner2 from 'assets/image/banner/banner2.png';
import bn1 from 'assets/image/banner/bn1.png';
import bn2 from 'assets/image/banner/bn2.png';
import bn3 from 'assets/image/banner/bn3.png';
import img1 from 'assets/image/banner/img1.jpg';
import img2 from 'assets/image/banner/img2.jpg';
import img3 from 'assets/image/banner/img3.jpg';
import img4 from 'assets/image/banner/img4.jpg';
import img5 from 'assets/image/banner/img5.jpg';
import img6 from 'assets/image/banner/img6.jpg';
import img7 from 'assets/image/banner/img7.png';
import hpg from 'assets/image/logo/hpg.png';
import ros from 'assets/image/logo/ros.png';
import fpt from 'assets/image/logo/fpt.png';
import bidv from 'assets/image/logo/bid.png';
import pnj from 'assets/image/logo/pnj.png';
import mbb from 'assets/image/logo/mbb.png';

import { formatDate, formatDateTime } from "utils";
import { AiFillClockCircle } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import { BsChevronRight } from 'react-icons/bs'
import Slide from './layout/slide/Slide';
import CardTopChange from "./layout/cardTopChange";


const StyledContainer = styled.div`
    margin-right: 170px;
`
const Banner = styled.div`
    background: linear-gradient(180deg, #2AC48D 0%, rgba(9, 43, 31, 0) 100%);
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-radius:16px;
`
const GirdCard = styled.div`
    display:grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 40px;
    width: 100%;
`

const Card = styled.div`
    background: #253734;
    box-shadow: 2px 16px 32px rgb(188 197 204 / 18%);
    border-radius: 12px;
    padding: 32px;
`

const News = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;
`

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    padding: 60px 200px 0 0 ;
`
const Span = styled.div`
 border: 1px solid #253734;

`

const Tem = styled.div`
    display:flex;
    padding: 16px;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
    border-radius: 12px;
    background:#12211e;
    margin-top:24px;
    box-shadow: 2px 16px 32px rgb(188 197 204 / 18%);
`
function Home(props) {
    return (

        <StyledContainer className="banner">
            <Banner>
                <div style={{ color: '#EFF5F4', fontSize: '50px', fontWeight: 'bold', padding: '120px 0 0 75px' }}>
                    <div className="mb-3">
                        T??? tin n??ng t???m t??i ch??nh c??ng h??? sinh th??i <span style={{ color: '#32D8B3' }}>D-Invest</span>
                    </div>
                    <div style={{ color: '#D1E0DE', fontSize: '16px', marginBottom: '20px' }}>
                        C??ng x??y d???ng m???c ti??u ?????u t?? hi???u qu??? ngay h??m nay!
                    </div>
                    <div>

                        <button style={{ padding: '16px 70px' }} >
                            ?????t m???c ti??u
                        </button>
                    </div>

                </div>
                <img src={banner} className='w-100' />
            </Banner>
            <GirdCard>
                <Card>
                    <img src={bn1} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Ch???ng kho??n c?? s???</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>D??? d??ng ?????u t?? Ch???ng kho??n c?? s??? (C??? phi???u) v???i s??? v???n nh??? c??ng danh m???c s???n ph???m ??a d???ng</div>
                    <button style={{ float: 'right' }}>
                        <Link to='/bang-gia/chung-khoan-co-so/hose' className="text-white">
                            ?????u t?? c??? phi???u
                        </Link>
                    </button>
                </Card>
                <Card>
                    <img src={bn2} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Tr??i phi???u doanh nghi???p</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>L???a ch???n an to??n cho c??c nh?? ?????u t?? th???n tr???ng b???i t??nh b???o to??n v???n v?? ???n ?????nh l???i nhu???n</div>
                    <button style={{ float: 'right' }}>?????u t?? tr??i phi???u</button>
                </Card>
                <Card>
                    <img src={bn3} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Vay l?? qu??? Margin</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>S??? d???ng Margin t????ng ??????ng v???i vi???c c?? th??m l???i th??? ????n b???y t??i ch??nh, gi??p b???n t???i ??a h??a c?? h???i v?? gia t??ng l???i nhu???n</div>
                    <button style={{ float: 'right' }}>?????u t?? v???i margin</button>
                </Card>
            </GirdCard>
            <IndexIndicator />
            <Title>Kh??m ph?? tr???i nghi???m ?????u t?? D-Invest</Title>
            <div className="d-flex">
                <div style={{ width: '60%' }}>
                    <Slide />
                </div>

                <div style={{ width: '40%' }}>
                    <div style={{ color: '#EFF5F4', fontSize: '20px', fontWeight: 'bold', paddingLeft: '40px' }}>
                        B???ng gi?? ?????y ????? - Th??ng tin ch??nh x??c
                    </div>
                    <ul>
                        <li>
                            Th??ng tin ch??nh x??c v?? c???p nh???t
                            C??c th??ng tin quan tr???ng v?? n???i b???t v??? th??? tr?????ng s??? ???????c D-Invest li??n t???c c???p nh???t, gi??p b???n c?? c??i nh??n t???ng quan v?? ????a ra quy???t ?????nh k???p th???i v?? ch??nh x??c.
                        </li>
                        <li>
                            Nh???n ?????nh chi ti???t c???a c??c chuy??n gia
                            C??c g??c nh??n chuy??n s??u t??? ?????i ng?? chuy??n gia ?????u t?? c???a D-Invest s??? h??? tr??? b???n ????a ra c??c ????nh gi?? ??a chi???u, qua ???? gi??p b???n ?????u t?? t??? tin v?? ch??nh x??c!
                        </li>
                        <li>
                            Linh ho???t s??? d???ng m???i ch???c n??ng
                            Th???c hi???n c??c thao t??c nhanh g???n v???i danh s??ch ch???c n??ng ?????y ????? v?? c??c n??t b???m CTAs ?????y ti???n l???i.
                        </li>
                    </ul>
                    <button style={{ background: '#FFA23A', marginLeft: '40px' }}>V??o trang th??? tr?????ng</button>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <Title>Tin t???c n???i b???t</Title>
                <a>Xem th??m <BsChevronRight /></a>
            </div>
            <News className="new">
                <div style={{
                    gridColumn: '1/4',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gridGap: '20px',
                }}>
                    <div>
                        <img src={img1} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img2} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img3} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img4} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img5} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img6} className='w-100 rounded' />
                        <div style={{
                            color: '#EDF2F7', fontSize: '20px', fontWeight: 'bold', paddingTop: '16px'
                        }}>V?? sao ????i khi th??? tr?????ng ch???ng kho??n ph???n ??nh ng?????c chi???u v?? m???</div>
                        <div className="d-flex" style={{ color: '#8DA5A1', fontSize: '12px' }}>
                            <div>
                                <CgCalendarDates />
                                <span className="pl-2">{formatDate(new Date(), '/', 'dmy')}</span>
                            </div>
                            <div className="pl-3">
                                <AiFillClockCircle />
                                <span className="pl-2">{formatDateTime(new Date(), '/', 'dmy')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img7} className='w-100' />
                </div>
            </News>
            <Title>C???ng ?????ng ?????u t?? quan t??m g???</Title>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                gridGap: '20px',
            }} className='tem'>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={hpg} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={ros} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={fpt} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={bidv} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={pnj} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>B??i vi???t</div>
                    </div>
                    <Span />
                    <img src={mbb} />
                    <div>
                        <div>120</div>
                        <div style={{ color: '#31DB9F' }}>+1.98%</div>
                    </div>
                </Tem>
            </div>
            <CardTopChange />
            <div>
                <img src={banner2} className='w-100 mt-5' />
            </div>
        </StyledContainer >
    );
}
export default Home;