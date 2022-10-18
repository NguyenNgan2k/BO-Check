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
                        Tự tin nâng tầm tài chính cùng hệ sinh thái <span style={{ color: '#32D8B3' }}>D-Invest</span>
                    </div>
                    <div style={{ color: '#D1E0DE', fontSize: '16px', marginBottom: '20px' }}>
                        Cùng xây dựng mục tiêu đầu tư hiệu quả ngay hôm nay!
                    </div>
                    <div>

                        <button style={{ padding: '16px 70px' }} >
                            Đặt mục tiêu
                        </button>
                    </div>

                </div>
                <img src={banner} className='w-100' />
            </Banner>
            <GirdCard>
                <Card>
                    <img src={bn1} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Chứng khoán cơ sở</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>Dễ dàng đầu tư Chứng khoán cơ sở (Cổ phiếu) với số vốn nhỏ cùng danh mục sản phẩm đa dạng</div>
                    <button style={{ float: 'right' }}>
                        <Link to='/bang-gia/chung-khoan-co-so/hose' className="text-white">
                            Đầu tư cổ phiếu
                        </Link>
                    </button>
                </Card>
                <Card>
                    <img src={bn2} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Trái phiếu doanh nghiệp</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>Lựa chọn an toàn cho các nhà đầu tư thận trọng bởi tính bảo toàn vốn và ổn định lợi nhuận</div>
                    <button style={{ float: 'right' }}>Đầu tư trái phiếu</button>
                </Card>
                <Card>
                    <img src={bn3} />
                    <div style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '24px', fontWeight: 'bold' }}>Vay lý quỹ Margin</div>
                    <div style={{ color: '#8DA5A1', fontWeight: 'bold', fontSize: '16px', marginBottom: '24px' }}>Sử dụng Margin tương đương với việc có thêm lợi thế đòn bẩy tài chính, giúp bạn tối đa hóa cơ hội và gia tăng lợi nhuận</div>
                    <button style={{ float: 'right' }}>Đầu tư với margin</button>
                </Card>
            </GirdCard>
            <IndexIndicator />
            <Title>Khám phá trải nghiệm đầu tư D-Invest</Title>
            <div className="d-flex">
                <div style={{ width: '60%' }}>
                    <Slide />
                </div>

                <div style={{ width: '40%' }}>
                    <div style={{ color: '#EFF5F4', fontSize: '20px', fontWeight: 'bold' }}>
                        Bảng giá đầy đủ - Thông tin chính xác
                    </div>
                </div>
            </div>

            <Title>Tin tức nổi bật</Title>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                        }}>Vì sao đôi khi thị trường chứng khoán phản ánh ngược chiều vĩ mô?</div>
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
                    <img src={img7} />
                </div>
            </News>
            <Title>Cộng đồng đầu tư quan tâm gì?</Title>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                gridGap: '20px',
            }} className='tem'>
                <Tem>
                    <div>
                        <div>120</div>
                        <div>Bài viết</div>
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
                        <div>Bài viết</div>
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
                        <div>Bài viết</div>
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
                        <div>Bài viết</div>
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
                        <div>Bài viết</div>
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
                        <div>Bài viết</div>
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