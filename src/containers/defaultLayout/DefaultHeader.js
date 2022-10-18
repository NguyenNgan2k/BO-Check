import React from "react";
import { BsVolumeDown } from "react-icons/bs";

import styled from "styled-components";
import circle from '../../assets/image/logo/circle.png';
import D from '../../assets/image/logo/D.png';
import dau from '../../assets/image/logo/dau.png';
import logo from '../../assets/image/logo/logo.png';
import { WebSocketContext } from "../../containers/socket/webSocket";

const StyleHeader = styled.div`
    height: 40px;
    margin: 10px 170px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BoxIcon = styled.div`
    display: flex;
`

const Icon = styled.div`
    width: 128px;
    height: 40px;
    background: var(--bg-icon);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D1E0DE;
    font-weight: bold;
    &:hover {
        background: radial-gradient(95.59% 167.1% at 32.8% 50%, #31DB9F 0%, #35D4D6 100%);
    }
`

function DefaultHeader(props) {
    // const ws = useContext(WebSocketContext);
    // useEffect(() => {
    //     ws.init();
    // }, [])
    return (
        <div>
            <StyleHeader>
                <div>
                    <img className="pr-2" style={{ height: '25px' }} src={circle} />
                    <img className="pr-1" style={{ height: '12px' }} src={D} />
                    <img className="pr-1" style={{ height: '12px' }} src={dau} />
                    <img className="pr-1" style={{ height: '12px' }} src={logo} />
                </div>
                <div className="d-flex align-items-center">
                    <BsVolumeDown className="text-primary" style={{ height: '40px', width: '50px' }} />
                    <marquee width="100%" behavior="scroll">
                        <span className="fz-14" style={{ color: '#65817B' }}>Tuyển tập cổ phiếu có thể tăng &gt; 100% khi ra tin tốt (Season 6: Bắt đáy lãi to lo gì Covid-19) </span>
                    </marquee>

                </div>
                <BoxIcon>
                    <Icon className="mr-2">
                        Đăng nhập
                    </Icon>
                    <Icon>
                        Đăng ký
                    </Icon>
                </BoxIcon>
            </StyleHeader>
        </div>
    );
};
export default DefaultHeader;