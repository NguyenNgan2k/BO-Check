import React from "react";
import { BsVolumeDown } from "react-icons/bs";
import { HiOutlineBell, HiOutlinePhotograph } from 'react-icons/hi'

import styled from "styled-components";
import circle from '../../assets/image/logo/circle.png';
import D from '../../assets/image/logo/D.png';
import dau from '../../assets/image/logo/dau.png';
import logo from '../../assets/image/logo/logo.png';
import avatar from '../../assets/image/icon/avatar.png';

const StyleHeader = styled.div`
    height: 40px;
    margin: 10px 160px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BoxIcon = styled.div`
    display: flex;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background: var(--bg-icon);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px 0 5px
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
                <BoxIcon>
                    <Icon>
                        <HiOutlinePhotograph />
                    </Icon>
                    <Icon>
                        <HiOutlineBell />
                    </Icon>
                    <Icon>
                        <img style={{ width: '100%' }} src={avatar} />
                    </Icon>
                </BoxIcon>
            </StyleHeader>
        </>
    );
};
export default DefaultHeader;