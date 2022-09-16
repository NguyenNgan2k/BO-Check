import React from "react";
import { BsVolumeDown } from "react-icons/bs"

import styled from "styled-components";
import circle from '../../assets/image/logo/circle.png';
import D from '../../assets/image/logo/D.png';
import dau from '../../assets/image/logo/dau.png';
import logo from '../../assets/image/logo/logo.png';
const StyleHeader = styled.div`
    height: 40px;
    margin: 0 160px 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


function DefaultHeader(props) {
    return (
        <>
            <StyleHeader>
                <div>
                    <img className="pr-2" style={{ height: '25px' }} src={circle} />
                    <img className="pr-1" style={{ height: '12px' }} src={D} />
                    <img className="pr-1" style={{ height: '12px' }} src={dau} />
                    <img className="pr-1" style={{ height: '12px' }} src={logo} />
                </div>
                <div>
                    <BsVolumeDown className="text-primary" style={{ height: '40px', width: '50px' }} />
                    <span className="text-white fz-14">Tuyển tập cổ phiếu có thể tăng &gt; 100% khi ra tin tốt (Season 6: Bắt đáy lãi to lo gì Covid-19) </span>
                </div>
                <div>

                </div>
            </StyleHeader>
        </>
    );
};
export default DefaultHeader;