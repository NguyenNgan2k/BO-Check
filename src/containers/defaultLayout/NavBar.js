import { use } from "echarts";
import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from 'react-router-dom';

const Hline = styled.div`
    background: #fff;
    width: 28px;
    height: 2px;
    }
`

function NavBar(props) {
    const path = useLocation();
    const { pathname } = path;
    return (
        <>
            <ul className="m-0 p-0" id="navbar">
                <li>
                    <NavLink to="/bang-gia/chung-khoan-co-so"
                        style={
                            isActive => ({
                                color: isActive ? "#EFF5F4" : "#8DA5A1",
                            })
                        }
                    >
                        Chứng khoán cơ sở
                    </NavLink>
                    {
                        pathname.startsWith('/bang-gia/chung-khoan-co-so') &&
                        <Hline />
                    }
                </li>
                <li>
                    <NavLink to="/bang-gia/bond"
                        style={
                            isActive => ({
                                color: isActive ? "#EFF5F4" : "#8DA5A1",
                            })
                        }
                    >
                        Trái phiếu
                    </NavLink>
                    {
                        pathname.startsWith('/bang-gia/bond') &&
                        <Hline />
                    }
                </li>
            </ul>
        </>
    );
};
export default NavBar;