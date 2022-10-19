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
position: fixed;
background: #12211E;
right: 0;
top: 40px;
padding: 35px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
z-index: 1;
`


function DefaultRight(props) {
    const path = useLocation();
    const { pathname } = path;
    return (
        <>
            <StyleRight>
                <ul className="m-0 p-0" id="right">
                    <li
                        className="disabled">
                        <CgSearch color="white" size={25} />
                    </li>
                    <li className={pathname.startsWith('/home') ? "icon-active" : ""}>
                        <Link
                            to={'/home'}
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
                            to={'#'}
                            className="disabled"
                        >
                            <BiDollarCircle color="white" size={25} />
                        </Link>
                    </li>
                    <li >
                        <Link
                            to={'#'}
                            className="disabled"
                        >
                            <RiEarthFill color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'#'}
                            className="disabled"
                        >
                            <HiOutlineUser color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'#'}
                            className="disabled"
                        >
                            <CgSoftwareDownload color="white" size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'#'}
                            className="disabled"
                        >
                            <CgArrowsExchangeAltV color="white" size={25} />
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={'#'}
                            className="disabled"
                        >
                            <AiOutlineSetting color="white" size={25} />
                        </Link>
                    </li>
                </ul>
            </StyleRight>
        </>
    );
};
export default DefaultRight;