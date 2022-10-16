import React from "react";
import styled from "styled-components";
import banner from "assets/image/banner/baner.png";

const StyledContainer = styled.div`
    margin-right: 170px;
`
const Banner = styled.div`
    background: linear-gradient(180deg, #2AC48D 0%, rgba(9, 43, 31, 0) 100%);
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

`
function Home(props) {
    return (
        <StyledContainer>
            <Banner className="banner">
                <div style={{ color: '#EFF5F4', fontSize: '50px', fontWeight: 'bold', padding: '120px 0 0 75px' }}>
                    <div className="mb-3">
                        Tự tin nâng tầm tài chính cùng hệ sinh thái <span style={{ color: '#32D8B3' }}>D-Invest</span>
                    </div>
                    <div style={{ color: '#D1E0DE', fontSize: '16px', marginBottom: '20px' }}>
                        Cùng xây dựng mục tiêu đầu tư hiệu quả ngay hôm nay!
                    </div>
                    <div>
                        <button >
                            Đặt mục tiêu
                        </button>
                    </div>

                </div>
                <img src={banner} className='w-100' />
            </Banner>
        </StyledContainer >
    );
}
export default Home;