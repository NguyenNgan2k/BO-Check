import React from "react";
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import styled from "styled-components";
import { CgSearch, CgSoftwareDownload, CgArrowsExchangeAltV } from "react-icons/cg";
import { RiHomeSmile2Line, RiEarthFill } from "react-icons/ri";
import { AiOutlineLineChart, AiOutlineSetting } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";

const StyleRight = styled.div`
position: absolute;
background: #12211E;
right: 0;
top: 40px;
padding: 35px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
z-index: 1;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    &: first-child {
      margin-bottom: 120px;
    }
    &: nth-child(8) {
        margin-top: 80px;
      }
    &: hover {
        background: radial-gradient(95.59% 167.1% at 32.8% 50%, #31DB9F 0%, #35D4D6 100%)
    }
`

function DefaultRight(props) {
    const path = useLocation();
    const { pathname } = path;
    return (
        <>
            <StyleRight>
                <ul className="m-0 p-0" id="right">
                    <li>
                        <CgSearch color="white" size={25} />
                    </li>
                    <li className={pathname.startsWith('/home') ? "icon-active" : ""}>
                        <Link
                            to={'home'}
                        >
                            <RiHomeSmile2Line color="white" size={25} />
                        </Link>
                    </li>
                    <li className={pathname.startsWith('/bang-gia') ? "icon-active" : ""}>
                        <Link
                            to={'/bang-gia'}
                        >
                            <AiOutlineLineChart color="white" size={25} />
                        </Link>
                    </li>
                    <li className={pathname.startsWith('/cash') ? "icon-active" : ""}>
                        <Link
                            to={'/cash'}
                        >
                            <BiDollarCircle color="white" size={25} />
                        </Link>
                    </li>
                    <li >
                        <Link
                            to={'home'}
                        >
                            <RiEarthFill color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'home'}
                        >
                            <HiOutlineUser color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'home/cash'}
                        >
                            <CgSoftwareDownload color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'home/cash'}
                        >
                            <CgArrowsExchangeAltV color="white" size={25} />
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={'home/cash'}
                        >
                            <AiOutlineSetting color="white" size={25} />
                        </Link>
                    </li>
                </ul>
                {/* <Icon>
                    <CgSearch color="white" size={25} />
                </Icon>
                <Icon className={pathname.endsWith('home') ? "icon-active" : ""}>
                    <Link
                        to={'home/bang-gia'}
                    >
                        <RiHomeSmile2Line color="white" size={25} />
                    </Link>
                </Icon>
                <Icon className={pathname.endsWith('bang-gia') ? "icon-active" : ""} >
                    <Link
                        to={'home/bang-gia'}
                    >
                        <AiOutlineLineChart color="white" size={25} />
                    </Link>
                </Icon>
                <Icon className={pathname.endsWith('cash') ? "icon-active" : ""}>
                    <Link
                        to={'home/cash'}
                    >
                        <BiDollarCircle color="white" size={25} />
                    </Link>
                </Icon>
                <Icon>
                    <RiEarthFill color="white" size={25} />
                </Icon> <Icon>
                    <HiOutlineUser color="white" size={25} />
                </Icon>
                <Icon>
                    <CgSoftwareDownload color="white" size={25} />
                </Icon>
                <Icon>
                    <CgArrowsExchangeAltV color="white" size={25} />
                </Icon>
                <Icon>
                    <AiOutlineSetting color="white" size={25} />
                </Icon> */}
            </StyleRight>
        </>
    );
};
export default DefaultRight;