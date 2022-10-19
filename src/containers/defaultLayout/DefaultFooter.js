import React from "react";
import styled from "styled-components";

import fb from 'assets/image/icon/fb.png';
import email from 'assets/image/icon/email.png';
import D_logo from 'assets/image/icon/D_logo.png';

const Footer = styled.div`
    padding: 60px 170px 60px 60px;
    display: flex;
    justify-content: space-between;
`
const Title = styled.div`
    color: #EFF5F4;
    fontSize: 16px;
    margin-bottom: 24px;
    font-weight: bold;
`

const Base = styled.div`
    padding: 25px 170px 25px 0;
    background: #253734;
    text-align: center;
    color: #EFF5F4;
`

function DefaultFooter() {
    return (
        <>
            <div style={{ padding: '60px', background: 'rgb(37, 55, 52)', textAlign: 'center' }}>
                <div style={{ color: '#EFF5F4', fontSize: '24px', fontWeight: 'bold' }}>Tham gia đầu tư ngay cùng D-Invest</div>
                <div style={{ color: '#8DA5A1', fontSize: '14px' }}>Khám phá danh sách sản phẩm đầu tư đa dạng cùng vô vàn tính năng ưu việt</div>
                <div style={{ color: '#8DA5A1', fontSize: '14px' }}>được tích hợp thông minh trên hệ sinh thái <span style={{ color: '#EFF5F4', fonrtWeight: 'bold' }}>D-Invest</span></div>
                <button style={{ background: 'radial-gradient(95.59% 167.1% at 32.8% 50%, #31DB9F 0%, #35D4D6 100%)', padding: '16px 40px', border: '0', borderRadius: '18px', color: '#EFF5F4', fontWeight: 'bold', marginTop: '24px' }}>Đầu tư ngay</button>
            </div>
            <Footer id="footer" style={{ background: '#12221f' }}>
                <div>
                    <Title>
                        D-Invest
                    </Title>
                    <ul>
                        <li><a href="#">Trang chủ</a></li>
                        <li><a href="#">Thị trường</a></li>
                        <li><a href="#">Cộng đồng</a></li>
                        <li><a href="#">Hợp tác kinh doanh</a></li>
                    </ul>
                </div>
                <div>
                    <Title>Dịch vụ</Title>
                    <ul>
                        <li><a href="#">Ứng dụng trên điện thoại</a></li>
                        <li><a href="#">Giao dịch chứng khoán</a></li>
                        <li><a href="#">Phái sinh</a></li>
                        <li><a href="#">Trái phiếu</a></li>
                    </ul>
                </div>
                <div>
                    <Title>Hỗ trợ</Title>
                    <ul>
                        <li><a href="#">Trung tâm hỗ trợ</a></li>
                        <li><a href="#">Yêu cầu hỗ trợ</a></li>
                        <li><a href="#">Phí giao dịch</a></li>
                        <li><a href="#">Xác minh eKYC</a></li>
                    </ul>
                </div>
                <div>
                    <Title>Kiến thức</Title>
                    <ul>
                        <li><a href="#">Đầu tư chứng khoán</a></li>
                        <li><a href="#">Phân tích kỹ thuật</a></li>
                        <li><a href="#">Phân tích cơ bản</a></li>
                        <li><a href="#">Các chỉ số của sàn</a></li>
                        <li><a href="#">Cơ hội bất động sản</a></li>
                    </ul>
                </div>
                <div>
                    <Title>Cộng đồng</Title>
                    <ul className="d-flex">
                        <li className="mr-2"><a href="#"><img src={fb} /></a></li>
                        <li className="mr-2"><a href="#"><img src={email} /></a></li>
                        <li className="mr-2"><a href="#"><img src={D_logo} /></a></li>
                    </ul>
                </div>
            </Footer >
            <Base>
                Một sản phẩm của tập đoàn
            </Base>
        </>
    );
}

export default DefaultFooter;